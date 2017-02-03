import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactList extends Component {
  render() {
    return (
        <ul>
          {
            this.props.contactList.map(({ name, phone, email }) => (
                <li>{name} - {phone} - {email}</li>
            ))
          }
        </ul>
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
