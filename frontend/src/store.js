import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import { userReducer } from "./reducers/userReducers";
// import { cartReducer } from "./reducers/cartReducers";

//reducers for all our resources
const reducer = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducer,
  users: userReducer,
  // cart: cartReducer,
});

//before loading the App, show products in cart if they exist, in local storage
let initialState = {
  
  //    cart: {
  //    cartItems: localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //     : [],
  //  },
};

const middleware = [thunk];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

// *********************************************************************

//This did not work hade to look up https://github.com/zalmoxisus/redux-devtools-extension#usage to fins a nother soultion (the one in use now) to get devtools working w Redux!

// let initialState = {}

// const middleware = [thunk]
// const store = createStore(reducer, initialState, composeWithDevTools, (applyMiddleware(...middleware)))

// export default store;""
