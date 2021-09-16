import React from 'react';
// import PropTypes from 'prop-types';

import { FaCheck } from 'react-icons/fa';
import { Navbar, Button } from '../components';

function Complete(props) {
  return (
    <div className="bg-bliss-blue min-h-screen">
      <Navbar />
      <div className="px-80">
        <div className="bg-bliss-pink rounded-full w-28 h-28 flex justify-center items-center m-auto mt-24">
          <FaCheck color="white" size={45} />
        </div>
        <h1 className="text-white text-4xl mt-10 font-extrabold">This is going to be some header.</h1>
        <p className="text-white text-sm mt-8 mb-12 font-light px-36">
          This is going to be some sub-header text. This is going to be sub-header text. This is going to be some sub-header text.
        </p>
        <Button 
          type="secondary"
          buttonText="FINISH"
        />
      </div>
    </div>
  )
};

Complete.propTypes = {};

export default Complete;

