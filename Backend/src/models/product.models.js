import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    reorder_level: {
        type: Number,
        required: true
    },
    stock_status: {
        type: String,
        enum: ['In Stock', 'Low Stock', 'Out of Stock'],
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
});

// Populate the 'supplier' field with the 'name' field from the Supplier schema
ProductSchema.pre('findOne', function(next) {
    this.populate('supplier', 'name'); // Populate the 'supplier' field with 'name'
    next();
});


const Product = mongoose.model('Product', ProductSchema);
export default Product;