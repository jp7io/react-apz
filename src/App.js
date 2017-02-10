import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactList from './containers/ContactList';
import ContactCreate from './containers/ContactCreate';
import ContactEdit from './containers/ContactEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ margin: 20 }}>
          <h2>Contacts Manager</h2>
          <div className="container">
            <Route exact path="/" component={ContactList} />
            <Route path="/new" component={ContactCreate} />
            <Route path="/edit/:contactId" component={ContactEdit} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
