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
        countI: countI || 0,
        //totalQuantity: totalQuantity || 0,
        item,
      };
  
      const existingItemIndex = state.cart.findIndex((item) => item.id === cartProduct.id);
  
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].countI += 1;
      } else {
        state.cart.push(cartProduct); 
      }
      
      let totalQuantity = state.cart.reduce((total, item) => total + item.countI, 0);
      //Unique_product_quant_measure
      const uniqueProducts = state.cart.reduce((products, item) => {
        if (!products.includes(item.id)) {
          products.push(item.id);
        }
        return products;
      }, []);
      const totalCartProducts = uniqueProducts.length;
      
      return {
        ...state,
        cart: [...state.cart],
        total_item: totalQuantity,
        total_cart_product: totalCartProducts,
      };
  
/*====================End of ADD TO CART===================== */    
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
                countI: item.countI + 1, // Increment countI by 1 for existing item
                
              };
              
            }
            return item;
          }),
          total_item: state.total_item + 1,
          
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
          total_item: state.total_item + 1,
        };
      
    } else if (action.type === "REMOVE_ITEM") {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
        total_item: state.total_item * 0, // Decrement the total_item by 1
      };
    }
    

    return state;
      
  };
  
  export default CartReducer;

  
