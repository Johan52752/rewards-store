import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {getProducts} from "./services/productService"
import {getUsers} from "./services/userService"
import {addPoints} from "./services/pointsService"
import {reducers} from "./reducers/reducers"
import thunk from "redux-thunk"
  
  const store=createStore(reducers,[],applyMiddleware(thunk))
  ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
  );


