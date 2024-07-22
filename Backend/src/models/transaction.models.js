import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    products: [{
        product: {
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
    total_amount: {
        type: Number,
    },
    transaction_date: {
        type: Date,
        default: Date.now
    },
    payment_method: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
        required: true
    },
    transaction_id: {
        type: String,
        required: true,
        unique: true
    }
});

// Middleware to calculate total amount before saving the transaction
transactionSchema.pre('save', function(next) {
    this.total_amount = this.products.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    next();
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
