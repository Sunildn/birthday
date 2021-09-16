import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { FairyContext } from '../../context';
import { createStripePaymentIntent, handleStripeCheckout } from '../../api';

const CheckoutForm = ({ price }) => {
  const { fairy, selectedCake } = useContext(FairyContext);

  const [isProcessing, setIsProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [checkoutError, setCheckoutError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  // const billingDetails = {
  //   name: fairy ? fairy.name : '',
  //   email: fairy ? fairy.email : '',
  // };

  const cardElementStyles = {
    base: {
      color: "#000000",
      fontSize: "16px",
      iconColor: "#000000",
      "::placeholder": {
        color: "#87bbfd"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE"
    },
    complete: {
      iconColor: "#cbf4c9"
    }
  };

  const cardElementOptions = {
    iconStyle: 'solid',
    style: cardElementStyles,
  };

  const handleCardElementChange = async (e) => {
    setDisabled(e.empty);
    setCheckoutError(e.error ? e.error.message : null);
  };

  const cardElement = elements?.getElement("card");

  useEffect(() => {
    createStripePaymentIntent(selectedCake.price, fairy.email)
      .then((clientSecret) => {
      setClientSecret(clientSecret);
      })
      .catch((error) => {
      setCheckoutError(error.message);
    });
  });

  return (
    <div>
      <div style={{ height: 40, width: 400, alignItems: 'center', margin: 'auto' }}>
          <CardElement options={cardElementOptions} />
      </div>
      <button 
        onClick={() => 
          handleStripeCheckout(
            stripe, 
            clientSecret, 
            cardElement, 
            setIsProcessing, 
            setCheckoutError, 
            setSucceeded,
          )
        }
        disabled={isProcessing || disabled || succeeded}
        onChange={handleCardElementChange}
      >
        {isProcessing ? 'Processing' : 'Pay Order'}
      </button>
      {checkoutError !== '' ? checkoutError : null}
    </div>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CheckoutForm;
