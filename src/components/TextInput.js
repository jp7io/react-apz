import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const TextInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <FormGroup
    controlId={input.name}
    validationState={
      touched ? (
        error ? 'error' : warning ? 'warning' : 'success'
      ) : null
    }
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={placeholder} type={type} />
    <FormControl.Feedback />
    {
      (() => (
        touched && (
          (error &&
            <HelpBlock>{error}</HelpBlock>
          ) || (warning &&
            <HelpBlock>{warning}</HelpBlock>
          )
        )
      ))()
    }
  </FormGroup>
);

export default TextInput;
