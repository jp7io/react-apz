import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { fieldRequired, maxLength, phoneFormat, phoneUnique } from '../../validators';
import { TextInput, SelectInput } from '../../components';

class ContactForm extends Component {
  state = {
    cities: []
  }

  componentWillMount() {
    fetch('/api/cities')
      .then(response => response.json())
      .then(cities => this.setState({ cities }));
  }

  required(value) {
    return fieldRequired(value) ? undefined : 'This field is required.';
  }

  maxLength(max) {
    return value => maxLength(max)(value) ? undefined : `Must have ${max} characters or less.`;
  }

  phoneFormat(value) {
    return phoneFormat(value) ? undefined : 'Must be in US format, e.g. +1 (111) 111-1111';
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, parentPath } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="_id" type="hidden" component="input" />

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

        <Field
          name="city_id"
          component={SelectInput}
          label="City"
          placeholder="Pick a City"
          options={
            this.state.cities.map(city => ({
              key: city._id,
              value: `${city.name}, ${city.state}`
            }))
          }
        />

        <fieldset className="form-group">
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>&nbsp;
          <button type="button" disabled={pristine || submitting} className="btn btn-default" onClick={reset}>Reset</button>&nbsp;
          <Link to={parentPath}><i className="glyphicon glyphicon-chevron-left"></i> Back to Home Page</Link>
        </fieldset>
      </form>
    )
  }
}

export default reduxForm({
  form: 'contact', // This is the form's name and must be unique across the app
  asyncValidate: phoneUnique,
  asyncBlurFields: ['phone'],
  enableReinitialize: true
})(ContactForm);

