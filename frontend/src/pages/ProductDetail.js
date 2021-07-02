import React, {useEffect, useState, Fragment} from 'react';
import './ProductDetail.css';
import {fetchProductById} from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import { createProductReview } from '../actions/productActions';
import {PRODUCT_CREATE_REVIEW_RESET} from '../contains/productContains';
import { ListGroup, Card, Button, Form } from 'react-bootstrap';

const ProductDetail = ({match, history}) => {
    const dispatch = useDispatch();

    const [activeImage, setActiveImage] = useState(1);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('M');

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const {
        success: successProductReview,
        loading: loadingProductReview,
        error: errorProductReview,
    } = productReviewCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfor } = userLogin;

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() =>{
        dispatch(fetchProductById(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}/?qty=${qty}&size=${size}`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        );
    };

    const renderProductById = () => {
        return(
            <Grid justify="center" container style={{padding: '30px 0 30px 0', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} spacing={0}>
                <Grid item xs={12} sm={3} md={2} lg={2}>
                    <div className="select-image">
                        <div className={`image-detail ${activeImage === 1 ? 'border-active' : ''}`} onClick={() => setActiveImage(1)}>
                            <img src={product.detailOne} alt="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className={`image-detail ${activeImage === 2 ? 'border-active' : ''}`} onClick={() => setActiveImage(2)}>
                            <img src={product.detailTwo} alt="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className={`image-detail ${activeImage === 3 ? 'border-active' : ''}`} onClick={() => setActiveImage(3)}>
                            <img src={product.detailThree} alt="" style={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={9} md={4} lg={4}>
                    <div className="image-productId">
                        <img src={`${activeImage === 1 ? product.image : activeImage === 2 ? product.detailTwo : product.detailThree}`} alt="" style={{width: '100%', height: '100%'}}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="detail-product">
                        <h5>{product.name}</h5> <hr />
                        <h5>$ {product.price}</h5> <hr />
                        <p>{product.description}</p>
                        <p>Rate: {product.rating} <i style={{color: '#E9334A', paddingLeft: '5px'}} className="far fa-heart" /></p> <hr />
                        <p>Count in stock: {product.countInStock}</p> <hr />
                        <div>
                            Quantity : {
                                <FormControl style={{width: '100px', paddingLeft: '15px'}}>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    >
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <MenuItem value={x + 1} key={x + 1}>
                                                {x + 1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            }
                        </div> <br />
                        <span style={{paddingRight: '18px'}}>Size:</span>
                        <div className="ui basic buttons">
                            <button onClick={() => setSize('S')} className={`ui button ${size === 'S' ? 'active' : ''}`}>S</button>
                            <button onClick={() => setSize('M')} className={`ui button ${size === 'M' ? 'active' : ''}`}>M</button>
                            <button onClick={() => setSize('L')} className={`ui button ${size === 'L' ? 'active' : ''}`}>L</button>
                        </div> <br /> <br /> <br />
                        <button onClick={addToCartHandler} className={`ui ${product.countInStock === 0 ? 'disabled' : ''} black button`}>ADD TO CART <i style={{paddingLeft: '10px'}} className="fas fa-shopping-cart" /></button>
                    </div>
                </Grid>
            </Grid>
        );
    };

    return (
        <div className="wrap-product-detail">
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                Detail
            </div>
            {
                loading ?
                <Loader /> :
                error ?
                <Message /> :
                renderProductById()
            }
            <div className="reviews">
                <h2 style={{fontWeight: '500'}}>Product Reviews</h2>
                <hr />
                {
                    product.reviews.length === 0 &&
                    (<><div className="ui blue segment">The product has no reviews yet!</div> <hr /></>)
                }
                {product.reviews.map((review) => (
                    <Fragment key={review._id}>
                    <div className="ui comments" style={{paddingLeft: '40px'}}>
                        <div className="comment">
                            <span className="avatar">
                                <span className="ui grey circular label" style={{fontSize: '18px'}}>{review.name.charAt(0)}</span>
                            </span>
                            <div className="content">
                                <span className="author">{review.name}</span>
                                <div className="metadata">
                                    <span className="date">{review.createdAt.substring(0, 10)}</span>
                                </div>
                                <div className="text">
                                    <p style={{paddingTop: '10px'}}>{review.comment}</p>
                                    <p>Ratings {review.rating} <i style={{color: '#E9334A', paddingLeft: '5px'}} className="far fa-heart" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{width: '60%'}} />
                    </Fragment>
                    ))
                }
                <div className="comment-write">
                    <h4 style={{fontWeight: '500'}}>Review</h4>
                    {successProductReview && <Message message="Review submitted successfully" />}
                    {loadingProductReview && <Loader />}
                    {errorProductReview && <Message type="red" message={errorProductReview} />}
                    {userInfor ? (
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                as='select'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                >
                                <option value=''>Select...</option>
                                <option value='1'>1 - Poor</option>
                                <option value='2'>2 - Fair</option>
                                <option value='3'>3 - Good</option>
                                <option value='4'>4 - Very Good</option>
                                <option value='5'>5 - Excellent</option>
                                </Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group controlId='comment'>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                as='textarea'
                                row='5'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <br />
                            <Button
                                disabled={loadingProductReview}
                                type='submit'
                                variant='primary'
                            >
                                Submit
                            </Button>
                            </Form>
                        ) : (
                            <Message type="red" message={`Please login to write a review`} />
                        )}
                    </div>
            </div>
        </div>
    );
};

export default ProductDetail;
