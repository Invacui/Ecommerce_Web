const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, category, name, price, image, countI, item } = action.payload;
      let cartProduct;
  
      cartProduct = {
        id: item.id,
        category: item.category,
        name: item.name,
        price: item.price,
        image: item.image,
        countI: countI || 1,
        item,
      };
  
      const existingItemIndex = state.cart.findIndex((item) => item.id === cartProduct.id);
  
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].countI += 1;
      } else {
        state.cart.push(cartProduct);
      }
  
      const totalQuantity = state.cart.reduce((total, item) => total + item.countI, 0);
  
      return {
        ...state,
        total_item: totalQuantity,
      };
    } else if (action.type === "INCREASE_ITEM_QUANTITY") {
        const  id  = action.payload;
        return {
          ...state,
          cart: state.cart.map((item) => {
            console.log(`Item.Id:${item.id},Id:${id},CountI:${item.countI},CountI:${item.countI + 1},ActionPayload:${action.payload}`);
            if (item.id === id) {
              console.log(`CartCartuCaru=> ${item.countI}`);
              return {
                ...item,
                countI: item.countI + 1, // Increment countI by 1
              };
              
            }
            return item;
          }),
          
        };
      } else if (action.type === "DECREASE_ITEM_QUANTITY") {
        const id  = action.payload;
    
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                countI: item.countI > 1 ? item.countI - 1 : 1, // Decrement countI by 1
              };
            }
            return item;
          }),
        };
      
    } else if (action.type === "HANDLE_ITEM_CHANGE") {
      const { id, item } = action.payload;
  
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              countI: item,
            };
          }
          return item;
        }),
      };
    }
    
      return state;
    };
  
  export default CartReducer;

  
