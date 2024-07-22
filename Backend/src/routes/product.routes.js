// src/routes/product.routes.js
import express from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.controllers.js';

const router = express.Router();

// Route to retrieve a list of all products
router.get('/', getAllProducts);

// Route to retrieve a specific product by ID
router.get('/:id', getProductById);

// Route to create a new product
router.post('/', createProduct);

// Route to update a product by ID
router.put('/:id', updateProduct);

// Route to delete a product by ID
router.delete('/:id', deleteProduct);

export default router;
