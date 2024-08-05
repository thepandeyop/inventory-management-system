// src/components/SupplierForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Order.css';

const SupplierForm = ({ onSupplierCreated }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/suppliers', {
        name,
        contact,
        address,
      });
      onSupplierCreated(response.data);
    } catch (error) {
      console.error('Error creating supplier:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Supplier Name</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <label>Contact</label>
      <input 
        type="text" 
        value={contact} 
        onChange={(e) => setContact(e.target.value)} 
      />
      <label>Address</label>
      <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
      />
      <button type="submit">Create Supplier</button>
    </form>
  );
};

export default SupplierForm;
