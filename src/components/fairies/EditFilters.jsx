import React, { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Modal.css';

const EditFilters = forwardRef((props, ref) => {
  const[modalOpen, setModalOpen] = useState(false);
  const filterOptions = [
    { id: 1, name: 'filter 1', selected: false },
    { id: 2, name: 'filter 2', selected: false },
    { id: 3, name: 'filter 3', selected: false },
    { id: 4, name: 'filter 4', selected: false },
    { id: 5, name: 'filter 5', selected: false },
    { id: 6, name: 'filter 6', selected: false },
    { id: 7, name: 'filter 7', selected: false },
    { id: 8, name: 'filter 8', selected: false },
  ];
  const [items, setItems] = useState(filterOptions);

  useImperativeHandle(ref, () => {
    return {
      open: () => setModalOpen(true),
      close: () => setModalOpen(false)
    };
  });

  const removeFilterItem = (filter, filterIndex) => {
    // Change filters shown on SelectCake page
    props.setFiltersFunc(props.filters?.filter(item => item.id !== filter.id));
  };

  const selectFilterItem = (filterIndex) => {
    removeFilterItem(); // to be removed
    // Change filters in Modal
    const temp = filterOptions.slice();
    temp[filterIndex].selected = !temp[filterIndex].selected;
    setItems(temp);
    // Change filters shown on SelectCake Page
    props.setFiltersFunc(temp);
  };

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
            className="modal-content-wrapper w-1/3 h-3/5"
          >
            <motion.div
              className="modal-content"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.3} }}
            >
              <h1 className="text-2xl font-extrabold text-left ml-5 mt-5">Edit Filters</h1>
              <div className="flex-wrap">
                {items.map((item, index) => (
                  <div 
                    className={`${item.selected ? 'bg-bliss-pink' : 'bg-white border-bliss-pink'} w-1/4`}
                    onClick={() => selectFilterItem(index)}
                  >
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
});

EditFilters.propTypes = {
  filters: PropTypes.array.isRequired,
  setFiltersFunc: PropTypes.func.isRequired,
};

export default EditFilters;