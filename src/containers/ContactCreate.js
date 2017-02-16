import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { contactAdd } from '../actions';
import ContactForm from './ContactForm';

class ContactCreate extends Component {
  handleSubmit(values) {
    const { name, phone, email } = values;
    this.props.onSubmit({ name, phone, email });
    this.props.push("/");
  }

  render() {
    return (
        <ContactForm onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactAdd(contact))
});

export default connect(null, mapDispatchToProps)(withRouter(ContactCreate));
