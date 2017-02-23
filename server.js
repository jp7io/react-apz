const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient, ObjectID } = require('mongodb');
const atob = require('atob');

let app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'build')));

try {
  const env = require('dotenv');

  env.config({ silent: true });
}
catch(e) {
  // Do nothing - if dotenv and cors are not installed then we probably don't need them
}

var db; // We will declare the database connection variable outside of the callback so that the server gets global access to it
const COLLECTION = "contacts";

MongoClient.connect(process.env.MONGODB_URI, (error, database) => {
  if (error) {
    console.log('There was an error while trying to connect to the database.', error);
    process.exit(1);
  }

  console.log('Successfully connected to MongoDB.');

  db = database;

  const server = app.listen(process.env.PORT || 8080, () => {
    const { port } = server.address();
    console.log('App now running on port %d in %s mode', port, app.settings.env);
  });
});

app.get('/contacts', (req, res) => {
  const { query } = req;
  let filters = {};

  if (Object.keys(query).length > 0) {
    filters = {
      phone: atob(query.phone)
    };

    if (query.id !== 'undefined' && query.id.length > 0) {
      Object.assign(filters, {
        _id: {
          '$ne': new ObjectID(query.id)
        }
      });
    }
  }

  db.collection(COLLECTION).find(filters).toArray((error, docs) => {
    if (error) {
      handleError(res, error.message, "Failed to fetch contacts"); // If this fails, return an Error 500 - Internal Server Error
    } else {
      let contacts = [];

      docs.forEach(doc => {
        contacts.push({
          id: doc._id,
          name: doc.name,
          phone: doc.phone,
          email: doc.email
        });
      });

      res.status(200).json(contacts);
    }
  })
});

app.get('/contacts/:id', (req, res) => {
  db.collection(COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to fetch contact', 404);
    } else {
      res.status(200).json({
        id: doc._id,
        name: doc.name,
        phone: doc.phone,
        email: doc.email
      });
    }
  })
});

app.post('/contacts', (req, res) => {
  const { body }  = req;

  if (!(body.name || body.email)) {
    handleError(res, "Invalid user input", "Must provide name and e-mail at least.", 400);
    return;
  }

  db.collection(COLLECTION).insertOne(body, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to create contact');
    } else {
      res.status(201).json(doc.ops[0]);
    }
  })
});

app.put('/contacts/:id', (req, res) => {
  let { body } = req;

  delete body.id;

  db.collection(COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, body, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to update contact');
    } else {
      res.status(204).end();
    }
  });
});

app.delete('/contacts/:id', (req, res) => {
  db.collection(COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, (error, result) => {
    if (error) {
      handleError(res, error.message, "Failed to delete contact");
    } else {
      res.status(204).end();
    }
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const handleError = (res, reason, message, code) => {
  console.log('Error: %s', reason);
  res.status(code || 500).json({ error: message });
};
