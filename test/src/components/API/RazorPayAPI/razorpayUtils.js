import { loadScript } from './utils';
import Logo from '../../../Drawables/Banner/Logo.png';

export const initiateRazorpayPayment = async (data) => {
  console.log("data", data.totalPrice);

  // Make an API call to your server-side to create a Razorpay order
  const response = await fetch('/create-order', {
    method: 'POST',
    body: JSON.stringify({
      amount: data.totalPrice.replace('.', ''),
      email: data.email,
    contact: data.contact,
    contact1: data.totalPrice,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  const orderId = responseData.orderId; // Retrieve the generated order ID

  console.log("Order ID:", orderId);

  if (window.Razorpay) {
    const options = {
      key: 'rzp_test_aHOdspgUyROspi',
      amount: data.totalPrice.replace('.', ''),
      currency: 'INR',
      name: 'Shop Now',
      description: 'Payment for your order',
      image: Logo,
      order_id: orderId, // Use the generated order ID
      handler: function (response) {
        console.log("This is resp>>",response);
      },
      prefill: {
        email: data.email,
        contact: data.contact,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } else {
    console.log('Razorpay script not loaded.');
  }
};

export const loadRazorpayScript = () => {
  loadScript('https://checkout.razorpay.com/v1/checkout.js', () => {
    console.log('Razorpay script loaded.');
  });
};
