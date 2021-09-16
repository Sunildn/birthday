import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ 
  placeholder, 
  value, 
  onChangeFunc, 
  color,
}) => {
  return (
    <input 
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeFunc(e.target.value)}
      className="focus:outline-none text-sm w-full border-b-2 border-bliss-blue py-2"
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default TextInput;