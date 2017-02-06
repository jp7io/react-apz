import React, { Component } from 'react';
import Match from 'react-router/Match';
import logo from './logo.svg';
import ContactList from './containers/ContactList';
import ContactCreate from './containers/ContactCreate';
import ContactEdit from './containers/ContactEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <h2>Contacts Manager</h2>
        <div className="container">
          <Match exactly pattern="/" component={ContactList} />
          <Match pattern="/new" component={ContactCreate} />
          <Match pattern="/edit/:contactId" component={ContactEdit} />
        </div>
      </div>
    );
  }
}

export default App;
