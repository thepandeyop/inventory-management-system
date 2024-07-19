import React from 'react';

const Home = ({ theme }) => {
  return (
    <div className={`dashboard ${theme}`}>
      <div className="stats">
        <div className={`stat ${theme}`}>
          <h3>Total Inventory</h3>
          <p>1,234</p>
        </div>
        <div className={`stat ${theme}`}>
          <h3>Low Stock Alerts</h3>
          <p>12</p>
        </div>
        <div className={`stat ${theme}`}>
          <h3>Recent Transactions</h3>
          <p>$45,678</p>
        </div>
      </div>
      <table className={theme}>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acme Widgets</td>
            <td>WDG-001</td>
            <td>Home Goods</td>
            <td>Acme Inc.</td>
            <td className="in-stock">In Stock</td>
            <td>$9.99</td>
          </tr>
          <tr>
            <td>Acme Gizmos</td>
            <td>GZM-002</td>
            <td>Electronics</td>
            <td>Acme Inc.</td>
            <td className="low-stock">Low Stock</td>
            <td>$19.99</td>
          </tr>
          <tr>
            <td>Acme Thingamajigs</td>
            <td>TMJ-003</td>
            <td>Home Goods</td>
            <td>Acme Inc.</td>
            <td className="out-of-stock">Out of Stock</td>
            <td>$29.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
