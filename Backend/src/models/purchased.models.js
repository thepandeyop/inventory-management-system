import mongoose from 'mongoose';

const ProductPurchasedSchema = new mongoose.Schema({
    purchase_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    products: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        purchase_price: {
            type: Number,
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        }
    }],
    total_cost: {
        type: Number,
        required: true
    }
});

// Middleware to calculate total cost before saving the purchase
ProductPurchasedSchema.pre('save', function(next) {
    this.total_cost = this.products.reduce((acc, item) => acc + (item.quantity * item.purchase_price), 0);
    next();
});

const ProductPurchased = mongoose.model('ProductPurchased', ProductPurchasedSchema);
export default ProductPurchased;
