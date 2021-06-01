import express from 'express';
import productRoutes from './routes/productRoutes.js';
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

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

