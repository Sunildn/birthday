import React from 'react';
import PropTypes from 'prop-types';

const CakeItem = ({ cakeImageURL, cakeName, cakePrice }) => {
  return (
    <div className="bg-white h-28 w-1/2 rounded-lg">
      <h1 className="mb-6">CAKE IMAGE HERE</h1>
      <div className="bg-bliss-pink h-10 rounded-b-lg">
        <p className="text-white text-xs">{cakeName}</p>
        <p className="text-white text-sm font-bold">{cakePrice}</p>
      </div>
    </div>
  );
};

CakeItem.propTypes = {
  cakeImageURL: PropTypes.string.isRequired,
  cakeName: PropTypes.string.isRequired,
  cakePrice: PropTypes.string.isRequired,
};

export default CakeItem;