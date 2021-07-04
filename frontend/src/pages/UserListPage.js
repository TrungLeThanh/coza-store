import React, {useEffect, useState} from 'react';
import './UserListPage.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers, deleteUser } from '../actions/userActions';
import {Table} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import Meta from '../components/Meta';
import ReactPaginate from 'react-paginate';


const UserListPage = ({history}) => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfor } = userLogin;

    const userDelete = useSelector((state) => state.userDelete);
    const { success: successDelete } = userDelete;

    let count = 1;

    // MODAL CONFIRM
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [id, setId] = useState('');
    
     // Panagation
    const [pageNumber, setPageNumber] = useState(0);
    const shopPage = 10;
    const pagesVisited = pageNumber * shopPage;
    const pageCount = Math.ceil(Object(users).length / shopPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    
    useEffect(() => {
        if(userInfor && userInfor.isAdmin){
            dispatch(listUsers());
        }
        else{
            history.push('/login')
        }
    }, [dispatch, history, userInfor, successDelete]);

    const confirmDelete = (id) => {
        setShow(true);
        setId(id);
    };
    const deleteHandler = () => {
        dispatch(deleteUser(id));
        setShow(false);
    };

    return (
        <div className="wrap-list-users">
            <Meta title="Account management" />
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
                <Message type="red" message={error} /> :
                (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                        <th></th>
                        <th style={{fontSize: '15px'}}><i className="fas fa-key" style={{paddingRight: '10px'}} />ID</th>
                        <th style={{fontSize: '15px'}}><i className="fas fa-user" style={{paddingRight: '10px'}} />NAME</th>
                        <th style={{fontSize: '15px'}}><i className="fas fa-envelope" style={{paddingRight: '10px'}} />EMAIL</th>
                        <th style={{fontSize: '15px', textAlign: 'center'}}><i className="fas fa-user-shield" style={{paddingRight: '10px'}} />ADMIN</th>
                        <th style={{fontSize: '15px', textAlign: 'center'}}><i className="fas fa-cogs" style={{paddingRight: '10px'}} />SETTING</th>
                        </tr>
                    </thead>
                <tbody>
                    {users.slice(pagesVisited, pagesVisited + shopPage).map((user) => (
                        <tr key={user._id}>
                            <td>{count++}</td>
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
                                {!user.isAdmin ?
                                    (
                                        <>
                                            <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                <i className='fas fa-edit'></i>
                                            </LinkContainer> | 
                                            <i onClick={() => confirmDelete(user._id)} style={{paddingLeft: '10px', color: '#D32F41'}} className='fas fa-trash'></i>
                                        </>
                                    ) :
                                    '*'
                                }
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                )
            }
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{zIndex: '99999'}}
                >
                <Modal.Header>
                <Modal.Title>COZA STORE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Are you sure delete it?
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteHandler()}>Delete</Button>
                </Modal.Footer>
            </Modal>
            <ReactPaginate
                previousLabel={null}
                nextLabel={null}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttn"}
                pageClassName={"btnpa"}
                activeClassName={"active-pag"}
            />
        </div>
    );
};

export default UserListPage;
