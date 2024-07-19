import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import '../styles/SignUpLogin.css';  // Import the shared CSS for the SignUpLogin container

const SignUpLogin = ({ theme }) => {
  return (
    <div className={`container ${theme}`}>
      <div className="form-container">
        <Routes>
          <Route path="/signup" element={<SignUpForm theme={theme} />} />
          <Route path="/login" element={<LoginForm theme={theme} />} />
          <Route path="/" element={<SignUpForm theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
};

export default SignUpLogin;
