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

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;