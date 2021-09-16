import React, { createContext, useState } from 'react';
// import PropTypes from 'prop-types';

export const FairyContext = createContext();

const FairyContextProvider = (props) => {
  const [fairy, setFairy] = useState({}); 
  const [selectedTwin, setSelectedTwin] = useState([]); 
  const [selectedCake, setSelectedCake] = useState({}); 
  const [order, setOrder] = useState({}); 

  return (
    <FairyContext.Provider
      value={{ 
        fairy, setFairy,
        selectedTwin, setSelectedTwin,
        selectedCake, setSelectedCake, 
        order, setOrder
      }}
    >
      { props.children }
    </FairyContext.Provider>
  )
}

FairyContextProvider.propTypes = {};

export default FairyContextProvider;