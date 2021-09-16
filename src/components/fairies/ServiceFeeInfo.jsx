import React, { useState, useImperativeHandle, forwardRef } from 'react';
// import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Modal.css';

const ServiceFeeInfo = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setModalOpen(true),
      close: () => setModalOpen(false)
    };
  });

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
              <div></div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>  
  );
});

ServiceFeeInfo.propTypes = {};

export default ServiceFeeInfo;