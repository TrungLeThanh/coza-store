import React, {useEffect, useState} from 'react';
import './ProductListPage.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {Table, Modal, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import {listProducts, deleteProduct, createProduct} from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../contains/productContains';
import ReactPaginate from 'react-paginate';

const ProductListPage = ({history}) => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfor } = userLogin;

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productDelete = useSelector((state) => state.productDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete,} = productDelete;

    const productCreate = useSelector((state) => state.productCreate);
    const {loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct} = productCreate;

    let count = 1;

    // MODAL CONFIRM
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [id, setId] = useState('');

    // Panagation
    const [pageNumber, setPageNumber] = useState(0);
    const shopPage = 10;
    const pagesVisited = pageNumber * shopPage;
    const pageCount = Math.ceil(products.length / shopPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfor || !userInfor.isAdmin) {
            history.push('/login');
        }

        if (successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`);
        } else {
            dispatch(listProducts());
        }
    }, [dispatch, history, userInfor, successDelete, successCreate, createdProduct]);

    const confirmDelete = (id) => {
        setShow(true);
        setId(id);
    };

    const deleteHandler = () => {
        dispatch(deleteProduct(id));
        setShow(false);
    };

    const createProductHandler = () => {
        dispatch(createProduct());
    }

    return (
        <div className="wrap-list-product">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/profile'>
                    Admin &nbsp;{'>'}&nbsp;
                </Link>
                Products
            </div>
            <hr />
            <div className="create">
                <h2 style={{fontWeight: '500'}}>Current products</h2>
                <button onClick={createProductHandler} className="ui linkedin button">
                    <i className="plus icon"></i>
                    CREATE
                </button>
            </div>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
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
                            <th style={{fontSize: '15px'}}>ID</th>
                            <th style={{fontSize: '15px'}}>NAME</th>
                            <th style={{fontSize: '15px'}}>PRICE</th>
                            <th style={{fontSize: '15px'}}>CATEGORY</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {products.slice(pagesVisited, pagesVisited + shopPage).map((product) => (
                                <tr key={product._id}>
                                <td>{count ++}</td>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>
                                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                        <i className='fas fa-edit'></i>
                                    </LinkContainer> | 
                                    <i style={{marginLeft: '5px', color: '#D32F41'}} onClick={() => confirmDelete(product._id)} className='fas fa-trash'></i>
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

export default ProductListPage;
