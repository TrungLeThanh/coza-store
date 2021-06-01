import React, {useEffect} from 'react';
import {listProducts} from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';

const AllProducts = () => {
    
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts);
    }, [dispatch]);

    return (
        <div>
            {console.log(products)}
        </div>
    );
};

export default AllProducts;
