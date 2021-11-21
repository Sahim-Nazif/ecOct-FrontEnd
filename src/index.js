import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store';
import bootstrapBundle from './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.render(   
                <Provider store={store}>
                             <App /> 
                </Provider>,
                 document.getElementById('root'));
