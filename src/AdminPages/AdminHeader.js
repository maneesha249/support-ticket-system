import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css'; 
const AdminHeader = () => {
  return (
    <header className="admin-header">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/manage-tickets">Manage Tickets</Link></li>
          {/* <li><Link to="/admin/assign-tickets">Assign Tickets</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;