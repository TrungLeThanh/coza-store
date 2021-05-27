import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>{

    const [headerSticky, setHeaderSticky] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const changeHeader = () =>{
        if(window.scrollY>=100){
            setHeaderSticky(true);
        }
        else{
            setHeaderSticky(false);
        }
    };

    window.addEventListener('scroll', changeHeader);

    const onpenOverlay= () =>{
        setOverlay(true);
    }

    const closeOverlay= () =>{
        setOverlay(false);
    }

    return(
        <header className={`header ${headerSticky ? 'header__sticky' : ''}`}>
            <div className="header__logo">
                <Link to="/">
                    <img src="logo.webp" id="logo" alt=""/>
                </Link>
            </div>
            <div className="header__list">
                <Link to="/" className="header__item">
                    Home
                </Link>
                <Link to="/" className="header__item">
                    Shop
                </Link>
                <Link to="/" className="header__item">
                    Features
                </Link>
                <Link to="/" className="header__item">
                    Blog
                </Link>
                <Link to="/" className="header__item">
                    About
                </Link>
                <Link to="/" className="header__item">
                    Contact
                </Link>
            </div>
            <div className="header__bonus">
                <span>
                    <i style={{fontSize: '18px', paddingLeft: '35px', color: 'rgb(51, 51, 51)'}} className="fas fa-search" />
                    <i style={{fontSize: '18px', paddingLeft: '20px', color: 'rgb(51, 51, 51)'}} class="fas fa-shopping-cart" />
                    <i style={{fontSize: '25px', paddingLeft: '20px', color: 'rgb(51, 51, 51)'}} class="fas fa-caret-down" />
                </span>
            </div>

            <label htmlFor="nav-mobile-input" onClick={closeOverlay} className={`${overlay ? 'header__overlay' : ''}`}> </label>

            <div className="menu">
                <div className="menu__select">
                    <label htmlFor="nav-mobile-input">
                        <i style={{color: 'rgb(51, 51, 51)'}} onClick={onpenOverlay} id="select" className="fas fa-bars" />
                    </label>
                    <input style={{display: 'none'}} type="checkbox" className="menu__input" id="nav-mobile-input"/>
                    <div className="menu__list">
                        <Link to="/">
                            <img src="logo.webp" id="menu-logo" alt=""/>
                        </Link>
                        <hr />
                        <label id="menu-close" htmlFor="nav-mobile-input"><i onClick={closeOverlay} className="fas fa-times" /></label>
                        <Link to="/search" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-search" />Search
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-home" />Home
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-shopping-cart" />Shop
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-tv" />Features
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-blog" /> Blog
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-tags" />About
                        </Link>
                        <Link to="/" className="menu__item">
                            <i style={{paddingRight: '12px'}} className="fas fa-address-book" />Contacts
                        </Link>
                        <div className="menu__social">
                            <i className="fab fa-facebook-square menu__social--icon" />
                            <i className="fab fa-twitter menu__social--icon" />
                            <i className="fab fa-pinterest-square menu__social--icon" />
                            <i className="fab fa-youtube menu__social--icon" />
                            <i className="fab fa-instagram-square menu__social--icon" />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;
