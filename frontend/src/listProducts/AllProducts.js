import React, {useEffect} from 'react';
import {listProducts} from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';

const AllProducts = () => {
    
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts)
    }, [dispatch]);

    const showAllProducts = () => {
        return (<Grid container spacing={2}>
                {   
                    products.map((product)=>{
                        return (
                            <Grid item xs={6} md={4} lg={3} key={product.title} >
                                {product.name}
                            </Grid>
                        );
                    })
                };
            </Grid>
        );
    }

    return (
        <div>
            {showAllProducts()}
        </div>
    );
};

export default AllProducts;
