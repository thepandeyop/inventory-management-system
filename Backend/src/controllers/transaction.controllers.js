// src/controllers/transaction.controllers.js
import Transaction from '../models/transaction.models.js';

// Get all transactions
export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('customer products.product');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};

// Get a specific transaction by ID
export const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id).populate('customer products.product');
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transaction', error });
    }
};

// Create a new transaction
export const createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
};

// Update a transaction by ID
export const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Error updating transaction', error });
    }
};

// Delete a transaction by ID
export const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json({ message: 'Transaction deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting transaction', error });
    }
};
