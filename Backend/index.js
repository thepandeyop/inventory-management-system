// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoutes.js';
import userRoutes from './routes/userRoutes.js';
// Import other routes similarly

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
// Use other routes similarly

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

