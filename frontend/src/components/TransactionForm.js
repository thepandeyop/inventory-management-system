// src/components/TransactionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Order.css';

const TransactionForm = ({ onTransactionCreated }) => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/transactions', {
        customerName,
        amount,
        paymentMethod,
        date,
      });
      console.log('Transaction created:', response.data);
      // Reset form
      setCustomerName('');
      setAmount(0);
      setPaymentMethod('');
      setDate('');
      onTransactionCreated(response.data);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Customer Name</label>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <label>Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label>Payment Method</label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Create Transaction</button>
    </form>
  );
};

export default TransactionForm;
