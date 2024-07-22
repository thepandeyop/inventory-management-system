// src/routes/customer.routes.js
import express from 'express';
import {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
} from '../controllers/customer.controllers.js';

const router = express.Router();

// Route to retrieve a list of all customers
router.get('/', getAllCustomers);

// Route to retrieve a specific customer by ID
router.get('/:id', getCustomerById);

// Route to create a new customer
router.post('/', createCustomer);

// Route to update a customer by ID
router.put('/:id', updateCustomer);

// Route to delete a customer by ID
router.delete('/:id', deleteCustomer);

export default router;
