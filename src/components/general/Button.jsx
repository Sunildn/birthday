import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, screen, size, onClick, disabled, buttonText }) => {
  return (
    <button
      className={type === 'primary' ? 'bg-bliss-blue' : 'bg-bliss-pink'}
      onClick={onClick}
    >
      <p className={`text-white font-extrabold p-3 px-8 ${size === 'small' ? 'text-sm' : 'text-md'}`}>{buttonText}</p>
    </button>
  )
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;