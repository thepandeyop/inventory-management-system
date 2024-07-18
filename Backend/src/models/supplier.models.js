import mongoose from 'mongoose';

const SupplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact_info: {
        type: String
    },
    address: {
        type: String
    },
    notes: {
        type: String
    }
});

const Supplier = mongoose.model('Supplier', SupplierSchema);
export default Supplier;
