import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I25IcHOi2MlDokZ3b0LHoDypkXf749yv1ytew3OFkllqJnPVMYhRhpEy9hoBMB2rZuJrqLG1wKuAMkHxF7pe1rb00nMG1BOCO';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };
    return(
        <StripeCheckout
            label='Pay Now'
            name='World of Tanks'
            shippingAddress
            billingAddress
            image='https://i.ibb.co/yfzfJwj/logo.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            currency='USD'
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
} 
export default StripeCheckoutButton;