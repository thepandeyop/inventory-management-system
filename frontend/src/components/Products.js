// src/components/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm.js';
import '../styles/Order.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateProduct = () => {
    setShowProductForm(true);
  };

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowProductForm(false);
  };

  return (
    <div className="home-container">
      <button onClick={handleCreateProduct}>Create Product</button>
      {showProductForm && (
        <ProductForm onProductCreated={handleProductCreated} />
      )}
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.availability}</td>
              <td>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    width="50"
                    height="50"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
