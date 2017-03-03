import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cityFetch, cityDelete } from '../../actions';
import { ListTable, ListHeader } from '../../components';

class CityList extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <ListHeader path={path} headerText="Cities" linkText="Add City" />
        <ListTable
          cols={[
            'Name',
            'State',
            'Country'
          ]}
          list={this.props.cityList}
          path={path}
          onClickDelete={this.props.onClickDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.cities
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(cityFetch()),
  onClickDelete: id => dispatch(cityDelete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CityList));
