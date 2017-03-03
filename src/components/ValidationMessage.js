import React from 'react';
import { HelpBlock } from 'react-bootstrap';

const ValidationMessage = ({ touched, error, warning }) => (
  <div>
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
  </div>
);

export default ValidationMessage;
