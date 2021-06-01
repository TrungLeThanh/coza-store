import React, {useState, useEffect} from 'react';
import './Overview.css';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
import Grid from '@material-ui/core/Grid';
import Loader from './Loader';



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
            <Grid container spacing={7}>
                {   
                    products.map((product)=>{
                        return (
                            <Grid style={{overflow: 'hidden'}} item key={product._id} xs={6} md={4} lg={3}>
                                <div className="image-style">
                                    <button className="ui button style-btn">Quick View</button>
                                    <img className="image-product" src={product.image} alt="" />
                                </div>
                                <p className="name-product">{product.name}</p>
                                <p>$ {product.price}</p>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    };
    const productsWoman = () => {
        return (
            <Grid container spacing={7}>
                {   
                    products.map((product)=>product.category === 'woman' ?
                        <Grid style={{overflow: 'hidden'}} item key={product._id} xs={12} md={4} lg={3}>
                            <div className="image-style">
                                <button className="ui button style-btn">Quick View</button>
                                <img className="image-product" src={product.image} alt="" />
                            </div>
                            <p className="name-product">{product.name}</p>
                            <p>$ {product.price}</p>
                        </Grid>
                        : ''
                    )
                }
            </Grid>
        );
    };

    const productsMan = () => {
        return (
            <Grid container spacing={7}>
                {   
                    products.map((product)=>product.category === 'man' ?
                        <Grid style={{overflow: 'hidden'}} item key={product._id} xs={12} md={4} lg={3}>
                            <div className="image-style">
                                <button className="ui button style-btn">Quick View</button>
                                <img className="image-product" src={product.image} alt="" />
                            </div>
                            <p className="name-product">{product.name}</p>
                            <p>$ {product.price}</p>
                        </Grid>
                        : ''
                    )
                }
            </Grid>
        );
    };

    const productsBag = () => {
        return (
            <Grid container spacing={7}>
                {   
                    products.map((product)=>product.category === 'bag' ?
                        <Grid style={{overflow: 'hidden'}} item key={product._id} xs={12} md={4} lg={3}>
                            <div className="image-style">
                                <button className="ui button style-btn">Quick View</button>
                                <img className="image-product" src={product.image} alt="" />
                            </div>
                            <p className="name-product">{product.name}</p>
                            <p>$ {product.price}</p>
                        </Grid>
                        : ''
                    )
                }
            </Grid>
        );
    };

    const productsWatches = () => {
        return (
            <Grid container spacing={7}>
                {   
                    products.map((product)=>product.category === 'watches' ?
                        <Grid style={{overflow: 'hidden'}} item key={product._id} xs={12} md={4} lg={3}>
                            <div className="image-style">
                                <button className="ui button style-btn">Quick View</button>
                                <img className="image-product" src={product.image} alt="" />
                            </div>
                            <p className="name-product">{product.name}</p>
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
                    <button onClick={() => setActive(2)} className={`ui button ${active===2 ? 'active-color' : ''}`}>Woman</button>
                    <button onClick={() => setActive(3)} className={`ui button ${active===3 ? 'active-color' : ''}`}>Man</button>
                    <button onClick={() => setActive(4)} className={`ui button ${active===4 ? 'active-color' : ''}`}>Bag</button>
                    <button onClick={() => setActive(5)} className={`ui button ${active===6 ? 'active-color' : ''}`}>Watches</button>
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
                active === 1 ?
                showAllProducts() :
                active === 2 ?
                productsWoman() :
                active === 3 ?
                productsMan() : 
                active === 4 ?
                productsBag() :
                productsWatches()
            }
        </div>
    );
};

export default Overview;
