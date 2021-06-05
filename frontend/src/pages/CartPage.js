import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import './CartPage.css';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {removeFromCart} from '../actions/cartActions';


const CartPage = ({match, location}) => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    let params = queryString.parse(location.search);

    useEffect(() =>{
        dispatch(addToCart(match.params.id, params.qty, params.size));
    }, [dispatch, match.params.id, params.qty, params.size]);

    const aremoveFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const renderCart = () => {
        return (
            <Grid container spacing={1}>
                <Grid style={{width: '100%', height: '100%'}} item lg={8}>
                {cartItems.map((product)=>{
                    return (
                        <Fragment key={product.product}>
                        <Grid style={{background: '#F9F9F9'}} container justify="center" spacing={0}>
                            <Grid item xs={4} sm={2} md={2} lg={2}>
                                <div className="image-cart">
                                    <img src={product.image} style={{width: '100%', height: '100%'}} alt="" />
                                </div>
                            </Grid>
                            <Grid style={{width: '100%', height: '100%', paddingTop: '40px'}} item xs={4} sm={2} md={2} lg={2}>
                                <p style={{textAlign: 'center'}}>{product.name}</p>
                            </Grid>
                            <Grid style={{textAlign: 'center', lineHeight: '100px', width: '100%', height: '100px'}} item xs={4} sm={2} md={2} lg={2}>
                                $: {product.price}
                            </Grid>
                            <Grid style={{textAlign: 'center', width: '100%', height: '100px'}} item xs={4} sm={2} md={2} lg={2}>
                                <FormControl style={{marginTop: '26px'}}>
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
                            <Grid style={{textAlign: 'center', lineHeight: '100px', width: '100%', height: '100px'}} item xs={4} sm={2} md={2} lg={2}>
                                {product.size}
                            </Grid>
                            <Grid style={{textAlign: 'center', lineHeight: '100px', width: '100%', height: '100px'}} item xs={4} sm={2} md={2} lg={2}>
                                <i onClick={() => aremoveFromCartHandler(product.product)} style={{cursor: 'pointer'}}className="fas fa-trash" />
                            </Grid>
                        </Grid>
                        <hr />
                        </Fragment>
                    )
                })}
                </Grid>
                <Grid style={{width: '100%', height: '100%', padding: '20px'}} item lg={4}>
                    <table className="ui celled table" style={{padding: '15px'}}>
                        <tbody>
                            <tr>
                                <td data-label="Name">
                                    <h4>Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}) items</h4>
                                    <br />
                                    <h6 style={{fontSize: '16px'}}>$ {cartItems.reduce((acc, item) => acc + Number(item.qty) * item.price, 0).toFixed(2)}</h6>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Name">
                                    <span>Shipping: There are no shipping methods available.</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className={`ui ${cartItems.length === 0 ? 'disabled' : ''} secondary button`} style={{width: '100%', height: '50px', borderRadius: '25px'}}>
                                            <i style={{paddingRight: '10px'}} className="fas fa-shopping-cart" />PROCEED TO CHECKOUT
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
            <hr />
            {renderCart()}
        </div>
    );
};

export default CartPage;
