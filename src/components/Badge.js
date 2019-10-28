import React from 'react';
import './Badge.css';
import PropTypes from 'prop-types';

const Badge = ({number}) => {
  return (
    <div className={`badgeNumber ${number > 50 ? 'red' : 'green'}`}>{number}</div>
  );
}

Badge.propTypes = {
  url: PropTypes.number
};

export default Badge;
