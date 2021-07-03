import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {saveShippingAddress, savePaymentMethod} from '../actions/cartActions';
import './ShippingPage.css';
import Step from '../components/Step';
import Meta from '../components/Meta';
import {Form} from 'react-bootstrap';

const ShippingPage = ({history}) => {

    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;

    const dispatch = useDispatch();

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode, country}));
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/placeorder');
    };

    // test
    const [paymentMethod, setPaymentMethod] = useState('');

    const renderFormShipping = () => {
        return (
            <div className="row" style={{padding: '40px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: '12px'}}>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <h3>Shipping Information</h3> <br />
                    <form className="ui form" onSubmit={submitHandler}>
                        <label>Address</label>
                        <input 
                            className="style-add"
                            type="text" 
                            name="address" 
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <br /> <br />
                        <label>City</label>
                        <input 
                            className="style-add"
                            type="text" 
                            name="city" 
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <br /> <br />
                        <label>Postal Code</label>
                        <input 
                            className="style-add"
                            type="text" 
                            name="postalCode" 
                            placeholder="postalCode"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                        <br /> <br />
                        <label>Country</label>
                        <input 
                            className="style-add"
                            type="text" 
                            name="Country" 
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <br /> <br />
                        <label>Select method payment:</label> <br /> <br />
                        <Form.Check
                            type="radio"
                            label="Ship Code"
                            value='Ship'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            inline
                            required
                        />
                        <Form.Check
                            type="radio"
                            label="Paypal"
                            value='Paypal'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            inline
                            disabled
                        />
                        <br /> <br />
                        <button className="ui black button" type="submit">Continue</button>
                    </form>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/add.gif" style={{width: '105%'}} alt="" />
                </div>
            </div>
        );
    };


    return (
        <div className="wrap-shipping">
            <Meta title="Shipping" />
            <div style={{marginBottom: '25px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/cart'>
                    Cart &nbsp;{'>'}&nbsp;
                </Link>
                Shipping
            </div>
            <Step step1 step2 />
            <div className="form-shipping">
                {renderFormShipping()}
            </div>
        </div>
    );
};

export default ShippingPage;
