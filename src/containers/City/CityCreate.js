import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cityAdd } from '../../actions';
import CityForm from './CityForm';

class CityCreate extends Component {
  handleSubmit(values) {
    const { onSubmit, push, location } = this.props;
    onSubmit(values);
    push(location.state.parentPath);
  }

  render() {
    const { location } = this.props;
    return (
      <CityForm onSubmit={this.handleSubmit.bind(this)} parentPath={location.state.parentPath} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: city => dispatch(cityAdd(city))
});

export default connect(null, mapDispatchToProps)(withRouter(CityCreate));
