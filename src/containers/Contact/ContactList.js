import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import { contactDelete, contactFetch } from '../../actions';

class ContactList extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <h2>Contact Manager</h2>
        <Link
          to={{
            pathname: `${path}/new`,
            state: {
              parentPath: path
            }
          }}
          className="btn btn-primary"
        >
          Create Contact
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contactList.map(({ _id, name, phone, email }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `${path}/edit/${_id}`,
                        state: {
                          parentPath: path
                        }
                      }}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Button
                      buttonType="btn-danger"
                      onClick={() => this.props.onClickDelete(_id)}>
                        Delete
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
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
