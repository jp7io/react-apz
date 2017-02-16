import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../components/TextInput';

class ContactForm extends Component {
  required(value) {
    return value && value.length > 0 ? undefined : 'This field is required.';
  }

  maxLength(max) {
    return value => value && value.length <= max ? undefined : `Must have ${max} characters or less.`;
  }

  phoneFormat(value) {
    return value && /^\+1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(value) ? undefined : 'Must be in US format, e.g. +1 (111) 111-1111';
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="id" type="hidden" component="input" />

        <Field
          name="name"
          component={TextInput}
          type="text"
          label="Name"
          placeholder="e.g. John Doe"
          validate={[
            this.required,
            (() => this.maxLength(25))()
          ]}
        />

        <Field
          name="phone"
          component={TextInput}
          type="text"
          label="Phone"
          placeholder="(111) 111-1111"
          validate={[
            this.required,
            this.phoneFormat
          ]}
        />

        <Field
          name="email"
          component={TextInput}
          type="email"
          label="Email"
          placeholder="john.doe@example.com"
          validate={this.required}
        />

        <fieldset className="form-group">
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>&nbsp;
          <button type="button" disabled={pristine || submitting} className="btn btn-default" onClick={reset}>Reset</button>&nbsp;
          <Link to="/"><i className="glyphicon glyphicon-chevron-left"></i> Back to Home Page</Link>
        </fieldset>
      </form>
    )
  }
}

const phoneUnique = values => {
  const { phone, id } = values;
  return fetch(`/contacts?phone=${btoa(phone)}&id=${id}`)
    .then(response => response.json())
    .then(json => {
      if (json.length > 0) {
        // eslint-disable-next-line
        throw { phone: 'This phone number already exists.' };
      }
    });
}

export default reduxForm({
  form: 'contact', // This is the form's name and must be unique across the app
  asyncValidate: phoneUnique,
  asyncBlurFields: ['phone'],
  enableReinitialize: true
})(ContactForm);

