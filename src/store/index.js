import products from './products.js'
import categories from './categories.js'
import cart from './card.js'

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({categories, products, cart});

const store = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default store();