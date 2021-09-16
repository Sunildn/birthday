import React, { useState, useEffect, useContext, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';
import { Loading, TwinItem } from '../../components';
import { FairyContext } from '../../context';
import { selectATwin as firebaseSelectATwin } from '../../firebase';
import '../../styles/Modal.css';

const SelectForMe = forwardRef((props, ref) => {
  const { fairy, setSelectedTwin } = useContext(FairyContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      open: () => setModalOpen(true),
      close: () => setModalOpen(false)
    };
  });

  const findingTwin = () => {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * props.matchedTwins?.length);
    const twin = props.matchedTwins[randomIndex];
    props.setTwinFunc(twin); // to local (for rendering)
    setLoading(false);
  };

  const selectTwin = () => {
    setLoading(true);
    firebaseSelectATwin(props.twin, fairy, setSelectedTwin);
  };

  useEffect(() => {
    findingTwin();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            className="modal-content-wrapper"
          >
            <motion.div
              className="modal-content"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.3} }}
            >
              {loading ? (
                <div>
                  <Loading />
                  <button onClick={selectTwin}></button>
                </div>
              ) : (
                <div>
                  <TwinItem />
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>  
  );
});

SelectForMe.propTypes = {
  matchedTwins: PropTypes.array.isRequired,
  twin: PropTypes.object.isRequired,
  setTwinFunc: PropTypes.func.isRequired,
};

export default SelectForMe;
