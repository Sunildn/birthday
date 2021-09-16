import React from 'react';
import PropTypes from 'prop-types';

const OrderBox = ({ 
  cakeImageURL, 
  cakeName, 
  cakePrice,
  userEmail,
  twinName,
}) => {
  return (
    <div className="grid grid-cols-2 h-20 mt-5 mb-5">
      <div className="bg-bliss-blue2 rounded-l-lg">
        {/* CAKE IMAGE HERE */}
        <h1 className="text-white text-md">{cakeName}</h1>
        <h1 className="text-white text-xl font-extrabold mt-3">{cakePrice}</h1>
      </div>
      <div className="bg-bliss-pink rounded-r-lg p-5">
        <h1 className="text-white font-bold text-sm text-left">YOUR EMAIL:</h1>
        <h1 className="text-white font-medium text-sm text-left">{userEmail}</h1>
        <h1 className="text-white font-bold text-sm text-left mt-5">YOUR TWIN'S NAME:</h1>
        <h1 className="text-white font-medium text-sm text-left">{twinName}</h1>
        <div className="grid grid-cols-3 mt-7">
          <div className="col-span-2">
            <h1 className="text-white text-xs font-normal text-left">
              {`(1) ${cakeName}`}
            </h1>
            <h1 className="text-white text-xs font-normal text-left">
              Service Fee
            </h1>
            <h1 className="text-white text-md font-medium text-left mt-5">
              TOTAL
            </h1>
          </div>
          <div className="ml-6">
            <h1 className="text-white text-xs font-normal text-left">
              {cakePrice}
            </h1>
            <h1 className="text-white text-xs font-normal text-left">
              $5.00
            </h1>
            <h1 className="text-white text-md font-bold text-left mt-5">
              $12.99
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderBox.propTypes = {
  cakeImageURL: PropTypes.string.isRequired,
  cakeName: PropTypes.string.isRequired,
  cakePrice: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  twinName: PropTypes.string.isRequired,
};

export default OrderBox;
