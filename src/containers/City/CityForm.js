import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select/*, CheckboxGroup, Checkbox */} from 'formsy-react-components';
import { Button, FormGroup } from 'react-bootstrap';


class CityForm extends Component {
  static defaultProps = {
    city: {
      _id: '',
      name: '',
      state: ''
    }
  }

  static propTypes = {
    city: PropTypes.object,
    parentPath: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    states: [],
    name: '',
    state: ''
  }

  componentWillMount() {
    fetch('http://services.groupkt.com/state/get/USA/all')
      .then(response => response.json())
      .then(json => this.setState({
        states: json.RestResponse.result.map(item => ({ value: item.abbr, label: item.name }))
      }));
  }

  render() {
    const { _id, name, state } = this.props.city;
    return (
      <Form onSubmit={this.props.onSubmit} layout="vertical">
        <Input
          name="_id"
          type="hidden"
          value={_id}
        />
        <Input
          name="name"
          label="Name"
          placeholder="e.g. Milwaukee"
          help="This field is required."
          value={name}
          required
        />
        <Select
          name="state"
          label="State"
          options={[
            { value: '', label: 'Please select a state.' },
            ...this.state.states
          ]}
          value={state}
          required
        />

        <FormGroup controlId="buttons">
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
          <Button bsStyle="default">
            Reset
          </Button>
          <Link to={this.props.parentPath}>
            <i className="glyphicon glyphicon-chevron-left"></i> Back to Home Page
          </Link>
        </FormGroup>
      </Form>
    )
  }
};

export default CityForm;
