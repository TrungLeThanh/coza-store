import React, {Fragment, useEffect} from 'react';
import './PlaceOrderPage.css';
import { useDispatch, useSelector } from 'react-redux';
import Step from '../components/Step';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {createOrder} from '../actions/orderActions';
import Message from '../components/Message';
import { ORDER_CREATE_RESET } from '../contains/orderContains';

const PlaceOrderPage = ({history}) => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    
    if (!cart.shippingAddress.address) {
        history.push('/shipping');
    };

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        );
    };
    
    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate;

    useEffect(() => {
        if(success) {
            history.push(`/orders/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, success]);

    //   Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2);

    const renderPlaceOrder = () => {
        return (
            <Grid container spacing={1}>
                <Grid style={{width: '100%', height: '100%'}} item lg={8}>
                    <h4 style={{paddingTop: '20px'}}>SHIPPING</h4>
                    <span><Link to="/shipping" style={{float: 'right', textDecoration: 'none'}} className="fas fa-edit" /></span>
                    <p style={{fontSize: '16px', paddingTop: '10px'}}>
                        <strong>Address: </strong>
                        {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                        {cart.shippingAddress.postalCode},{' '}
                        {cart.shippingAddress.country}
                    </p>
                    <hr />
                    <h4 style={{paddingTop: '20px'}}>Payment</h4>
                    <span><Link to="/shipping" style={{float: 'right', textDecoration: 'none'}} className="fas fa-edit" /></span>
                    <p style={{fontSize: '16px', paddingTop: '10px'}}>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                    </p>
                    <hr />
                    <h4 style={{paddingTop: '20px'}}>Order Items</h4>
                    {
                        cart.cartItems.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <Grid style={{paddingTop: '20px', marginBottom: '-30px'}} container justify="center" spacing={0}>
                                        <Grid item xs={2} sm={1} md={1} lg={1}>
                                            <div className="image-cart">
                                                <img src={item.image} style={{width: '50%', height: '50%'}} alt="" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={5} md={5} lg={5}>
                                            <Link to={`/products/${item.product}`} style={{textDecoration: 'none'}}>{item.name}</Link>
                                        </Grid>
                                        <Grid item xs={2} sm={3} md={3} lg={3}>
                                            <p>{item.size}</p>
                                        </Grid>
                                        <Grid item xs={2} sm={3} md={3} lg={3}>
                                            <p>{item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}.</p>
                                        </Grid>
                                    </Grid>
                                </Fragment>
                            )
                        })
                    }
                </Grid>
                <Grid style={{width: '100%', height: '100%', padding: '20px'}} item lg={4}>
                    <table className="ui celled table" style={{padding: '15px'}}>
                        <tbody>
                            <tr>
                                <td data-label="Name">
                                    <h3 style={{fontWeight: '500', textAlign: 'center'}}>ORDER SUMMARY</h3>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Name">
                                    <span style={{fontSize: '15px'}}>
                                        Items:&nbsp; ${cart.itemsPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{fontSize: '15px'}}>
                                        Shipping:&nbsp; ${cart.shippingPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{fontSize: '15px'}}>
                                        Tax:&nbsp; ${cart.taxPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{fontSize: '16px', fontWeight: 'bold'}}>
                                        Total:&nbsp; ${cart.totalPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                {error && <Message type='red' message={error}/> }
                            </tr>
                        </tbody>
                        <button onClick={placeOrderHandler} className={`ui ${cart.cartItems.length === 0 ? 'disabled' : ''} secondary button`} style={{width: '100%', height: '50px', borderRadius: '25px', marginTop: '20px'}}>
                            <i  style={{paddingRight: '10px'}} className="fas fa-shopping-cart" />PLACE ORDER
                        </button>
                    </table>
                </Grid>
            </Grid>
        );
    };

    return (
        <div className="wrap-order">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/cart'>
                    Cart &nbsp;{'>'}&nbsp;
                </Link>
                Place order
            </div>
            <Step step1 step2 step3 />
            <hr />
            {renderPlaceOrder()}
        </div>
    );
};

export default PlaceOrderPage;
