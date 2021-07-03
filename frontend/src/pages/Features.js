import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { topProducts } from '../actions/productActions';
import Grid from '@material-ui/core/Grid';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import './Features.css';

const Features = () => {

    const dispatch = useDispatch();

    const productsTop = useSelector(state => state.productsTop);

    const { loading, error, products } = productsTop;

    useEffect(() => {
        dispatch(topProducts());
    }, [dispatch]);


    const showAllProducts = () => {
        return (
            <Grid container spacing={7}>
                {   
                    products.map((product)=>{
                        return (
                            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3} data-aos="fade-up" data-aos-duration="1000">
                                <div className="image-style">
                                    <Link to={`/products/${product._id}`} >
                                        <button className="ui button style-btn">Quick View</button>
                                    </Link>
                                    <img className="image-product" src={product.image} alt="" />
                                </div>
                                <p className="name-product">
                                    <Link style={{textDecoration: 'none'}} to={`/products/${product._id}`} >
                                        {product.name}
                                    </Link>
                                    <span style={{float: 'right'}}>
                                        {product.rating}
                                        <i style={{color: '#E9334A', paddingLeft: '5px'}} className="far fa-heart" />
                                    </span>
                                    
                                </p>
                                <p>$ {product.price}</p>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    };


    return (
        <div className="wrap-feature">
            <Meta title="Feature" />
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                Features
            </div>
            <hr />
            <h3 style={{paddingBottom: '60px'}}>Featured products</h3>
            {
                loading ?
                <Loader /> :
                error ?
                <Message /> :
                showAllProducts()
            }
        </div>
    );
};

export default Features;
