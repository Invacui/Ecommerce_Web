import React, { useContext, useReducer, createContext } from 'react';
import CartReducer from './reducer/cart_reducer';

const CartContext = createContext();

const initialState = {
  cart: [],
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
