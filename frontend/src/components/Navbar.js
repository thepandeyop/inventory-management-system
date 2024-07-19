import React from 'react';
import { FaHome, FaBoxOpen, FaTruck, FaChartLine, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className={`navbar ${theme}`}>
      <h2>Inventory Management System</h2>
      <nav>
        
        <ul>
        <li><Link to="/home"><FaHome /> Home</Link></li>
        <li><Link to="/products"><FaBoxOpen /> Products</Link></li>
        <li><Link to="/orders"><FaTruck /> Orders</Link></li>
        <li><Link to="/suppliers"><FaTruck /> Suppliers</Link></li>
        <li><Link to="/reports"><FaChartLine /> Reports</Link></li>
      </ul>
        
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
