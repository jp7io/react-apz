import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ValidationMessage from './ValidationMessage';

const SelectInput = ({ input, label, placeholder, options, meta: { touched, error, warning } }) => (
  <FormGroup
    controlId="state"
    validationState={
      touched ? (
        error ? 'error' : warning ? 'warning' : 'success'
      ) : null
    }
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl componentClass="select" placeholder={placeholder} {...input}>
      <option value={null}>{placeholder}</option>
      {
        options.map(({ key, value }) => (
          <option value={key} key={key}>{value}</option>
        ))
      }
    </FormControl>
    <ValidationMessage touched={touched} error={error} warning={warning} />
  </FormGroup>
);

export default SelectInput;
