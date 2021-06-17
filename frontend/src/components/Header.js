import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Badge from '@material-ui/core/Badge';
import {useSelector, useDispatch} from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import {logout} from '../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () =>{

    const location = useLocation();
    const dispatch = useDispatch();

    const [headerSticky, setHeaderSticky] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [active, setActive] = useState(1);

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const qty = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

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

    const userLogin = useSelector(state => state.userLogin);

    const {userInfor} = userLogin;

    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout());
    }

    return( 
        <>
        { 
        location.pathname !== "/login" && location.pathname !== "/register" ?
        (<header className={`header ${headerSticky ? 'header__sticky' : ''}`}>
            <div className="header__logo">
                <Link to="/">
                    <img src="data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=" id="logo" alt=""/>
                </Link>
            </div>
            <div className="header__list">
                <Link onClick={() => setActive(1)} id={`${active === 1 ? 'active-color' : ''}`} to="/" className="header__item">
                    Home
                </Link>
                <Link onClick={() => setActive(2)} id={`${active === 2 ? 'active-color' : ''}`} to="/" className="header__item">
                    Shop
                </Link>
                <Link onClick={() => setActive(3)} id={`${active === 3 ? 'active-color' : ''}`} to="/" className="header__item">
                    Features
                    <Badge style={{paddingTop: '38px'}} badgeContent={'HOT'} color="secondary" />
                </Link>
                <Link onClick={() => setActive(4)} id={`${active === 4 ? 'active-color' : ''}`} to="/" className="header__item">
                    Blog
                </Link>
                <Link onClick={() => setActive(5)} id={`${active === 5 ? 'active-color' : ''}`} to="/" className="header__item">
                    About
                </Link>
                <Link onClick={() => setActive(6)} id={`${active === 6 ? 'active-color' : ''}`} to="/" className="header__item">
                    Contact
                </Link>
            </div>
            <div className="header__bonus">
                <Link style={{textDecoration: 'none', paddingRight: '20px'}} to="/login?redirect=cart">
                    <Badge badgeContent={qty ? qty : '0'} color="primary">
                        <i style={{fontSize: '20px', paddingLeft: '30px'}} className="fab fa-opencart"></i>
                    </Badge>
                </Link>
                {
                    userInfor ? 
                    (
                        // <>
                        // <strong style={{fontWeight: '600', fontSize: '15px'}}>{userInfor.name} <i className="fas fa-caret-down"/></strong>
                        // </>
                        <div className="wrap-ngoai" style={{position: 'absolute', top: '0'}}>
                            <NavDropdown title={userInfor.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    ) :
                    (<Link to="/login" className="none"> 
                        <i style={{fontSize: '20px', paddingLeft: '30px'}} className="fas fa-sign-in-alt" />
                    </Link>)
                }
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
                            <img src="data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=" id="menu-logo" alt=""/>
                        </Link>
                        <label id="menu-close" htmlFor="nav-mobile-input"><i style={{color: 'black'}} onClick={closeOverlay} className="fas fa-times" /></label>
                        <hr />
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
            
        </header>) :
        null
        }
        </>
    );
};

export default Header;
