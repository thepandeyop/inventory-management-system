// src/routes/order.routes.js
import express from 'express';
import {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
} from '../controllers/order.controllers.js';

const router = express.Router();

// Route to retrieve a list of all orders
router.get('/', getAllOrders);

// Route to retrieve a specific order by ID
router.get('/:id', getOrderById);

// Route to create a new order
router.post('/', createOrder);

// Route to update an order by ID
router.put('/:id', updateOrder);

// Route to delete an order by ID
router.delete('/:id', deleteOrder);

export default router;
