import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="wrap-contact">
            <div className="banner-contact">
                <h1 style={{fontSize: '40px', lineHeight: '250px', color: '#fff'}}>| Contact</h1>
            </div>
            <div className="row">
                <div id="style-form" className="col-xs-12 col-sm-12 md-6 col-lg-6">
                    <h3 style={{textAlign: 'center'}}>Send Us A Message</h3> <br />
                    <form className="ui form">
                        <div className="field">
                            <div className="ui left icon input">
                                <input 
                                    type="text" name="email" 
                                    placeholder="Your Email Address"
                                />
                                <i className="envelope outline icon"></i>
                            </div>
                            <div className="field" style={{marginTop: '30px'}}>
                                <textarea placeholder="How can we hepl?"></textarea>
                            </div>
                        </div>
                        <button style={{borderRadius: '20px', height: '50px', width: '100%', backgroundColor: 'rgb(108, 122, 224)'}} className="ui blue button" type="submit">SUBMIT</button>
                    </form>
                </div>
                <div id="text-contact" className="col-xs-12 col-sm-12 md-6 col-lg-6">
                    <h4 style={{fontWeight: '500'}}><i className="fas fa-map-marker-alt" />&nbsp; Address</h4> <br />
                    <p style={{paddingLeft: '25px'}}>Coza Store Center 8th floor, 379 <br /> Hudson St, New York, NY 10018 US</p>
                    <br /><h4 style={{fontWeight: '500'}}><i className="fas fa-phone" />&nbsp; Phone</h4> <br />
                    <p style={{paddingLeft: '25px'}}>+1 800 1236879</p>
                    <br /><h4 style={{fontWeight: '500'}}><i className="fas fa-envelope" />&nbsp; Sale Support</h4> <br />
                    <p style={{paddingLeft: '25px'}}>contact@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
