// src/components/Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import '../styles/Order.css';

const Orders = () => {
  const [transactions, setTransactions] = useState([]);
  const [showTransactionForm, setShowTransactionForm] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleCreateTransaction = () => {
    setShowTransactionForm(true);
  };

  const handleTransactionCreated = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setShowTransactionForm(false);
  };

  return (
    <div>
      <button onClick={handleCreateTransaction}>Create Transaction</button>
      {showTransactionForm && (
        <TransactionForm onTransactionCreated={handleTransactionCreated} />
      )}
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerName}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.paymentMethod}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
