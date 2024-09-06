import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../UserPages/Header'; 
import AdminHeader from '../AdminPages/AdminHeader'; 
import AgentHeader from '../AgentPages/AgentHeader'; // Import AgentHeader

const Layout = ({ children }) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      {/* Check user role and render the appropriate header */}
      {user && user.username === 'admin' ? (
        <AdminHeader />
      ) : user && user.username === 'agent' ? (
        <AgentHeader />
      ) : (
        <Header />
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
