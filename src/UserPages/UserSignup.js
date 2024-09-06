import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './UserSignup.css'; // Add your styling here

const UserSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (username && password && email) {
      // Mock sign-up logic
      login({ username, profilePic: 'https://example.com/profile-pic.jpg', role: 'user' });
      navigate('/user/dashboard'); // Redirect to user dashboard
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="page-container">
      <h1>User Signup</h1>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label>Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default UserSignup;
