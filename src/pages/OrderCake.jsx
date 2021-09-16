import React, {  } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Navbar, CheckoutForm, CurrentStep, StepsProgress, OrderBox, Button } from '../components';
// import { FairyContext } from '../context';
// import { purchaseCake } from '../firebase';

const stripePromise = loadStripe('pk_live_51HKHymI6EeSe0f5lJ57UqteAr6GpH8GfZZnan5RHdkXdASWu4oEqEJEJ0CCfsP6MyMnYg6Pn4FMz4K57aoVZXkAK00O89bb29S');

function OrderCake(props) {
  // const { setOrder } = useContext(FairyContext);

  return (
    <div className="bg-bliss-blue min-h-screen">
      <Navbar />
      <div className="px-80">
        <CurrentStep numStep="03" stepName="Place the order" />
        <StepsProgress currentStep={3} />
        <OrderBox 
          cakeName="Chocolate Raspberry Cake"
          cakePrice="$7.99"
          userEmail="samhith.kakarla@gmail.com"
          twinName="Samhith Kakarla"
        />
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <Link to="/success">
          <Button 
            type="secondary"
            buttonText="PLACE ORDER"
          />
        </Link>
      </div>
    </div>
  );
};

OrderCake.propTypes = {};

export default OrderCake;

