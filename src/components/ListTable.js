import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const ListTable = ({ cols, list, path, onClickDelete }) => (
  <Table striped hover>
    <thead>
      <tr>
        {
          cols.map((col, index) => (
            <th key={index}>
              {col}
            </th>
          ))
        }
        <th colSpan={2}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(({_id, ...list}) => (
          <tr key={_id}>
            {
              Object.keys(list).map((key, index) => (
                <td key={index}>
                  {list[key]}
                </td>
              ))
            }
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
              <Button bsStyle="danger" onClick={() => onClickDelete(_id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

ListTable.propTypes = {
  cols: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ListTable;
