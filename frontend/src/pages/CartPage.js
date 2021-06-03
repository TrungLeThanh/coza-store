import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import './CartPage.css';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const CartPage = ({match, location}) => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    let params = queryString.parse(location.search)

    useEffect(() =>{
        dispatch(addToCart(match.params.id, 5, 'M'));
    }, [dispatch, match.params.id]);

    const renderCart = () => {
        return(
            <Grid container spacing={5}>
                <Grid style={{border: '1px solid black', width: '100%', height: '200px'}} item xs={12} sm={8} md={8} lg={8}>
                    <Grid container spacing={0}>
                        <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item lg={4}>
                            <img src="" alt="" />
                        </Grid>
                        <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item lg={4}>

                        </Grid>
                        <Grid style={{border: '1px solid black', width: '100%', height: '100px'}} item lg={4}>

                        </Grid>
                    </Grid>
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
