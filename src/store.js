import { getAllProductReducer, getProductByIdReducer } from "./reducers/productReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducer'
import { signUpReducer, loginReducer } from "./reducers/userReducer";
import {placeOrderReducer,getOrdersByUserId,getOrderByIdReducer} from './reducers/orderReducer'


const reducer=combineReducers ({

    getAllProductReducer:getAllProductReducer,
    getProductByIdReducer:getProductByIdReducer,
    cartReducer:cartReducer,
    signUpReducer:signUpReducer,
    loginReducer:loginReducer,
    placeOrderReducer:placeOrderReducer,
    getOrdersByUserId:getOrdersByUserId,
    getOrderByIdReducer:getOrderByIdReducer

})

const cartItems= localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null

const initialState= {

  cartReducer:{ cartItems: cartItems},
  loginReducer:{currentUser:currentUser}
}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store=createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store;