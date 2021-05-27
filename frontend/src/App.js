import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={HomePage} />
        </BrowserRouter>
    );
};

export default App;
