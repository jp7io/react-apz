import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/Link';

class ContactList extends Component {
  render() {
    return (
        <div>
          <h1>Contacts</h1>
          <Link to="/new">
            Create new Contact
          </Link>
          <ul>
            {
              this.props.contactList.map(({ name, phone, email }) => (
                  <li>{name} - {phone} - {email}</li>
              ))
            }
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
