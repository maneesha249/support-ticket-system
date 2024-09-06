// AgentHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AgentHeader.css'; 

const AgentHeader = () => {
  return (
    <header className="agent-header">
      <h1>Agent Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/agent/dashboard">Dashboard</Link></li>
          <li><Link to="/agent/manage-tickets">Manage Tickets</Link></li>
          <li><Link to="/agent/assign-tickets">Assign Tickets</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default AgentHeader;
