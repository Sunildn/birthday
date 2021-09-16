import axios from 'axios';

export async function createStripePaymentIntent(price, billingDetails) {
  const paymentInfo = {
    amount: price * 100,
    email: billingDetails.email,
  };

  const url = 'https://bliss-fairy.herokuapp.com/stripe/make_payment';
  const params = { params: { paymentInfo }}
  try {
    const result = await axios.post(url, params);
    const clientSecret = result.data.data;

    return clientSecret;
  } catch (err) {
    console.log(err);
    return '';
  };
};

export async function handleStripeCheckout(
  stripe, clientSecret, cardElement, setIsProcessingFunc, setErrorFunc, setSucceededFunc
) {
  setIsProcessingFunc(true);

  const params = {
    payment_method: {
      card: cardElement,
    }
  };

  const payload = await stripe.confirmCardPayment(clientSecret, params);

  if (payload.error) {
    setErrorFunc(`Payment failed ${payload.error.message}`);
    setIsProcessingFunc(true);
    return '';
  } else {
    setErrorFunc(null);
    setIsProcessingFunc(false);
    setSucceededFunc(true);
    return '';
  };
};
