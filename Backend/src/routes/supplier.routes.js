// src/routes/supplier.routes.js
import express from 'express';
import {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
} from '../controllers/supplier.controllers.js';

const router = express.Router();

// Route to retrieve a list of all suppliers
router.get('/', getAllSuppliers);

// Route to retrieve a specific supplier by ID along with products
router.get('/:id', getSupplierById);

// Route to create a new supplier
router.post('/', createSupplier);

// Route to update a supplier by ID
router.put('/:id', updateSupplier);

// Route to delete a supplier by ID
router.delete('/:id', deleteSupplier);

export default router;
