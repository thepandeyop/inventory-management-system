// src/components/Suppliers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplierForm from './SupplierForm.js';
import '../styles/Order.css';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [showSupplierForm, setShowSupplierForm] = useState(false);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get('/api/suppliers');
      setSuppliers(response.data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const handleCreateSupplier = () => {
    setShowSupplierForm(true);
  };

  const handleSupplierCreated = (newSupplier) => {
    setSuppliers([...suppliers, newSupplier]);
    setShowSupplierForm(false);
  };

  return (
    <div className="home-container">
      <button onClick={handleCreateSupplier}>Create Supplier</button>
      {showSupplierForm && (
        <SupplierForm onSupplierCreated={handleSupplierCreated} />
      )}
      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={index}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
