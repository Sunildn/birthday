import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { FaFilter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Navbar, CurrentStep, StepsProgress, TwinItem, SelectForMe, Button } from '../components';
import { FairyContext } from '../context';
import { 
  getMatchedTwins as firebaseGetMatchedTwins, 
  selectATwin as firebaseSelectATwin
} from '../firebase';

function SelectTwin(props) {
  const [matchedTwins, setMatchedTwins] = useState([]);
  const [twin, setTwin] = useState(null);

  const { fairy, setSelectedTwin } = useContext(FairyContext);

  const modalRef = useRef();

  const getMatchedTwins = async () => {
    const twins = await firebaseGetMatchedTwins(fairy.birthday);
    setMatchedTwins(twins);
  }

  useEffect(() => {
    // getMatchedTwins();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const selectTwin = (twin, twinIndex) => {
    const temp = matchedTwins.slice();
    temp[twinIndex].selected = !temp[twinIndex].selected;
    setMatchedTwins(temp);
    // Stored locally
    setTwin(twin);
    // Stored globally
    setSelectedTwin(twin);
  };

  const confirmSelectTwin = () => {
    // selectTwin(); // to be removed
    firebaseSelectATwin(twin, fairy, setSelectedTwin);
  }

  return (
    <div className="bg-bliss-blue min-h-screen">
      <Navbar />
      <div className="px-80">
        <CurrentStep numStep="01" stepName="Select a Twin" />
        <StepsProgress currentStep={1} />
        <div className="bg-white m-auto mt-6 mb-5 p-4">
          <div className="flex justify-between">
            <h1 className="">Your Birthday: </h1>
            <FaFilter />
          </div>
          <div className="flex">
            <FaChevronLeft />
            <TwinItem />
            <TwinItem />
            <TwinItem />
            <FaChevronRight />
          </div>
          <SelectForMe 
            ref={modalRef}
            matchedTwins={matchedTwins}
            twin={twin}
            setTwinFunc={setTwin}
          />
          <Button 
            type="secondary"
            buttonText="Select For Me!"
            size="small"
            onClick={() => modalRef.current.open()}
          />
        </div>
        <Link to="/select-cake">
          <Button 
            type="secondary"
            buttonText="NEXT"
            size="medium"
            onClick={confirmSelectTwin}
          />
        </Link>
      </div>
    </div>
  )
};

SelectTwin.propTypes = {};

export default SelectTwin;

