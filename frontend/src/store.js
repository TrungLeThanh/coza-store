import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import {userLoginReducer} from './reducers/userReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});

const cartItemsFromStorare = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorare = localStorage.getItem('userInfor') ? JSON.parse(localStorage.getItem('userInfor')) : [];

const initialState = {
    cart: {
        cartItems: cartItemsFromStorare
    },
    userLogin: { userInfor: userInfoFromStorare}
};

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
