import React from 'react';

const Button = props => (
    <button className={`btn ${props.buttonType}`} onClick={props.onClick} title={props.children}>
      {props.children}
    </button>
);

export default Button;
