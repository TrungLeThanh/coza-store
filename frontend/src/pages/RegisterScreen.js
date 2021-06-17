import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {register} from '../actions/userActions';
import './LoginScreen.css';
import Message from '../components/Message';
import Loader from '../components/Loader';

const RegisterScreen = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    
    const redirect = location.search ? location.search.split('=')[1] : '/';
    
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);

    const { loading, error, userInfor } = userRegister;

    useEffect(() => {
        if (userInfor) {
            history.push(redirect);
        }
    }, [history, userInfor, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage('Password is not match');
        }
        else{
            dispatch(register(name, email, password));
        }
    }

    return (
        <>
        <div className="wrap-login">
            <Link to="/" style={{position: 'absolute', top: '0', left: '0'}}>
                <img src="data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=" id="logo" alt=""/>
            </Link>
            <div className="login-form">
                <h2 style={{textAlign: 'center', paddingBottom: '10px'}}>Sign Up</h2>
                {error && <Message message={message ? message : error} />}
                {loading && <Loader />}
                <form className="ui form" onSubmit={submitHandler}>
                    <div className="field">
                        <label>Name</label>
                        <div className="ui left icon input">
                            <input 
                                className="style-form" 
                                type="text" name="name" 
                                placeholder="your name..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <i className="user icon"></i>
                        </div>
                    </div>
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
                    <div className="field">
                        <label>Confirm password</label>
                        <div className="ui left icon input">
                            <input 
                                className="style-form" 
                                type="password" name="confirmpass" 
                                placeholder="confirm password..."
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <i className="low vision icon"></i>
                        </div>
                        <p style={{color: 'red'}}>{(confirmPassword !== password) ? 'Password does not match' : ''}</p>
                    </div>
                    <button style={{borderRadius: '20px', width: '100%', backgroundColor: 'rgb(108, 122, 224)'}} className="ui blue button" type="submit">SIGN UP<i className="arrow right icon"></i></button>
                </form>
                <p style={{textAlign: 'center', paddingTop: '30px'}}>
                    {`Have an account?  ${' '}`}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
};

export default RegisterScreen;
