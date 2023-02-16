import {ADD_TO_CART, REMOVE_FROM_CART,ADD_QUANTITY,EMPTY_CART} from '../types'

export const addToCart = (product) => {
  return {
      type: ADD_TO_CART,
      payload: product
  }
};
export const removeFromCart = (productId) => {
  return {
      type: REMOVE_FROM_CART,
      payload: {
          productId: productId
      }
  }
};
export const updateCartQuantity = (productId, quantity) => {
return {
    type: ADD_QUANTITY,
    payload: {
        productId,
        quantity: quantity
    }
}
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
    payload:[],
  };
};
// export const addToCart = id => {
//     return {
//       type: ADD_TO_CART,
//       id
//     };
//   };
//   export const removeFromCart = id => {
//     return {
//       type: REMOVE_FROM_CART,
//       id,
//     };
//   };
//   export const subtractQuantity = id => {
//     return {
//       type: REMOVE_FROM_CART,
//       id,
//     };
//   };
//   export const addQuantity = id => {
//     return {
//       type: ADD_QUANTITY,
//       id,
//     };
//   };
//   export const emptyCart = () => {
//     return {
//       type: EMPTY_CART,
//     };
//   };