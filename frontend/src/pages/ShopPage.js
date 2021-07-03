import React, {useState, useEffect} from 'react';
import '../components/Overview.css';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
import Grid from '@material-ui/core/Grid';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './ShopPage.css';
import { Route } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

const ShopPage = ({match}) => {

    const keyword = match.params.keyword;

    const [active, setActive] = useState(1);

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList;

    // Panagation
    const [pageNumber, setPageNumber] = useState(0);
    const shopPage = 8;
    const pagesVisited = pageNumber * shopPage;
    const pageCount = Math.ceil(products.length / shopPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        dispatch(listProducts(keyword));
    }, [dispatch, keyword]);


    const showAllProducts = () => {
        return (
            <Grid container spacing={7}>
                {   
                    products.slice(pagesVisited, pagesVisited + shopPage).map((product)=>{
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
                    products.slice(pagesVisited, pagesVisited + shopPage).map((product)=>product.category === type ?
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
        <div className="wrap-overview" style={{paddingTop: '110px', minHeight: '100vh'}}>
            <div style={{marginBottom: '30px'}}>
                <Link style={{textDecoration: 'none', color: 'back', fontWeight: 'bold'}} to='/'>
                    Home &nbsp;{'>'}&nbsp;
                </Link>
                Shop
            </div>
            <div className="overview-select">
                <div className="list-overview">
                    <button onClick={() => setActive(1)} style={{paddingLeft: '0'}} className={`ui button ${active===1 ? 'active-color' : ''}`}>All products</button>
                    <button onClick={() => setActive(2)} className={`ui button ${active===2 ? 'active-color' : ''} fomat`}>Woman</button>
                    <button onClick={() => setActive(3)} className={`ui button ${active===3 ? 'active-color' : ''} fomat`}>Man</button>
                    <button onClick={() => setActive(4)} className={`ui button ${active===4 ? 'active-color' : ''} fomat`}>Bag</button>
                    <button onClick={() => setActive(5)} className={`ui button ${active===5 ? 'active-color' : ''} fomat`}>Watches</button>
                </div>
                <div style={{marginTop: '-10px', position: 'relative'}} className="form-search">
                    <Route render={({ history }) => <SearchBox history={history} />} />
                </div>
            </div>
            {
                loading ?
                <Loader /> :
                error ?
                <Message /> :
                products.length === 0 ?
                (
                    <div style={{textAlign: 'center'}}>
                        <img style={{width: '50%', zIndex: '-3', position: 'relative', marginTop: '-30px'}} src="/images/notf.png" alt="" />
                        <p id="not">No product found <Link style={{fontWeight: 'bold', color: 'rgb(108, 122, 224)', textDecoration: 'none'}} to="/shop">Shopping now</Link></p>
                    </div>
                ) :
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
            <ReactPaginate
                previousLabel={null}
                nextLabel={null}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                pageClassName={"btnpag"}
                activeClassName={"active-page"}
            />
        </div>
    );
};

export default ShopPage;
