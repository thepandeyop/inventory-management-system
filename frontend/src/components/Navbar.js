import React from 'react';
import { FaHome, FaInfoCircle, FaCommentDots, FaBox, FaTruckMoving, FaPeopleCarry, FaChartPie, FaSun,FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className={`navbar ${theme}`}>
      <h2>Inventory Management System</h2>
      <nav>
        
        <ul>
        <li><Link to="/home"><FaHome /> Home</Link></li>
      <li><Link to="/about"><FaInfoCircle /> About Us</Link></li>
      <li><Link to="/testimonials"><FaCommentDots /> Testimonials</Link></li>
      <li><Link to="/products"><FaBox /> Products</Link></li>
      <li><Link to="/orders"><FaTruckMoving /> Orders</Link></li>
      <li><Link to="/suppliers"><FaPeopleCarry /> Suppliers</Link></li>
      <li><Link to="/reports"><FaChartPie /> Reports</Link></li>

      </ul>
        
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
