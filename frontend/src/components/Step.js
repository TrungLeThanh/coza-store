import React from 'react';
import './Step.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {Link} from 'react-router-dom';

const CheckOutStep = ({ step1, step2, step3 }) => {

    return (
        <div className="wrap-step">
            <Stepper >
                <Step active={step1 ? true : false}>
                    <StepLabel>
                        {
                            step1 ?
                            <Link style={{textDecoration: 'none'}} to="/login">Sigin</Link> :
                            <p>Sign in</p>
                        }
                        
                    </StepLabel>
                </Step>
                <Step active={step2 ? true : false}>
                    <StepLabel>
                        {
                            step2 ?
                            <Link style={{textDecoration: 'none'}} to="/shipping" >Shipping</Link> :
                            <p>Shipping</p>
                        }
                    </StepLabel>
                </Step>
                <Step active={step3 ? true : false}>
                    <StepLabel>
                        {
                            step3 ?
                            <Link style={{textDecoration: 'none'}} to="/login" >Place Order</Link> :
                            <p>Place Order</p>
                        }
                    </StepLabel>
                </Step>
            </Stepper>
        </div>
        
    );
};

export default CheckOutStep;
