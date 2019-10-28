import React from 'react';
import './UserCard.css';
import PropTypes from 'prop-types';

const UserCard = ({number}) => {
  return (
    <div className={`badgeNumber ${number > 50 ? 'red' : 'green'}`}>{number}</div>
  );
}

// Badge.propTypes = {
//   url: PropTypes.number
// };

export default UserCard;
