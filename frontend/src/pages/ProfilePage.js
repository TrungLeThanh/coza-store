import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import './ProfilePage.css';
import {Link} from 'react-router-dom';    
import { getUserDetails, updateUserProfile } from '../actions/userActions';

const ProfilePage = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfor } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdatProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfor) {
            history.push('/login');
        } else {
        if (!user.name) {
            dispatch(getUserDetails('profile'));
        } else {
            setName(user.name);
            setEmail(user.email);
            setAddress(user.address);
        }
        }
    }, [dispatch, history, userInfor, user])

    const submitHandler = (e) => {
        e.preventDefault()
            if (password !== confirmPassword) {
        setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    console.log(disabled);
    const renderProfile = () => {
        return (
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-3 col-lg-3">
                    <span style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>User Profile</h3>
                        <i onClick={() => setDisabled(!disabled)} style={{paddingTop: '5px'}} className="fas fa-user-edit" />
                    </span>
                    <form className="ui form" onSubmit={submitHandler} >
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" 
                                placeholder="Enter name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div> 
                        <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="field">
                            <label>Address</label>
                            <input type="text" name="address" 
                                placeholder="Address" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" 
                                placeholder="Enter password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input type="password" name="confirm-password" 
                                placeholder="Confirm password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button className={`${!disabled ? '' : ' disabled'} ui basic button`} type="submit">Update</button>
                    </form>
                </div>
                <div style={{paddingLeft: '30px'}} className="col col-12 col-sm-12 col-md-9 col-lg-9">
                    <h3>My orders</h3>
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }

    return (
        <div className="wrap-profile">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                Profile
            </div>
            {error && <Message message={message ? message : error} />}
            {success && <Message message={success ? 'success' : message} />}
            {loading && <Loader />}
            {renderProfile()}
        </div>
    );
}

export default ProfilePage;