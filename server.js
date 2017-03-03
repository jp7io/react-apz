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

app.get('/api/contacts', (req, res) => {
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

  db.collection('contacts').find(filters).toArray((error, docs) => {
    if (error) {
      handleError(res, error.message, "Failed to fetch contacts"); // If this fails, return an Error 500 - Internal Server Error
    } else {
      const contacts = [];
      const promises = [];

      docs.forEach(doc => {
        let contact = Object.assign({}, doc);

        delete contact.city_id;

        promises.push(new Promise((resolve, reject) => {
          db.collection('cities').findOne({ _id: new ObjectID(doc.city_id) }, (error, doc) => {
            if (error) {
              reject(error);
            }
            contact.city = doc;
            contacts.push(contact);
            resolve();
          });
        }));
      });

      Promise.all(promises)
        .then(() => {
          res.status(200).json(contacts);
        })
        .catch(error => {
          handleError(res, error.message, 'Couldn\'t fetch city');
        });
    }
  })
});

app.get('/api/:collection', (req, res) => {
  const { collection } = req.params;

  db.collection(collection).find({}).toArray((error, docs) => {
    if (error) {
      handleError(res, error.message, "Failed to fetch " + collection);
    } else {
      res.status(200).json(docs);
    }
  });
})

app.get('/api/:collection/:id', (req, res) => {
  const { collection, id } = req.params;

  db.collection(collection).findOne({ _id: new ObjectID(id) }, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to fetch ' + collection, 404);
    } else {
      res.status(200).json(doc);
    }
  })
});

app.post('/api/:collection', (req, res) => {
  const { body }  = req;
  const { collection } = req.params;

  db.collection(collection).insertOne(body, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to create ' + collection);
    } else {
      res.status(201).json(doc.ops[0]);
    }
  })
});

app.put('/api/:collection/:id', (req, res) => {
  let { body } = req;
  const { collection, id } = req.params;

  delete body._id;

  db.collection(collection).updateOne({ _id: new ObjectID(id) }, body, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to update ' + collection);
    } else {
      res.status(204).end();
    }
  });
});

app.delete('/api/:collection/:id', (req, res) => {
  const { collection, id } = req.params;
  db.collection(collection).deleteOne({ _id: new ObjectID(id) }, (error, result) => {
    if (error) {
      handleError(res, error.message, "Failed to delete " + collection);
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
