import React from 'react';
import PropTypes from 'prop-types';

const CurrentStep = ({ numStep, stepName }) => {
  return (
    <div className="flex justify-center mt-14">
      <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center text-bliss-blue2 font-extrabold border-bliss-blue2 border-4">
        {numStep}
      </div>
      <h1 className="text-white text-xl font-extrabold ml-6">{stepName}</h1>
    </div>
  );
};

CurrentStep.propTypes = {
  numStep: PropTypes.string.isRequired,
  stepName: PropTypes.string.isRequired,
};

export default CurrentStep;