import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages//ProductDetail';
import CartPage from './pages/CartPage';
import BackTop from './components/BackTop';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/products/:id" exact component={ProductDetail} />
            <Route path="/cart/:id?" exact component={CartPage} />
            <Footer />
            <BackTop />
        </BrowserRouter>
    );
};

export default App;
