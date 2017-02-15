import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class ContactForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <Field name="id" type="hidden" component="input" />
          <fieldset className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text" placeholder="e.g. John Doe" props={{ className: 'form-control' }} />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field name="phone" component="input" type="text" placeholder="(111) 111-1111" props={{ className: 'form-control' }} />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="email">E-mail</label>
            <Field name="email" component="input" type="email" placeholder="john.doe@example.com" props={{ className: 'form-control' }} />
          </fieldset>
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
