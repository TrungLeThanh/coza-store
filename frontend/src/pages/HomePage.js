import React from 'react';
import Banner from '../components/Banner';
import TypesFashon from '../components/TypesFashon';
import Overview from '../components/Overview';
import Meta from '../components/Meta';

const HomePage = () => {
    return (
        <div>
            <Meta />
            <Banner />
            <TypesFashon />
            <Overview />
        </div>
    );
};

export default HomePage;
