import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import './CartPage.css';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const CartPage = ({match, location}) => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    let params = queryString.parse(location.search);

    useEffect(() =>{
        dispatch(addToCart(match.params.id, params.qty, params.size));
    }, [dispatch, match.params.id, params.qty, params.size]);

    const renderCart = () => {
        return (
            <Grid container spacing={1}>
                <Grid style={{border: '1px solid black', width: '100%', height: '100%'}} item lg={8}>
                {cartItems.map((product)=>{
                    return (
                        <>
                        <Grid container justify="center" spacing={0}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <div className="image-cart">
                                    <img src={product.image} style={{width: '100%', height: '100%'}} alt="" />
                                </div>
                            </Grid>
                            <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item xs={12} sm={6} md={4} lg={2}>
                                {product.name}
                            </Grid>
                            <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item xs={12} sm={6} md={4} lg={2}>
                                $: {product.price}
                            </Grid>
                            <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item xs={12} sm={6} md={4} lg={2}>
                                <FormControl style={{width: '100px', paddingLeft: '15px'}}>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={product.qty}
                                    onChange={(e) => dispatch(addToCart(product.product, e.target.value, product.size))}
                                    >
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <MenuItem value={x + 1} key={x + 1}>
                                                {x + 1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item xs={12} sm={6} md={4} lg={2}>
                                
                            </Grid>
                            <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item xs={12} sm={6} md={4} lg={2}>
                                
                            </Grid>
                        </Grid>
                        <hr />
                        </>
                    )
                })}
                </Grid>
                <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item lg={4}>

                </Grid>
            </Grid>
        );
    };

    return (
        <div className="wrap-cart">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                Cart
            </div>
            {renderCart()}
        </div>
    );
};

export default CartPage;
