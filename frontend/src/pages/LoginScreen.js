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
                            />
                            <i className="low vision icon"></i>
                        </div>
                        <p style={{color: 'red'}}>{password.length<4 && password.length>=1 ? 'Password must be more than 4' : ''}</p>
                    </div>
                    <Link to="/">Fogot password ?</Link> <br /> <br />
                    <button style={{borderRadius: '20px', width: '100%'}} className="ui blue button" type="submit">Login<i className="arrow right icon"></i></button>
                </form> <br />
                <p style={{textAlign: 'center'}}>Or login with</p>
                <span style={{float: 'right'}}>
                    {`New Customer?  ${' '}`}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </span>
                
            </div>
        </div>
        </>
    );
};

export default LoginScreen;
