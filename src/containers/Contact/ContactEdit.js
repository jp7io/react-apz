import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { contactEdit } from '../../actions';
import ContactForm from './ContactForm';

class ContactEdit extends Component {
  state = {
    contact: {}
  }

  componentWillMount() {
    const { contactId } = this.props.match.params;

    fetch(`/api/contacts/${contactId}`)
      .then(response => response.json())
      .then(contact => this.setState({ contact }));
  }

  handleSubmit(values) {
    const { location, onSubmit, push } = this.props;

    onSubmit(values);
    push(location.state.parentPath);
  }

  render() {
    const { location } = this.props;
    return (
      <ContactForm onSubmit={this.handleSubmit.bind(this)} initialValues={this.state.contact} parentPath={location.state.parentPath} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactEdit(contact))
});

export default connect(null, mapDispatchToProps)(withRouter(ContactEdit));
