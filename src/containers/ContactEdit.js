import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { contactEdit } from '../actions';
import ContactForm from './ContactForm';

class ContactEdit extends Component {
  state = {
    contact: {}
  }

  componentWillMount() {
    const { contactId } = this.props.match.params;

    fetch(`/contacts/${contactId}`)
      .then(response => response.json())
      .then(contact => this.setState({ contact }));
  }

  handleSubmit(values) {
    this.props.onSubmit(values);
    this.props.push("/");
  }

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit.bind(this)} initialValues={this.state.contact} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactEdit(contact))
});

export default connect(null, mapDispatchToProps)(withRouter(ContactEdit));
