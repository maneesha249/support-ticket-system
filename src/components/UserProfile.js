import React, { useState } from 'react';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  return (
    <main>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit">Update Profile</button>
      </form>
    </main>
  );
};

export default UserProfile;
