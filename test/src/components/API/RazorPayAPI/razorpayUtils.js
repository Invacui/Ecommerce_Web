import { loadScript } from './utils';
import Logo from '../../../Drawables/Banner/Logo.png';

export const initiateRazorpayPayment = async (data) => {
  console.log("data", data.totalPrice);

  // Make an API call to your server-side to create a Razorpay order
  const response = await fetch('/create-order', {
    method: 'POST',
    body: JSON.stringify({
      amount: data.totalPrice.replace('.', ''),
      //email: data.email,
    contact: data.contact,
    contact1: data.totalPrice,
    username:data.User_Name,
    db_id: data.db_id, // Include db_id as a parameter
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Razorpay order creation response:', response);
  const responseData = await response.json();
  const orderId = responseData.orderId; // Retrieve the generated order ID

  console.log("Order ID:", orderId);
  console.log("DB ID:", data.db_id); // Log the db_id
  if (window.Razorpay) {
    const options = {
      key: 'rzp_test_aHOdspgUyROspi',
      amount: data.totalPrice.replace('.', ''),
      currency: 'INR',
      name: 'Shop Now',
      description: 'Payment for your order',
      image: Logo,
      db_id:responseData.db_id,
      order_id: orderId, // Use the generated order ID
      handler: function (response) {
        console.log("This is resp>>",response);
      },
      prefill: {
        email: data.email,
        contact: data.contact,
        username:data.User_Name,
        db_id:data.db_id,
      },
      notes: {
        orderI:responseData.db_id,
       username : data.User_Name
      },
      db_id: {
        db_id:responseData.db_id
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
