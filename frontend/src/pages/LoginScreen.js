import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../actions/userActions';
import './LoginScreen.css';
import Message from '../components/Message';
import Loader from '../components/Loader';

const LoginScreen = ({location, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    
    const redirect = location.search ? location.search.split('=')[1] : '/';
    
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);

    const { loading, error, userInfor } = userLogin;

    useEffect(() => {
        if (userInfor) {
            history.push(redirect);
        }
    }, [history, userInfor, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    
    return (
        <>
        <div className="wrap-login">
            <Link to="/" style={{position: 'absolute', top: '0', left: '0'}}>
                <img src="data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=" id="logo" alt=""/>
            </Link>
            <div className="login-form">
                <h2 style={{textAlign: 'center', paddingBottom: '40px'}}>Welcome !</h2>
                {error && <Message message={error} type="red"/>}
                {loading && <Loader />}
                <form className="ui form" onSubmit={submitHandler}>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input 
                                className="style-form" 
                                type="text" name="email" 
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <i className="envelope outline icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input 
                                className="style-form" 
                                type="password" name="pass" 
                                placeholder="password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i className="low vision icon"></i>
                        </div>
                        <p style={{color: 'red'}}>{password.length<4 && password.length>=1 ? 'Password must be more than 4' : ''}</p>
                    </div>
                    <Link to="/">Fogot password ?</Link> <br /> <br />
                    <button style={{borderRadius: '20px', width: '100%', backgroundColor: 'rgb(108, 122, 224)'}} className="ui blue button" type="submit">LOGIN<i className="arrow right icon"></i></button>
                </form> <br /> <br />
                <p style={{textAlign: 'center'}}>Or login with</p>
                <span style={{display: 'flex', justifyContent: 'center'}}>
                    <i style={{fontSize: '26px', color: '#4267B2'}} className="fab fa-facebook" />
                    <i style={{fontSize: '26px', marginLeft: '10px', color: '#D34836'}} className="fab fa-google" />
                </span>
                <p style={{textAlign: 'center', paddingTop: '30px'}}>
                    {`New Customer?  ${' '}`}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
};

export default LoginScreen;
