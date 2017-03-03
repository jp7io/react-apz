import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cityEdit } from '../../actions';
import CityForm from './CityForm';

class CityEdit extends Component {
  state = {
    city: {}
  }

  componentWillMount() {
    const { cityId } = this.props.match.params;

    fetch(`/api/cities/${cityId}`)
      .then(response => response.json())
      .then(city => this.setState({ city }));
  }

  handleSubmit(values) {
    const { location, onSubmit, push } = this.props;
    onSubmit(values);
    push(location.state.parentPath);
  }

  render() {
    const { location } = this.props;

    return (
      <CityForm parentPath={location.state.parentPath} onSubmit={this.handleSubmit.bind(this)} city={this.state.city} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: city => dispatch(cityEdit(city))
});

export default connect(null, mapDispatchToProps)(withRouter(CityEdit));
