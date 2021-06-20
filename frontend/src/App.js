import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages//ProductDetail';
import CartPage from './pages/CartPage';
import BackTop from './components/BackTop'; 
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';
import ShippingPage from './pages/ShippingPage';
import PlaceOrderPage from './pages/PlaceOrderPage';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/placeorder" exact component={PlaceOrderPage} />
            <Route path="/shipping" exact component={ShippingPage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/register" exact component={RegisterScreen} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/products/:id" exact component={ProductDetail} />
            <Route path="/cart/:id?" exact component={CartPage} />
            <Route path="/" exact component={HomePage} />
            <BackTop />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
