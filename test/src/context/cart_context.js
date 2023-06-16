import React, { useContext, useReducer, createContext, useEffect } from 'react';
import CartReducer from './reducer/cart_reducer';

const CartContext = createContext();

const getLocalCartData = () => {
  try {
    const localCartData = localStorage.getItem("StoreCart");
    return localCartData ? JSON.parse(localCartData) : [];
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    return [];
  }
};


const initialState = {
  cart: getLocalCartData(),
  total_item: parseInt(localStorage.getItem("total_item")) || 0,
  total_cart_product: parseInt(localStorage.getItem("total_cart_product")) || 0,

};

export const Cart_provider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  
  const addToCart = (id, category, name, price, image, item) => {
    
    const existingItemIndex = state.cart.findIndex((item) => item.id === id);
    console.log("increase_item_triggred1");
    if (existingItemIndex !== -1) 
    {
        dispatch({
        type: 'ADD_TO_CART',
        payload: { id, category, name, price, image, item },
        });
  } else {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, category, name, price, image, item },});
      dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: id });
    }
  };

  const increaseItemQuantity = (id) => {
    console.log("increase_item_triggred3");
    dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: id });
  };

  const decreaseItemQuantity = (id) => {
    dispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: id });
  };
  const handleItemChange = (id, item) => {
    dispatch({ type: 'HANDLE_ITEM_CHANGE', payload: { id, item } });
  };
  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };


  useEffect(() => {
    localStorage.setItem("StoreCart", JSON.stringify(state.cart));
    localStorage.setItem("total_cart_product", state.total_cart_product.toString());
    localStorage.setItem("total_item", state.total_item.toString()); // Store total_item in local storage
  }, [state.cart, state.total_cart_product, state.total_item]);
        // Calculate total quantity
        
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total_item: state.total_item,
        total_cart_product: state.total_cart_product,
        addToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        handleItemChange,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
