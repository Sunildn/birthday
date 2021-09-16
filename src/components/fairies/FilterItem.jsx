import React from 'react';
import PropTypes from 'prop-types';

import { FaTimes } from 'react-icons/fa';

const FilterItem = ({ filterName, removeFilterFunc }) => {
  return (
    <div className="bg-bliss-pink rounded-lg h-9 p-2 flex">
      <h1 className="text-white text-left text-sm">{filterName}</h1>
      <FaTimes 
        className="ml-2" 
        size={15} 
        color="white" 
        onClick={removeFilterFunc}
      />
    </div>
  );
};

FilterItem.propTypes = {
  filterName: PropTypes.string.isRequired,
  removeFilterFunc: PropTypes.func,
};

export default FilterItem;