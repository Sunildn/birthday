import React, { useState, useContext, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';
import { TextInput, Button } from '..';
import { FairyContext } from '../../context';
import { becomeAFairy as firebaseBecomeAFairy } from '../../firebase';
import '../../styles/Modal.css';

const GetStartedForm = forwardRef((props, ref) => {
  const { setFairy } = useContext(FairyContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [modalOpen, setModalOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setModalOpen(true),
      close: () => setModalOpen(false)
    };
  });

  // const formatBirthday = () => {};

  const becomeAFairy = async () => {
    setLoading(true);
    const fairy = { name, email, birthday };
    await firebaseBecomeAFairy(fairy, setFairy);
    setLoading(false);
  }
  
  return (
    <AnimatePresence>
      {modalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            onClick={() => setModalOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0, transition: { delay: 0.3 } }}
            className="modal-content-wrapper rounded-lg  w-1/3 h-4/6"
          >
            <div>
              {!loading ? (
                <>
                  <h1 className="text-2xl font-bold mt-8">Become a Fairy!</h1>
                  <p className="text-xs mx-10 mt-4">
                    Enter your basic info to get started! The entire process takes only 5 minutes!
                  </p>
                  <div className="mx-14 mt-6 mb-6">
                    <p className="text-left text-xs text-bliss-blue2">Name</p>
                    <TextInput 
                      placeholder="Your Name"
                      value={name}
                      onChangeFunc={setName}
                    />
                    <p className="text-left text-xs text-bliss-blue2 mt-5">Email</p>
                    <TextInput 
                      placeholder="Your Email"
                      value={email}
                      onChangeFunc={setEmail}
                    />
                    <p className="text-left text-xs text-bliss-blue2 mt-5">Your Upcoming Birthday</p>
                    {/* <TextInput 
                      placeholder="Your Email"
                      value={email}
                      onChangeFunc={setEmail}
                    /> */}
                    <input 
                      type="date" 
                      className="float-left text-white text-sm bg-bliss-blue p-3 my-3 focus:outline-none" 
                      min="2021-09-01"
                      max="2022-12-31"
                    />
                    <Button 
                      buttonText="GET STARTED!"
                      size="small"
                      type="secondary"
                    />
                  </div>
                </>
              ) : (
                <div></div>
            )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

GetStartedForm.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpenFunc: PropTypes.func.isRequired,
};

export default GetStartedForm;

