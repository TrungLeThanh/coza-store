import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../actions/userActions';
import './LoginScreen.css';
import Header from '../components/Header';
import App from '../App';

const LoginScreen = ({location}) => {

    return (
        <div className="wrap-login">
            <div className="left-login">
                <img style={{position: 'absolute', left: '40px'}} src="data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=" id="logo" alt=""/>

            </div>
            <div className="right-login">

            </div>
        </div>
    );
};

export default LoginScreen;
