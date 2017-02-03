import React, { Component } from 'react';
import Match from 'react-router/Match';
import logo from './logo.svg';
import ContactList from './containers/ContactList';
import ContactForm from './containers/ContactForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <h2>Contacts Manager</h2>
        <div className="container">
          <Match exactly pattern="/" component={ContactList} />
          <Match pattern="/new" component={ContactForm} />
        </div>
      </div>
    );
  }
}

export default App;
