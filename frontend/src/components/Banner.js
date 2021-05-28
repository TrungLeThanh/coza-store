import React from 'react';
import './Banner.css';
import { Carousel, Image } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const Banner = () => {
    return (
        <div className="wrap-banner">
            <Carousel style={{zIndex: '-2'}}>
                <Carousel.Item>
                    <Image 
                        src="xslide-01.webp"
                        alt="First slide"
                        className="style-image"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h2 className="h2-carousel">woman collection - 2021</h2>  
                        <h1 className="h1-carousel">new season</h1>  
                        <h1 className="btn-carousel"><button style={{background: 'rgb(108, 122, 224)', color: '#fff', fontSize: '16px', borderRadius: '25px'}} className="ui button">SHOP NOW</button></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        src="xslide-02.webp"
                        alt="First slide"
                        className="style-image"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h2 className="h2-carousel">man collection - 2021</h2>  
                        <h1 className="h1-carousel">new arrivails</h1> 
                        <h1 className="btn-carousel"><button style={{background: 'rgb(108, 122, 224)', color: '#fff', fontSize: '16px', borderRadius: '25px'}} className="ui button">SHOP NOW</button></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        src="xslide-03.webp"
                        alt="First slide"
                        className="style-image"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h2 className="h2-carousel">man new - season - 2021</h2>  
                        <h1 className="h1-carousel">new season</h1> 
                        <h1 className="btn-carousel"><button style={{background: 'rgb(108, 122, 224)', color: '#fff', fontSize: '16px', borderRadius: '25px'}} className="ui button">SHOP NOW</button></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
