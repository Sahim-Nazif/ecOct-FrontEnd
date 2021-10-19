import { getAllProductReducer } from "./reducers/productReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer=combineReducers ({

    getAllProductReducer:getAllProductReducer
})

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;