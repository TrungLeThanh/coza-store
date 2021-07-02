import React, {useEffect, useState} from 'react';
import './OrderListPage.css';
import {useDispatch, useSelector} from 'react-redux';
import {listOrders} from '../actions/orderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {Link} from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const OrderListPage = ({history}) => {

    const userLogin = useSelector(state => state.userLogin);
    const {userInfor} = userLogin;

    const orderList = useSelector(state => state.orderList);
    const {loading, error, orders} = orderList;

    let count = 1;

      // Panagation
    const [pageNumber, setPageNumber] = useState(0);
    const shopPage = 10;
    const pagesVisited = pageNumber * shopPage;
    const pageCount = Math.ceil(Object(orders).length / shopPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfor && userInfor.isAdmin){
            dispatch(listOrders());
        }else{
            history.push('/login')
        }
    }, [dispatch, userInfor, history]);

    return (
        <div className="list-order-admin">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/profile'>
                    Admin &nbsp;{'>'}&nbsp;
                </Link>
                Orders
            </div>
            <hr />
            <h1 style={{textAlign: 'center', fontWeight: '500', padding: '20px 0px'}}>Orders List</h1>
            {
                loading ? 
                <Loader /> :
                error ? 
                <Message variant='danger'>{error}</Message> :
                (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                        <th></th>
                        <th>ID</th>
                        <th>USER</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.slice(pagesVisited, pagesVisited + shopPage).map((order) => (
                        <tr key={order._id}>
                            <td>{count ++}</td>
                            <td>{order._id}</td>
                            <td>{order.user && order.user.name}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>${order.totalPrice}</td>
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
    )
}

export default OrderListPage
