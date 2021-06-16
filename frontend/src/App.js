import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages//ProductDetail';
import CartPage from './pages/CartPage';
import BackTop from './components/BackTop'; 
import LoginScreen from './pages/LoginScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
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
