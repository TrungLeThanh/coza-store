import React, {useEffect, useState} from 'react';
import './ProductEditPage.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {fetchProductById, updateProduct} from '../actions/productActions';
import {PRODUCT_UPDATE_RESET} from '../contains/productContains';

const ProductEditPage = ({match, history}) => {

    const productId = match.params.id;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate;

    useEffect(() => {
        if(successUpdate){
            dispatch({ type: PRODUCT_UPDATE_RESET });
            history.push('/admin/productlist');
        }else{
            if (!product.name || product._id !== productId) {
            dispatch(fetchProductById(productId))
            } else {
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setImage1(product.detailOne);
                setImage2(product.detailTwo);
                setImage3(product.detailThree);
                setBrand(product.brand);
                setCategory(product.category);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            }
        }
    }, [dispatch, product, productId, successUpdate, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProduct({
            _id: productId,
            name, 
            price,
            image,
            image1,
            image2,
            brand,
            category,
            countInStock,
            description
        }));
    };

    return (
        <div className="wrap-product-edit">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/profile'>
                    Admin &nbsp;{'>'}&nbsp;
                </Link>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/admin/productlist'>
                    Products &nbsp;{'>'}&nbsp;
                </Link>
                Create Product
            </div>
            <hr />
            <Link to="/admin/productlist" className="ui basic black button">Go Back</Link>
            <div className="wrap-form-edit">
                <div className="row" style={{padding: '30px',justifyContent: 'center'}}>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                        <h2 style={{textAlign: 'center'}}>Create Product </h2> <br />
                        {loadingUpdate && <Loader />}
                        {errorUpdate && <Message type="red" message={errorUpdate} />}
                        {
                            loading ? 
                            <Loader /> :
                            error ?
                            <Message type="red" message={error} /> :
                            (
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='name'>
                                        <Form.Label>Name Product</Form.Label>
                                        <Form.Control
                                            type='name'
                                            placeholder='Enter name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='price'>
                                        <Form.Label>Price $</Form.Label>
                                        <Form.Control
                                            type='number'
                                            placeholder='Enter price'
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='image'>
                                        <Form.Label>Image product</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter image url'
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='image1'>
                                        <Form.Label>Image Detai l</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter image url'
                                            value={image1}
                                            onChange={(e) => setImage1(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='image2'>
                                        <Form.Label>Image Detail 2</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter image url'
                                            value={image2}
                                            onChange={(e) => setImage2(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='image3'>
                                        <Form.Label>Image Detail 3</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter image url'
                                            value={image3}
                                            onChange={(e) => setImage3(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='brand'>
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter brand'
                                            value={brand}
                                            onChange={(e) => setBrand(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='countInStock'>
                                        <Form.Label>Count In Stock</Form.Label>
                                        <Form.Control
                                            type='number'
                                            placeholder='Enter countInStock'
                                            value={countInStock}
                                            onChange={(e) => setCountInStock(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='category'>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter category'
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='description'>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Button type='submit' variant='primary'> Update</Button>
                                </Form>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEditPage;