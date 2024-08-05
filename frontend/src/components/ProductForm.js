// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Order.css';

const ProductForm = ({ onProductCreated }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('availability', availability);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onProductCreated(response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <label>Price</label>
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <label>Availability</label>
      <select 
        value={availability} 
        onChange={(e) => setAvailability(e.target.value)} 
      >
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
      <label>Image</label>
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
