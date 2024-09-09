import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (username && password && email) {
      // Prepare the user data to send in the request body
      const userData = {
        username,
        password,
        email,
      };

      try {
        // Send POST request to Spring Boot backend
        const response = await fetch('http://localhost:7000/signup/agent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData), // Send the user data
        });

        if (response.ok) {
          // On successful sign-up, redirect to Create Ticket page
          navigate('/agent/login');
        } else {
          alert('Error: Unable to sign up');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="page-container">
      <h1>Welcome to Customer Support</h1>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
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
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
