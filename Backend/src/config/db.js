import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection failed', error);
        process.exit(1);
    }
};

export default connectDB;
