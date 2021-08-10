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

async function main(){
  const products =await getProducts();
  const user=await getUsers();
  const initialState={
    user:user,
    products:products,
    filterProducts:products
  }
  const store=createStore(reducers,initialState)
  ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
  );
}
main()

