import React from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';

const Avatar = ({url}) => {
  return (
    <img className="image" src={url} alt="Neopet Avatar"/>
  );
}

Avatar.propTypes = {
  url: PropTypes.string
}

export default Avatar;
