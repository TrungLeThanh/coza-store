import React, {useEffect, useState} from 'react';
import './ProductDetail.css';
import {fetchProductById} from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';

const ProductDetail = ({match}) => {

    const [activeImage, setActiveImage] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() =>{
        dispatch(fetchProductById(match.params.id));
    }, [dispatch, match]);

    console.log(product)

    const renderProductById = () => {
        return(
            <Grid container style={{border: '1px solid black', padding: '30px 0 30px 0'}} spacing={0}>
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
                        <p>Qty: </p>
                        <span style={{paddingRight: '18px'}}>Size:</span>
                        <div className="ui basic buttons">
                            <div className="ui button">M</div>
                            <div className="ui button">L</div>
                            <div className="ui button">S</div>
                        </div>
                        <br /> <br />
                        <span style={{paddingRight: '10px'}}>Color:</span>
                        <div className="ui buttons">
                            <button className="ui red button" />
                            <button className="ui black button" />
                            <button className="ui brown button" />
                            <button className="ui grey button" />
                        </div> <br /> <br />
                        <button className={`ui ${product.countInStock === 0 ? 'disabled' : ''} black button`}>ADD TO CART <i style={{paddingLeft: '10px'}} className="fas fa-shopping-cart" /></button>
                    </div>
                </Grid>
            </Grid>
        );
    };

    return (
        <div className="wrap-product-detail">
            {renderProductById()}
        </div>
    );
};

export default ProductDetail;
