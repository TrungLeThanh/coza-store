import React from 'react';
import './TypesFashon.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const TypesFashon = () => {

    const useStyles = makeStyles({
        root: {
            border: 0,
            color: 'black',
            height: 40,
            padding: '0 15px',
            fontSize: 16,
            transition: '0.5s',
            top: 140,
            left: 15,
            fontWeight: '400',
            '&:hover':{
                borderBottom: '2px solid rgb(108, 122, 224)',
                background: '#fff',
            }, 
            zIndex: 999
        }
    });

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

    const classes = useStyles();

    return (
        <div className="wrap-type-fashon">
            <Grid container justify="center" spacing={8}>
                {images.map(x => {
                    return <Grid item xs={12} sm={6} md={6} lg={4} key={x.title} >
                        <div className="image-fashon">
                            <h2 style={{position: 'relative', top: '25px', left: '25px', margin: '0', padding: '0', zIndex: '5', fontFamily: 'Poppins, sans-serif', fontWeight: '500'}}>{x.title}</h2>
                            <p style={{position: 'relative', margin: '0', padding: '0',top: '25px', left: '25px', zIndex: '5',  fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}>{x.subTitle}</p>
                            <Button data-aos="zoom-in" data-aos-duration="1500" variant="outlined" className={classes.root}>SHOP NOW</Button>
                            <img src={x.img} alt={x} className="img-fas" />
                        </div>
                    </Grid>
                    })
                }
            </Grid>
        </div>
    );
};

export default TypesFashon;
