import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    order_date: {
        type: Date,
        default: Date.now
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled']
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
        price: {
            type: Number,
            required: true
        }
    }],
    total_price: {
        type: Number,
    },
    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    payment_method: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
        required: true
    },
    transaction_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    }
});

// Middleware to calculate total price before saving the order
orderSchema.pre('save', function(next) {
    this.total_price = this.products.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    next();
});

const Order = mongoose.model('Order', orderSchema);
export default Order;