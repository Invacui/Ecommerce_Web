import React ,{useEffect,useState} from 'react';
import { useCartContext } from '../../context/cart_context';
import {  useNavigate } from "react-router-dom";
import { initiateRazorpayPayment, loadRazorpayScript } from '../../components/razorpayUtils';
const Cart = () => {
  const Nav = useNavigate();
  const [email, setEmail] = useState('');
  const { cart, increaseItemQuantity, decreaseItemQuantity, handleItemChange, handleRemoveItem, total_item, total_cart_product } =
    useCartContext();
  const subtotal = cart.reduce((total, item) => total + item.price * item.countI, 0);
  let shippingprice = total_item === 0 ? 0 : 4.99;

  const callCartPage = async () => {
    try {
      const res = await fetch('/DATAFEndpoint', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      console.log('This is Response==>', res);
      const data = await res.json();
      console.log('This is DATA==>', data);
      console.log('This is fname::', data.fname);
      setEmail(data.email);
      if (!res.status === 200) {
        const error = new Error(res.Error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Nav('/login');
    }
  };

  useEffect(() => {
    callCartPage();
  }, []);

  const handleClick = () => {
    initiateRazorpayPayment({
      email: email,
      contact: '9873264404',
    });
  };

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handleReVisit = (id) => {
    Nav(`/item-details/${id}`);
  };

  console.log('🚀 Winner Winner Bigger Dinner', cart);

  return (
    
    <div className="h-screen bg-gray-100 pt-20">
      <h1>Cart Items:{total_cart_product}</h1>
      <p>Total Items: {total_item}</p>
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3  "  >
          {cart.map((item) => (
            <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-9 shadow-md sm:flex sm:justify-start " >
              <img src={item.image} alt="product-image" className="rounded-lg md:w-40 h-20 cursor-pointer duration-150"onClick = {() =>handleReVisit(item.id)}/>
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0 cursor-pointer duration-150"onClick = {() =>handleReVisit(item.id)}>
                  <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{item.category}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex justify-end border-gray-100">{}
                    <span
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => {
                        if (item.countI > 1) {
                          decreaseItemQuantity(item.id);
                        } 
                      }}
                    >
                      -
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="text"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      value={item.countI}
                      min="1"
                      onChange={(e) => {
                        if (e.target.value >= 1) {
                          handleItemChange(item.id, e.target.value);
                        }
                      }}
                    />
                    <span
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => increaseItemQuantity(item.id)}
                      
                    >
                      
                      +
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm font-bold">${(item.price * item.countI).toFixed(2)}</p>
                    
  

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      onClick = {() =>handleRemoveItem(item.id)}
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 "
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* Subtotal calculations */}
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{shippingprice}</p>
          </div>
           
          <div className="py-2 mb-2 flex justify-between">
            <p className="text-gray-700">Total Items</p>
            <p className="text-gray-700">{total_item}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${(subtotal+ shippingprice).toFixed(2)}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"onClick = {() =>handleClick()}>
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
