import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const ListHeader = ({ path, headerText, linkText }) => (
  <div>
    <h2>{headerText}</h2>
    <Link
      to={{
        pathname: `${path}/new`,
        state: {
          parentPath: path
        }
      }}
      className="btn btn-primary"
    >
      {linkText}
    </Link>
  </div>
);

ListHeader.propTypes = {
  path: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default ListHeader;
