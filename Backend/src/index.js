import express from 'express';
import methodOverride from 'method-override';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser"; 


// configuring .env
dotenv.config({
    path: '../.env'
});

// Initialize express app after dotenv and DB connection
const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));



 
import supplierRoutes from './routes/supplier.routes.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js'; 
import customerRoutes from './routes/customer.routes.js';
import orderRoutes from './routes/order.routes.js';
import productPurchasedRoutes from './routes/productPurchased.routes.js'; 
import transactionRoutes from './routes/transaction.routes.js'; 

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(cookieParser());  // Called cookieParser as a function



// Routes
app.use('/api/suppliers', supplierRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes); 
app.use('/api/customers', customerRoutes); 
app.use('/api/orders', orderRoutes);
app.use('/api/purchases', productPurchasedRoutes); 
app.use('/api/transactions', transactionRoutes); 





const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});