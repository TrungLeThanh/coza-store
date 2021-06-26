import React, {useEffect, useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './OrderPage.css';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import { getOrderDetails } from '../actions/orderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OrderPage = ({match}) => {

    const orderId = match.params.id;

    const dispatch = useDispatch();
    
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const cart = useSelector(state => state.cart);

    if (!loading) {
        const addDecimals = (num) => {
          return (Math.round(num * 100) / 100).toFixed(2)
        }
    
        order.itemsPrice = addDecimals(
          order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        )
    }


    useEffect(() => {
        if(!order || orderId){
            dispatch(getOrderDetails(orderId));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, orderId]);

    const renderOrder = () => {
        return loading ? <Loader /> : error ? <Message type="red" message={error} /> :
        <>
            <h1 style={{fontWeight: '500'}}>Order {order._id}</h1>
            <Grid container spacing={1}>
                <Grid style={{width: '100%', height: '100%'}} item lg={8}>
                    <h4 style={{paddingTop: '25px'}}>SHIPPING</h4>
                    <p style={{fontSize: '16px', paddingTop: '10px'}}>
                        <strong>Name: </strong>
                        {order.user.name}
                    </p>
                    <p style={{fontSize: '16px', paddingTop: '7px'}}>
                        <strong>Email: </strong>
                        <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                    </p>
                    <p style={{fontSize: '16px', paddingTop: '7px'}}>
                        <strong>Address: </strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                        {order.shippingAddress.postalCode},{' '}
                        {order.shippingAddress.country}
                    </p>
                    {
                        !order.isDelivered ? <Message type="red" message="Not delivered !" /> : <Message message="Delivered on" />
                    }
                    <hr />
                    <h4 style={{paddingTop: '20px'}}>Payment</h4>
                    <p style={{fontSize: '16px', paddingTop: '10px'}}>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                    </p>
                    {
                        !order.isPaid ? <Message type="red" message="Unpaid !" /> : <Message message="Paid on" />
                    }
                    <hr />
                    <h4 style={{paddingTop: '20px'}}>Order Items</h4>
                    {
                        order.orderItems.map((item, index) => {
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
                                        Items:&nbsp; ${order.itemsPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{fontSize: '15px'}}>
                                        Shipping:&nbsp; ${order.shippingPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{fontSize: '15px'}}>
                                        Tax:&nbsp; ${order.taxPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style={{fontSize: '16px', fontWeight: 'bold'}}>
                                        Total:&nbsp; ${order.totalPrice}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                {error && <Message type='red' message={error}/> }
                            </tr>
                        </tbody>
                    </table>
                </Grid>
            </Grid>
        </>
    };

    return (
        <div className="wrap-order-details">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                Order Details
            </div>
            <hr />
            {renderOrder()}
        </div>
    );
};

export default OrderPage;
