import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUpForm.css';  // Import the specific CSS file for LoginForm

const LoginForm = ({ theme }) => {
  return (
    <div className={`form-box ${theme}`}>
      <h2>Login</h2>
      <p>Sign in to your account.</p>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Create account here</Link></p>
    </div>
  );
};

export default LoginForm;
