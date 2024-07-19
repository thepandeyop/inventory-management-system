import React from 'react';
import '../styles/Reports.css';

const Reports = ({ theme }) => {
  return (
    <div className={`reports-container`} data-theme={theme}>
      <div className="report-box">
        <h2>Sales Reports</h2>
        <p>Overview of key sales metrics for your business.</p>
        <div className="report-metrics">
          <div>
            <strong>Total Revenue</strong>
            <p>$1.2M</p>
          </div>
          <div>
            <strong>Gross Profit</strong>
            <p>$450K</p>
          </div>
          <div>
            <strong>Average Order Value</strong>
            <p>$85</p>
          </div>
          <div>
            <strong>Conversion Rate</strong>
            <p>3.2%</p>
          </div>
          <div>
            <strong>New Customers</strong>
            <p>1,250</p>
          </div>
          <div>
            <strong>Repeat Customers</strong>
            <p>850</p>
          </div>
        </div>
      </div>
      <div className="report-box">
        <h2>Inventory Reports</h2>
        <p>Detailed inventory status and history for your products.</p>
        <div className="report-metrics">
          <div>
            <strong>Total Inventory Value</strong>
            <p>$850K</p>
          </div>
          <div>
            <strong>Out of Stock Items</strong>
            <p>12</p>
          </div>
          <div>
            <strong>Inventory Turnover</strong>
            <p>4.2x</p>
          </div>
          <div>
            <strong>Damaged/Defective Items</strong>
            <p>28</p>
          </div>
          <div>
            <strong>Inventory Accuracy</strong>
            <p>97%</p>
          </div>
          <div>
            <strong>Inventory Shrinkage</strong>
            <p>2.1%</p>
          </div>
        </div>
      </div>
      <div className="report-box">
        <h2>Supplier Reports</h2>
        <p>Performance metrics for your company's suppliers.</p>
        <div className="report-metrics">
          <div>
            <strong>On-Time Delivery</strong>
            <p>92%</p>
          </div>
          <div>
            <strong>Order Fulfillment</strong>
            <p>98%</p>
          </div>
          <div>
            <strong>Quality Compliance</strong>
            <p>95%</p>
          </div>
          <div>
            <strong>Lead Time</strong>
            <p>14 days</p>
          </div>
          <div>
            <strong>Supplier Ratings</strong>
            <p>4.8/5</p>
          </div>
          <div>
            <strong>Cost Savings</strong>
            <p>$125K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
