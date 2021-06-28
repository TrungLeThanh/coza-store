import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


//@desc     Fetch all products
//@route    GET/api/products
//@access   public
const getProducts = asyncHandler( async(req, res)=>{
    const products = await Product.find();
    res.json(products);
});

//@desc     Fetch single product
//@route    GET/api/products/:id
//@access   public
const getProductById = asyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id);

    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error('Product not found');
    }
});

// ADMIN

//@desc     Delete a product
//@route    DELETE/api/products/:id
//@access   private/admin
const deleteProduct = asyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id);

    if(product){
        await product.remove();
        res.json({message: 'Product deleted'});
    }else{
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        user: req.user._id,
        name: 'Test create',
        image: '/images/product-detail-01.jpg',
        detailOne: '/images/product-detail-01.jpg',
        detailTwo: '/images/product-detail-02.jpg',
        detailThree: '/images/product-detail-03.jpg',
        description: 'Test description.',
        brand: 'Apple',
        category: 'woman',
        price: 89.99,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    });
    
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        image,
        detailOne,
        detailTwo,
        detailThree,
        description,
        brand,
        category,
        price,
        countInStock
    } = req.body;
    
    const product = await Product.findById(req.params.id);
    
    if (product) {
        product.name = name;
        product.image = image;
        product.detailOne = detailOne;
        product.detailTwo = detailTwo;
        product.detailThree = detailThree;
        product.price = price;
        product.description = description;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


export {getProducts, getProductById, deleteProduct, createProduct, updateProduct};

