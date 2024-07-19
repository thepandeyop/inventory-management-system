import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUpForm.css';  // Import the specific CSS file for SignUpForm

const SignUpForm = ({ theme }) => {
  return (
    <div className={`form-box ${theme}`}>
      <h2>Sign Up</h2>
      <p>Create a new account.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default SignUpForm;
