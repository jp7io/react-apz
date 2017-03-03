import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ContactList, ContactCreate, ContactEdit } from './containers/Contact';
import { CityList, CityCreate, CityEdit } from './containers/City';
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

              <Route exact path="/cities" component={CityList} />
              <Route path="/cities/new" component={CityCreate} />
              <Route path="/cities/edit/:cityId" component={CityEdit} />
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
