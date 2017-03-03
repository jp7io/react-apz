import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListHeader, ListTable } from '../../components';
import { contactDelete, contactFetch } from '../../actions';

class ContactList extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <ListHeader path={path} headerText="Contact Manager" linkText="Create Contact"/>
        <ListTable
          cols={[
            'Name',
            'Phone',
            'Email'
          ]}
          list={this.props.contactList}
          path={path}
          onClickDelete={this.props.onClickDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(contactDelete(id)),
  onLoad: () => dispatch(contactFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactList));
