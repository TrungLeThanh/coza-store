import React from 'react';
import './TypesFashon.css';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const TypesFashon = () => {

    const images = [
        {
            img: '/images/xbanner-01.webp',
            title: 'Woman',
            subTitle: 'Spring 2020'
        },
        {
            img: '/images/xbanner-02.webp',
            title: 'Man',
            subTitle: 'Spring 2021'
        },
        {
            img: '/images/xbanner-03.webp',
            title: 'Accessories',
            subTitle: 'New trend'
        }
    ];

    return (
        <div className="wrap-type-fashon">
            <Grid container justify="center" spacing={8}>
                {images.map(x => {
                    return <Grid item xs={12} sm={6} md={6} lg={4} key={x.title} >
                        <div className="image-fashon">
                            <h2 style={{position: 'relative', top: '25px', left: '25px', margin: '0', padding: '0', zIndex: '5', fontFamily: 'Poppins, sans-serif', fontWeight: '500'}}>{x.title}</h2>
                            <p style={{position: 'relative', margin: '0', padding: '0',top: '25px', left: '25px', zIndex: '5',  fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}>{x.subTitle}</p>
                            <Link to="/shop">
                            <img src={x.img} alt={x} className="img-fas" />
                            </Link>
                        </div>
                    </Grid>
                    })
                }
            </Grid>
        </div>
    );
};

export default TypesFashon;
