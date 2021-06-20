import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {savePaymentMethod} from '../actions/cartActions';
import './ShippingPage.css';
import Step from '../components/Step';
import {Form, Button} from 'react-bootstrap';


const PaymentPage = ({history}) => {

    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;

    if (!shippingAddress.address) {
        history.push('/shipping');
    };

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault(); 
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/placeorder');
    };
    

    const renderFormPayment = () => {
        return (
            <Form onSubmit={submitHandler} style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', width: '350px', height: '400px', padding: '50px 30px', marginTop: '20px'}}>
                <h3>Method payment</h3> <br />
                <Form.Label as='legend'>Select Method</Form.Label>
                <br />
                <Form.Check
                    type="radio"
                    label="PayPal or Credit Card"
                    value='PayPal'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <br />
                <Form.Check
                    type="radio"
                    label="Ship Code"
                    value='Ship'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <br />
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        );
    };


    return (
        <div className="wrap-shipping" style={{textItems: 'center'}}>
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/cart'>
                    Cart &nbsp;{'>'}&nbsp;
                </Link>
                Payment
            </div>
            <Step step1 step2 step3 />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {renderFormPayment()}
            </div>
        </div>
    );
};

export default PaymentPage;
