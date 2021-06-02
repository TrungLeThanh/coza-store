import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages//ProductDetail';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/products/:id" exact component={ProductDetail} />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
