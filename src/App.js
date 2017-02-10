import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactList from './containers/ContactList';
import ContactCreate from './containers/ContactCreate';
import ContactEdit from './containers/ContactEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">React Apz</Link>
              </div>
            </div>
          </nav>
          <section id="content" className="container-fluid">
            <h2>Contacts Manager</h2>
            <div className="container">
              <Route exact path="/" component={ContactList} />
              <Route path="/new" component={ContactCreate} />
              <Route path="/edit/:contactId" component={ContactEdit} />
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
