import React, {useEffect, useState} from 'react';
import './UserEditPage.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {getUserDetails, updateUser} from '../actions/userActions';
import {USER_UPDATE_RESET} from '../contains/userContains';
import Meta from '../components/Meta';

const UserEditPage = ({match, history}) => {

    const userId = match.params.id

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdate = useSelector((state) => state.userUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate;

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }));
    };

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET });
            history.push('/admin/userlist');
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId));
            } else {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }
    }, [dispatch, user, userId, successUpdate, history]);

    return (
        <div className="wrap-user-edit">
            <Meta title="Edit Account" />
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/profile'>
                    Admin &nbsp;{'>'}&nbsp;
                </Link>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/admin/userlist'>
                    Users &nbsp;{'>'}&nbsp;
                </Link>
                Edit User
            </div>
            <hr />
            <Link to="/admin/userlist" className="ui basic black button">Go Back</Link>
            <div className="wrap-form-edit">
                <div className="row" style={{padding: '30px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: '12px'}}>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h3>Update User </h3> <br />
                        {loadingUpdate && <Loader />}
                        {errorUpdate && <Message type="red" message={errorUpdate} />}
                        {
                            loading ? 
                            <Loader /> :
                            error ?
                            <Message type="red" message={error} /> :
                            (<form className="ui form" onSubmit={submitHandler}>
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <br /> <br />
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br /> <br />
                                <label>Is Admin ?</label> <br /> <br />
                                <Form.Check
                                    type="radio"
                                    label="Admin"
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                    inline
                                />
                                <br /> <br />
                                <button className="ui black button" type="submit">Update</button>
                            </form>)
                        }
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{textAlign: 'center'}} id="nondisplay">
                        <img src="/images/edit.jpg" style={{width: '80%'}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEditPage;
