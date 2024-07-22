// src/routes/category.routes.js
import express from 'express';
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from '../controllers/category.controllers.js';

const router = express.Router();

// Route to retrieve a list of all categories
router.get('/', getAllCategories);

// Route to retrieve a specific category by ID
router.get('/:id', getCategoryById);

// Route to create a new category
router.post('/', createCategory);

// Route to update a category by ID
router.put('/:id', updateCategory);

// Route to delete a category by ID
router.delete('/:id', deleteCategory);

export default router;
