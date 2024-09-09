import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../pages/LoginPage.css';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Authenticate the user
      const formdata = new FormData();
      formdata.append('username', username);
      formdata.append('password', password);
      const loginResponse = await axios.post('http://localhost:7000/login', formdata, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    //  console.log(loginResponse);

      if (loginResponse.status === 200) {
        // Fetch logged-in user details after successful login
        const userDetailsResponse = await axios.get('http://localhost:7000/checkLoggedInUser', {
          withCredentials: true, headers: {
            'Content-Type': 'application/json',
          },
          
        });
       // console.log(userDetailsResponse)
        if (userDetailsResponse.status === 200) {
          const user = userDetailsResponse.data;
          console.log(user.username);
          

         
          localStorage.setItem('username', JSON.stringify(user.username));
          localStorage.setItem('id',JSON.stringify(user.id));

          if (user.role === 'ROLE_AGENT') {
            navigate('/agent/register'); // Redirect to Create Ticket page
          } else {
            alert('Invalid role');
          }
        } else {
          alert('Failed to fetch agent details');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
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
        <p>Don't have an account? <Link to="/signup/user">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
