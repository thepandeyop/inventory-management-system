// src/controllers/supplier.controllers.js
import Supplier from '../models/supplier.models.js';
import Product from '../models/product.models.js';

// Get all suppliers
export const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find().populate({
            path: 'products',
            select: 'name', // select only the name field
            options: { limit: 3 } // limit to 3 products
        });
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching suppliers', error });
    }
};

// Get a specific supplier by ID
export const getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id).populate('products');
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching supplier', error });
    }
};

// Create a new supplier
export const createSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ message: 'Error creating supplier', error });
    }
};

// Update a supplier by ID
export const updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: 'Error updating supplier', error });
    }
};

// Delete a supplier by ID
export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.status(200).json({ message: 'Supplier deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting supplier', error });
    }
};
