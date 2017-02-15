import React from 'react';

const TextInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div
      className={`form-group ${
      touched && (
          error ? 'has-error' : warning ? 'has-warning' : 'has-success'
      )
          }`}
  >
    <label htmlFor={input.name} className="control-label">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" />
    {
      (() => (
        touched && (
          (error &&
            <span className="help-block">
              <i className="glyphicon glyphicon-remove-sign"></i> {error}
            </span>
          ) || (warning &&
            <span className="help-block">
              <i className="glyphicon glyphicon-exclamation-sign"></i> {warning}
            </span>
          )
        )
      ))()
    }
  </div>
);

export default TextInput;
