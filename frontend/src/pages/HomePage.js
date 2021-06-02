import React from 'react';
import Banner from '../components/Banner';
import TypesFashon from '../components/TypesFashon';
import Overview from '../components/Overview';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TypesFashon />
            <Overview />
        </div>
    );
};

export default HomePage;
