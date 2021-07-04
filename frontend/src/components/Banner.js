import React from 'react';
import './Banner.css';
import { Carousel, Image } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Banner = () => {
    const useStyles = makeStyles({
        root: {
            background: 'rgb(108, 122, 224)',
            borderRadius: 25,
            border: 0,
            color: 'white',
            height: 45,
            padding: '0 30px',
            boxShadow: '0 3px 3px 2px rgba(255, 200, 135, .3)',
            fontSize: 16,
            transition: '0.5s',
            '&:hover':{
                background: 'black'
            }
        }
    });

    const classes = useStyles();
    return (
        <div className="wrap-banner">
            <Carousel>
                <Carousel.Item>
                    <Image 
                        src="xslide-01.webp"
                        alt="First slide"
                        className="style-image"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h2 className="h2-carousel" data-aos="fade-right" data-aos-duration="1000">woman collection- 2021</h2>  
                        <h1 className="h1-carousel" data-aos="fade-up" data-aos-duration="1500">new season</h1>  
                        <h1 className="btn-carousel" data-aos="zoom-in" data-aos-duration="2000"><Button className={classes.root}>SHOP NOW</Button></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        src="xslide-02.webp"
                        alt="First slide"
                        className="style-image"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h2 className="h2-carousel" >man collection- 2021</h2>  
                        <h1 className="h1-carousel">new season</h1> 
                        <h1 className="btn-carousel"><Button className={classes.root}>SHOP NOW</Button></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        src="xslide-03.webp"
                        alt="First slide"
                        className="style-image"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h2 className="h2-carousel">man new season- 2021</h2>  
                        <h1 className="h1-carousel">new season</h1> 
                        <h1 className="btn-carousel"><Button className={classes.root}>SHOP NOW</Button></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;