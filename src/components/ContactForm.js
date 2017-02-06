import React, { Component } from 'react';

export default class ContactForm extends Component {
  handleChange(event, prop) {
    const { value } = event.target;
    this.props.onChange({ prop, value });
  }

  render() {
    return (
        <div>
          <fieldset className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" value={this.props.name} onChange={event => this.handleChange(event, 'name')} placeholder="e.g. John Doe"  />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" className="form-control" value={this.props.phone} onChange={event => this.handleChange(event, 'phone')} placeholder="(111) 111-111"  />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" className="form-control" value={this.props.email} onChange={event => this.handleChange(event, 'email')} placeholder="john.doe@example.com"  />
          </fieldset>
        </div>
    );
  }
}
