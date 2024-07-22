// src/routes/transaction.routes.js
import express from 'express';
import {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from '../controllers/transaction.controllers.js';

const router = express.Router();

// Route to retrieve a list of all transactions
router.get('/', getAllTransactions);

// Route to retrieve a specific transaction by ID
router.get('/:id', getTransactionById);

// Route to create a new transaction
router.post('/', createTransaction);

// Route to update a transaction by ID
router.put('/:id', updateTransaction);

// Route to delete a transaction by ID
router.delete('/:id', deleteTransaction);

export default router;
