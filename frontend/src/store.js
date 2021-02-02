import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducers } from './reducers/productReducers'


//reducers for all our resources
const reducer = combineReducers ({
    products: productReducers

})


 //before loading the App
let initialState = {}

const middleware = [thunk]
const composeEnhancers = composeWithDevTools({});

const store = createStore(reducer, initialState, composeEnhancers(
 applyMiddleware(...middleware)));

  export default store;




// *********************************************************************

  //This did not work hade to look up https://github.com/zalmoxisus/redux-devtools-extension#usage to fins a nother soultion (the one in use now) to get devtools working w Redux!

// let initialState = {}

// const middleware = [thunk]
// const store = createStore(reducer, initialState, composeWithDevTools, (applyMiddleware(...middleware)))

// export default store;""