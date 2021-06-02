import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const Footer = () => {
    const useStyles = makeStyles({
        root: {
            background: 'rgb(108, 122, 224)',
            borderRadius: 25,
            border: 0,
            color: 'white',
            height: 40,
            width: 150,
            marginTop: 20,
            fontSize: 16,
            transition: '0.5s',
            '&:hover':{
                background: 'black'
            }
        }
    });

    const classes = useStyles();

    return (
        <div className="wrap-footer">
            <Grid justify="center" container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <div className="content-footer">
                        <h4>CATEGORIES</h4>
                        <div className="text">
                            <Link className="choose" to="/">
                                Woman
                            </Link>
                            <Link className="choose" to="/">
                                Man
                            </Link>
                            <Link className="choose" to="/">
                                Shoes
                            </Link>
                            <Link className="choose" to="/">
                                Watches
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <div className="content-footer">
                        <h4>HELP</h4>
                        <div className="text">
                            <Link className="choose" to="/">
                                Track order
                            </Link>
                            <Link className="choose" to="/">
                                Returns 
                            </Link>
                            <Link className="choose" to="/">
                                Shipping
                            </Link>
                            <Link className="choose" to="/">
                                FAQs
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <div className="content-footer">
                        <h4>GET IN TOUCH</h4>
                        <div className="text">
                            <p className="choose-p">
                            Let us know in store at 
                            8th floor, 379 Hudson St, New York, NY 
                            10018 or call us on (+1) 96 716 6879
                            </p>
                            <Link className="choose" to="/">
                                <span>
                                    <i className="fab fa-facebook-f icon-social" />
                                    <i className="fab fa-instagram-square icon-social" />
                                    <i className="fab fa-pinterest-square icon-social" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <div className="content-footer">
                        <h4>NEWSLETTER</h4>
                        <div className="text">
                            <input type="text" 
                                style={{background: 'transparent', 
                                color: '#fff',
                                border: 'none',
                                borderBottom: '1px solid #fff',
                                height: '30px'
                                }} 
                                placeholder="Email@example.com"
                            />
                            <Button className={classes.root}>SHOP NOW</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="coppy-right">
                        Copyright ©2021 All rights reserved
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
