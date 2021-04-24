import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';




const Payment=()=> {



    const CheckoutForm = () => {
        const stripe = useStripe();
        const elements = useElements();
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
              Pay
            </button>
          </form>
        );
      };
    
      const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');




    return (
        <div>
         <h3 style={{textAlign:"center", marginTop:"4rem",marginBottom:"2rem"}}>PAYMENT WITH GPAY</h3> 
         <div style={{alignItems:"center", textAlign:"center"}}>
         <GooglePayButton
         environment="TEST"
         paymentRequest={{
           apiVersion: 2,
           apiVersionMinor: 0,
           allowedPaymentMethods: [
             {
               type: 'CARD',
               parameters: {
                 allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                 allowedCardNetworks: ['MASTERCARD', 'VISA'],
               },
               tokenizationSpecification: {
                 type: 'PAYMENT_GATEWAY',
                 parameters: {
                   gateway: 'example',
                 },
               },
             },
           ],
           merchantInfo: {
             merchantId: '12345678901234567890',
             merchantName: 'Demo Merchant',
           },
           transactionInfo: {
             totalPriceStatus: 'FINAL',
             totalPriceLabel: 'Total',
             totalPrice: '100.00',
             currencyCode: 'USD',
             countryCode: 'US',
           },
           shippingAddressRequired: true,
           callbackIntents:['PAYMENT_AUTHORIZATION'],
         }}
         onLoadPaymentData={paymentRequest => {
           console.log('Success', paymentRequest);
         }}

         onPaymentAuthorized={paymentData =>{
             console.log("Payment Auth Success",paymentData)
         }}

         existingPaymentMethodRequired="false"
         buttonColor="black"
         buttonType="Buy"
       />
       </div>
       <h3 style={{textAlign:"center", marginTop:"4rem",marginBottom:"2rem"}}>PAYMENT WITH PATYM</h3> 
       <div>
       <Elements stripe={stripePromise}>
       <CheckoutForm />
     </Elements>
       </div>
        </div>
    )
}

export default Payment
