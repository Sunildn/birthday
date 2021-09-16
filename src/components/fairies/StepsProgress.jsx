import React from 'react';
import PropTypes from 'prop-types';

const StepsProgress = ({ currentStep }) => {
  return (
    <div className="flex justify-between mx-14 mt-6">
      <div className={`rounded-full flex justify-center items-center ${currentStep === 1 ? 'bg-bliss-pink w-10 h-10' : 'bg-white w-6 h-6'}`}></div>
      <div className={`rounded-full flex justify-center items-center ${currentStep === 2 ? 'bg-bliss-pink w-10 h-10' : 'bg-white w-6 h-6'}`}></div>
      <div className={`rounded-full flex justify-center items-center ${currentStep === 3 ? 'bg-bliss-pink w-10 h-10' : 'bg-white w-6 h-6'}`}></div>
    </div>
  );
};

StepsProgress.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default StepsProgress;