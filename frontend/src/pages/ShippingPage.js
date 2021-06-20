import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {saveShippingAddress} from '../actions/cartActions';
import './ShippingPage.css';
import Step from '../components/Step';

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
        history.push('/payment')
    };

    const renderFormShipping = () => {
        return (
            <form className="ui form" onSubmit={submitHandler}>
                    <label>Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <br /> <br />
                    <label>City</label>
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br /> <br />
                    <label>Postal Code</label>
                    <input 
                        type="text" 
                        name="postalCode" 
                        placeholder="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <br /> <br />
                    <label>Country</label>
                    <input 
                        type="text" 
                        name="Country" 
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <br /> <br />
                    <button className="ui black button" type="submit">Continue</button>
            </form>
        );
    };


    return (
        <div className="wrap-shipping">
            <div style={{marginBottom: '30px'}}>
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
