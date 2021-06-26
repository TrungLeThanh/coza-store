import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import './ProfilePage.css';
import {Link} from 'react-router-dom';    
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { Table } from 'react-bootstrap';
import { listMyOrders } from '../actions/orderActions';

const ProfilePage = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfor } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdatProfile);
    const { success } = userUpdateProfile;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    useEffect(() => {
        if (!userInfor) {
            history.push('/login');
        } else {
        if (!user.name) {
            dispatch(getUserDetails('profile'));
            dispatch(listMyOrders());
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
            dispatch(updateUserProfile({ id: user._id, name, email, password, address }))
        }
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
            {loading ? <Loader /> :
                (<div className="row" style={{display: 'flex', justifyContent: 'space-between', padding: '0px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',  borderRadius: '15px'}}>
                <div className="col col-12 col-sm-12 col-md-4 col-lg-3" style={{padding: '30px', margin: '30px 0px'}}>
                    <span style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>User Profile</h3>
                        <i onClick={() => setDisabled(!disabled)} style={{paddingTop: '5px', cursor: 'pointer'}} className="fas fa-user-edit" />
                    </span>
                    <form className="ui form" onSubmit={submitHandler} >
                        <div className="field">
                            <label>Name: </label>
                            <input style={{border: `${ disabled ? '1px solid rgb(108, 122, 224)' : '0px'}`, borderBottom: '1px solid black' }} type="text" name="name" 
                                placeholder="Enter name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div> 
                        <div className="field">
                            <label>Email: </label>
                            <input style={{border: `${ disabled ? '1px solid rgb(108, 122, 224)' : '0px'}`, borderBottom: '1px solid black'}} type="email" name="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="field">
                            <label>Address</label>
                            <input style={{border: `${ disabled ? '1px solid rgb(108, 122, 224)' : '0px'}`, borderBottom: '1px solid black'}} type="text" name="address" 
                                placeholder="Address" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input style={{border: `${ disabled ? '1px solid rgb(108, 122, 224)' : '0px'}`, borderBottom: '1px solid black'}} type="password" name="password" 
                                placeholder="Enter password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input style={{border: `${ disabled ? '1px solid rgb(108, 122, 224)' : '0px'}`, borderBottom: '1px solid black'}} type="password" name="confirm-password" 
                                placeholder="Confirm password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button className="ui red button" type="submit">Update</button>
                    </form>
                </div>
                <div className="col col-12 col-sm-12 col-md-8 col-lg-9" style={{borderLeft: '1px solid #9FACBA', margin: '30px 0px', padding: '30px 50px 30px 50px'}}>
                    <h3>My orders</h3>
                    {
                        loadingOrders ?
                        <Loader /> :
                        errorOrders ?   
                        <Message type="red" message={errorOrders}>{errorOrders}</Message> : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    {order.isPaid ? (
                                    order.paidAt.substring(0, 10)
                                    ) : (
                                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                                    )}
                                </td>
                                <td>
                                    {order.isDelivered ? (
                                    order.deliveredAt.substring(0, 10)
                                    ) : (
                                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                                    )}
                                </td>
                                <td>
                                    <Link to={`/orders/${order._id}`}>
                                        Details
                                    </Link>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        )
                    }
                </div>
            </div>)
            }
        </div>
    );
}

export default ProfilePage;