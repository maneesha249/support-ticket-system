import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../pages/LoginPage.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (username === 'agent' && password === 'agent') {
      // Successful login
      login({ username, profilePic: 'https://example.com/profile-pic.jpg' }); // Mock profile picture URL
      navigate('/agent/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="page-container">
      <h1>Welcome to Customer Support</h1>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/agent/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
