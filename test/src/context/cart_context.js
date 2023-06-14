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
  total_item: 0,
};

export const Cart_provider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, category, name, price, image, item) => {
    console.log("increase_item_triggred1");
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, category, name, price, image, item },
    });
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

  useEffect(() => {
    localStorage.setItem("StoreCart", JSON.stringify(state.cart));
  }, [state.cart]);
  

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total_item: state.total_item,
        addToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        handleItemChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
