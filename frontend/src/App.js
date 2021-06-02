import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
