import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import Button from '../components/Button';
import { contactDelete } from '../actions';

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
              this.props.contactList.map(({ name, phone, email }, index) => (
                  <li>{name} - {phone} - {email} - <Button buttonType="btn-danger" onClick={() => this.props.onClickDelete(index)}>Delete</Button></li>
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

const mapDispatchToProps = dispatch => ({
  onClickDelete: index => dispatch(contactDelete(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
