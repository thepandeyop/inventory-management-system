import mongoose from 'mongoose';

const InventoryTransactionSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity_change: {
        type: Number,
        required: true
    },
    transaction_type: {
        type: String,
        enum: ['purchase', 'sale', 'adjustment'],
        required: true
    },
    transaction_date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const InventoryTransaction = mongoose.model('InventoryTransaction', InventoryTransactionSchema);
export default InventoryTransaction;
