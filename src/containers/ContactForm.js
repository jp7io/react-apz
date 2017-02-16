import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

class ContactForm extends Component {
  required(value) {
    return value ? undefined : 'This field is required.';
  }

  maxLength(max) {
    return value => value && value.length > max ? `Must be ${max} characters or less.` : undefined;
  }

  email(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address.' : undefined
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
            validate={this.required}
          />

          <Field
            name="email"
            component={TextInput}
            type="email"
            label="Email"
            placeholder="john.doe@example.com"
            validate={[
              this.required,
              this.email
            ]}
          />

          <fieldset className="form-group">
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>&nbsp;
            <button type="button" disabled={pristine || submitting} className="btn btn-default" onClick={reset}>Reset</button>&nbsp;
            <Link to="/"><i className="glyphicon glyphicon-chevron-left"></i> Back to Home Page</Link>
          </fieldset>
        </form>
    );
  }
}

export default reduxForm({
  form: 'contact',
  enableReinitialize: true
})(ContactForm);
