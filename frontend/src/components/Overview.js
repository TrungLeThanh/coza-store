import React, {useState, useEffect} from 'react';
import './Overview.css';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
import Grid from '@material-ui/core/Grid';
import Loader from './Loader';
import Message from './Message';
import {Link} from 'react-router-dom';


const Overview = () => {

    const [active, setActive] = useState(1);

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);


    const showAllProducts = () => {
        return (
            <Grid container justify="center" spacing={7}>
                {   
                    products.map((product)=>{
                        return (
                            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3} data-aos="fade-up" data-aos-duration="1000">
                                <div className="image-style">
                                    <Link to={`/products/${product._id}`} >
                                        <button className="ui button style-btn">Quick View</button>
                                    </Link>
                                    <img className="image-product" src={product.image} alt="" />
                                </div>
                                <p className="name-product">
                                    <Link style={{textDecoration: 'none'}} to={`/products/${product._id}`} >
                                        {product.name}
                                    </Link>
                                    <span style={{float: 'right'}}>
                                        {product.rating}
                                        <i style={{color: '#E9334A', paddingLeft: '5px'}} className="far fa-heart" />
                                    </span>
                                    
                                </p>
                                <p>$ {product.price}</p>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    };

    const productsSelect = (type) => {
        return (
            <Grid container spacing={7}>
                {   
                    products.map((product)=>product.category === type ?
                        <Grid style={{overflow: 'hidden'}} item key={product._id} xs={12} md={4} lg={3} data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-style">
                                <Link to={`/products/${product._id}`} >
                                    <button className="ui button style-btn">Quick View</button>
                                </Link>
                                <img className="image-product" src={product.image} alt="" />
                            </div>
                            <p className="name-product">
                                <Link style={{textDecoration: 'none'}} to={`/products/${product._id}`} >
                                    {product.name}
                                </Link>
                                <span style={{float: 'right'}}>
                                    {product.rating}
                                    <i style={{color: '#E9334A', paddingLeft: '5px'}} className="far fa-heart" />
                                </span>
                            </p>
                            <p>$ {product.price}</p>
                        </Grid>
                        : ''
                    )
                }
            </Grid>
        );
    };


    return (
        <div className="wrap-overview">
            <h3>Product Overview</h3>
            <div className="overview-select">
                <div className="list-overview">
                    <button onClick={() => setActive(1)} style={{paddingLeft: '0'}} className={`ui button ${active===1 ? 'active-color' : ''}`}>All products</button>
                    <button onClick={() => setActive(2)} className={`ui button ${active===2 ? 'active-color' : ''} fomat`}>Woman</button>
                    <button onClick={() => setActive(3)} className={`ui button ${active===3 ? 'active-color' : ''} fomat`}>Man</button>
                    <button onClick={() => setActive(4)} className={`ui button ${active===4 ? 'active-color' : ''} fomat`}>Bag</button>
                    <button onClick={() => setActive(5)} className={`ui button ${active===5 ? 'active-color' : ''} fomat`}>Watches</button>
                </div>
                <div style={{marginTop: '-20px', position: 'relative'}} className="form-search">
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search..." />
                    </form>
                </div>
            </div>
            {
                loading ?
                <Loader /> :
                error ?
                <Message /> :
                active === 1 ?
                showAllProducts() :
                active === 2 ?
                productsSelect('woman') :
                active === 3 ?
                productsSelect('man') : 
                active === 4 ?
                productsSelect('bag') :
                productsSelect('watches')
            }
        </div>
    );
};

export default Overview;
