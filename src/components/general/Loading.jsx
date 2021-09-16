import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ isLoading, setIsLoadingFunc }) => {
  return (
    <div></div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoadingFunc: PropTypes.func.isRequired,
};

export default Loading;