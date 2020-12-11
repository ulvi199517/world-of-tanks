import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HhKHLGlhixIgel6qaD3HT0Yu5GEIRRbLLV99gfvVpMGoQkVEvTuZRWJdP4tLzGm79TXhS0ApacZdAMu5fuhGUBP00GlbcSZDi';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
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