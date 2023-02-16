import {ADD_TO_CART ,REMOVE_FROM_CART,ADD_QUANTITY,EMPTY_CART,SUB_QUANTITY} from '../types'
 
const initialState = {
  cart: []
};
const cartReducer = (state = initialState, action) => {
    let cart = state.cart;
    console.log("ACTION PAYLOAD",action);
    // let filterItem = cart.filter((item) => action.payload.product.id !== item.product.id )
    // console.log("FILTER ITEM ",filterItem)
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart,action.payload]
            };
        case ADD_QUANTITY:
            let item = cart.find(item => item.product.id == action.payload.productId);
           
            let newCart = cart.filter(item => item.product.id != action.payload.productId);
             
            item.quantity = action.payload.quantity;
            newCart.push(item);
            return {
                ...state,
                cart: newCart
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: cart.filter(item => item.product.id != action.payload.productId)
            };
            case EMPTY_CART:
            return {
                ...state,
                cart:  []
            }; 
        default:
            return state;
    }
};
export default cartReducer
// const initialState = {
//   products: [],
// };
// const ShoppinReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//     console.log("ADD TO CAssRT");
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id ? {...product, selected: true} : product,
//         ),
        
//       };
      
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {...product, selected: false, quantity: 1}
//             : product,
//         ),
//       };
//     case ADD_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {...product, quantity: product.quantity + 1}
//             : product,
//         ),
//       };
//     case SUB_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {
//                 ...product,
//                 quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
//               }
//             : product,
//         ),
//       };
//     case EMPTY_CART:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.selected
//             ? {...product, selected: false, quantity: 1}
//             : product,
//         ),
//       };
//     default:
//       return state;
//   }
// };
// export {ShoppinReducer};