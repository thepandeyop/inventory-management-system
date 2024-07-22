import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Orders from './components/Orders';
import Suppliers from './components/Suppliers';
import Reports from './components/Reports';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SignUpLogin from './components/SignUpLogin';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<NoNavbar><SignUpLogin theme={theme} /></NoNavbar>} />
          <Route path="/signup" element={<NoNavbar><SignUpForm theme={theme} /></NoNavbar>} />
          <Route path="/login" element={<NoNavbar><LoginForm theme={theme} /></NoNavbar>} />
          <Route path="/home" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><Home toggleTheme={toggleTheme} theme={theme} /><Footer /></>} />
          <Route path="/products" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><Products /><Footer /></>} />
          <Route path="/orders" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><Orders /><Footer /></>} />
          <Route path="/suppliers" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><Suppliers /><Footer /></>} />
          <Route path="/reports" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><Reports theme={theme} /><Footer /></>} />
          <Route path="/about" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><AboutUs /><Footer /></>} />
          <Route path="/testimonials" element={<><Navbar toggleTheme={toggleTheme} theme={theme} /><Testimonials /><Footer /></>} />
        </Routes>
        <AboutUs/>
        <Testimonials/>
        
      </div>
    </Router>
  );
};

// Wrapper component to conditionally hide the Navbar
const NoNavbar = ({ children }) => {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/login', '/signup'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
};

export default App;
