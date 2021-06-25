import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Api is runing');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);



app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

