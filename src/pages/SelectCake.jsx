import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaPen } from 'react-icons/fa';
import { Navbar, CurrentStep, StepsProgress, FilterItem, EditFilters, CakeItem, Button } from '../components';
// import { FairyContext } from '../context';
// import { getFilteredCakes } from '../firebase';

function SelectCake(props) {
  // const { setSelectedCake, matchedCakes, setMatchedCakes } = useContext(FairyContext);
  const [filterItems, setFilterItems] = useState([
    { id: 1, name: 'Filter 1', selected: true },
    { id: 2, name: 'Filter 2', selected: true },
    { id: 3, name: 'Filter 3', selected: true },
    { id: 4, name: 'Filter 4', selected: true },
    { id: 5, name: 'Filter 5', selected: true },
  ]);
  const [loadingCakes, setLoadingCakes] = useState(false);

  const modalRef = useRef();

  const removeFilterItem = (filter) => {
    setLoadingCakes(); // to be removed
    setFilterItems(filterItems.filter((item) => item.id !== filter.id));
    console.log(loadingCakes); // to be removed
  };

  return (
    <div className="bg-bliss-blue min-h-screen">
      <Navbar />
      <div className="px-80">
        <CurrentStep numStep="02" stepName="Choose a Cake" />
        <StepsProgress currentStep={2} />
        <div className="bg-white m-auto mt-6 mb-5 p-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h1 className="text-sm text-left mb-6">Your Twin's Favorite Flavor: CHOCOLATE</h1>
              <div className="bg-bliss-blue rounded-md h-40 p-5 flex">
                <EditFilters 
                  ref={modalRef}
                  filters={filterItems}
                  setFiltersFunc={setFilterItems}
                />
                {filterItems.map((filter) => {
                  if (filter.selected) {
                    return (
                      <FilterItem 
                        filterName={filter.name}
                        removeFilterFunc={() => removeFilterItem(filter)} 
                      />
                    );
                  }
                  return '';
                }
                )}
                <FaPen 
                  className="object-none object-right-bottom m-3" 
                  size={15} 
                  color="white" 
                  onClick={() => modalRef.current.open()}
                />
              </div>
            </div>
            <div className="bg-bliss-blue rounded-md p-5">
              <CakeItem cakeName="Chocolate Raspberry" cakePrice="$7.99" />
            </div>
          </div>
        </div>
        <Link to="/order">
          <Button 
            type="secondary"
            buttonText="NEXT"
          />
        </Link>
      </div>
    </div>
  )
};

SelectCake.propTypes = {};

export default SelectCake;

