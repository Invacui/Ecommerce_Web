import React ,{useEffect} from 'react';
import { useCartContext } from '../../context/cart_context';
import {  useNavigate } from "react-router-dom";

const Cart = () => {
  
  const Nav = useNavigate();
  const callCartPage = async() =>{
    try { 
      const res = await fetch('/DATAFEndpoint',{
        method:"GET",
        headers:{
          Accept:"applications/json",
          "Content-Type": "application/json"
        },
        credentials : "include"
      });
      console.log('This is Response==>',res);
      const data = await res.json();
      console.log('This is DATA==>',data);
      console.log('This is fname::',data.fname);

      if(!res.status === 200){
        const error = new Error(res.Error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      Nav('/login');
    }
  }

  useEffect(() => {
    callCartPage();
  }, []);

  const { cart, increaseItemQuantity, decreaseItemQuantity, handleItemChange,total_item } = useCartContext();
  const subtotal = cart.reduce((total, item) => total + (item.price * item.countI), 0);
  let shippingprice = total_item == 0 ? 0:4.99;
  console.log(
    "🚀 Winner Winner Bigger Dinner",cart)
  return (
    
    <div className="h-screen bg-gray-100 pt-20">
      <h1>Cart Items</h1>
      <p>Total Items: {total_item}</p>
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((item) => (
            <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{item.category}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
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
                    <p className="text-sm">${(item.price * item.countI).toFixed(2)}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${(subtotal+ shippingprice).toFixed(2)}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
