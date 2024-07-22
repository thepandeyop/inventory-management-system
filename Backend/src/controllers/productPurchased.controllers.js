// src/controllers/productPurchased.controllers.js
import ProductPurchased from '../models/purchased.models.js';

// Get all purchased records
export const getAllProductPurchased = async (req, res) => {
    try {
        const purchases = await ProductPurchased.find().populate('supplier_id products.product_id products.category');
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchases', error });
    }
};

// Get a specific purchased record by ID
export const getProductPurchasedById = async (req, res) => {
    try {
        const purchase = await ProductPurchased.findById(req.params.id).populate('supplier_id products.product_id products.category');
        if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchase', error });
    }
};

// Create a new purchased record
export const createProductPurchased = async (req, res) => {
    try {
        const purchase = new ProductPurchased(req.body);
        await purchase.save();
        res.status(201).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Error creating purchase', error });
    }
};

// Update a purchased record by ID
export const updateProductPurchased = async (req, res) => {
    try {
        const purchase = await ProductPurchased.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Error updating purchase', error });
    }
};

// Delete a purchased record by ID
export const deleteProductPurchased = async (req, res) => {
    try {
        const purchase = await ProductPurchased.findByIdAndDelete(req.params.id);
        if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
        res.status(200).json({ message: 'Purchase deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting purchase', error });
    }
};
