import React, {useEffect} from 'react';
import './UserListPage.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers, deleteUser } from '../actions/userActions';
import {Table} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

const UserListPage = ({history}) => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfor } = userLogin;

    const userDelete = useSelector((state) => state.userDelete);
    const { success: successDelete } = userDelete;

    useEffect(() => {
        if(userInfor && userInfor.isAdmin){
            dispatch(listUsers());
        }
        else{
            history.push('/login')
        }
    }, [dispatch, history, userInfor, successDelete]);

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete it?')){
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="wrap-list-users">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/profile'>
                    Admin &nbsp;{'>'}&nbsp;
                </Link>
                Users
            </div>
            <hr />
            <h1 style={{textAlign: 'center', fontWeight: '500', padding: '20px 0px'}}>Users information</h1>
            {
                loading ? 
                <Loader /> :
                error ? 
                <Message variant='danger'>{error}</Message> :
                (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                        <th style={{fontSize: '15px'}}><i className="fas fa-key" style={{paddingRight: '10px'}} />ID</th>
                        <th style={{fontSize: '15px'}}><i className="fas fa-user" style={{paddingRight: '10px'}} />NAME</th>
                        <th style={{fontSize: '15px'}}><i className="fas fa-envelope" style={{paddingRight: '10px'}} />EMAIL</th>
                        <th style={{fontSize: '15px', textAlign: 'center'}}><i className="fas fa-user-shield" style={{paddingRight: '10px'}} />ADMIN</th>
                        <th style={{fontSize: '15px', textAlign: 'center'}}><i className="fas fa-cogs" style={{paddingRight: '10px'}} />SETTING</th>
                        </tr>
                    </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </td>
                            <td style={{textAlign: 'center'}}>
                                {user.isAdmin ? (
                                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                                ) : (
                                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                                )}
                            </td>
                            <td style={{textAlign: 'center', cursor: 'pointer'}}>
                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                    <i className='fas fa-edit'></i>
                                </LinkContainer> | 
                                <i onClick={() => deleteHandler(user._id)} style={{paddingLeft: '10px', color: '#D32F41'}} className='fas fa-trash'></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                )
            }
        </div>
    );
};

export default UserListPage;
