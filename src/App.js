import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactList from './containers/Contact/ContactList';
import ContactCreate from './containers/Contact/ContactCreate';
import ContactEdit from './containers/Contact/ContactEdit';
import Home from './components/Home';
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

              <ul className="nav navbar-nav">
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link to="/cities">Cities</Link>
                </li>
              </ul>
            </div>
          </nav>
          <section id="content" className="container-fluid">
            <div className="container">
              <Route exact path="/" component={Home} />

              <Route exact path="/contacts" component={ContactList} />
              <Route path="/contacts/new" component={ContactCreate} />
              <Route path="/contacts/edit/:contactId" component={ContactEdit} />
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
