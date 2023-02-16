import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducers/rootReducer';

let middleware = [];
if (__DEV__) {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const middlewares = applyMiddleware(...middleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(RootReducer, composeEnhancers(middlewares));

export default Store;

// import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './reducers/cart';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
