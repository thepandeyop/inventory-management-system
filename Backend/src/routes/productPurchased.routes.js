// src/routes/productPurchased.routes.js
import express from 'express';
import {
    getAllProductPurchased,
    getProductPurchasedById,
    createProductPurchased,
    updateProductPurchased,
    deleteProductPurchased
} from '../controllers/productPurchased.controllers.js';

const router = express.Router();

// Route to retrieve a list of all purchases
router.get('/', getAllProductPurchased);

// Route to retrieve a specific purchase by ID
router.get('/:id', getProductPurchasedById);

// Route to create a new purchase
router.post('/', createProductPurchased);

// Route to update a purchase by ID
router.put('/:id', updateProductPurchased);

// Route to delete a purchase by ID
router.delete('/:id', deleteProductPurchased);

export default router;
