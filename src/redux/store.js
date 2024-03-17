import { legacy_createStore as createStore, combineReducers } from 'redux'
import { productsReducer } from './productsReducer.js'

export const store = new createStore(
  combineReducers({
    products: productsReducer,
  })
)
