import React, {useState} from 'react';
import './Banner.css';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const Banner = () => {

    const [active, setActive] = useState(false);

    const handleScrollToggle = () => {
        setActive(!active);
    }

    return (
        <div className="wrap-banner">
            <p>
                Meet collection new 2021 <br />
            </p>
            <i onClick={handleScrollToggle} className="fas fa-angle-down" />
            <video id="video" src="https://iqit-commerce.com/ps17/demo14/img/cms/style14.mp4" autoPlay loop muted />
            <div style={{ paddingTop: 1500, position: 'absolute'}}>
                <ScrollIntoViewIfNeeded active={active}>
                    {' '}
                </ScrollIntoViewIfNeeded>
            </div>
        </div>
    );
};

export default Banner;
