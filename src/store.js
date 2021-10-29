import { getAllProductReducer, getProductByIdReducer } from "./reducers/productReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {addToCartReducer} from './reducers/cartReducer'

const reducer=combineReducers ({

    getAllProductReducer:getAllProductReducer,
    getProductByIdReducer:getProductByIdReducer,
    addToCartReducer:addToCartReducer
})

const cartItems= localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const initialState= {

  addToCartReducer:{ cartItems: cartItems}
}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store=createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store;