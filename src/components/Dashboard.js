import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <main>
    <h2>Dashboard Overview</h2>
    <div className="dashboard-summary">
      <div className="summary-item">
        <h3>Open Tickets</h3>
        <p>0</p>
      </div>
      <div className="summary-item">
        <h3>Closed Tickets</h3>
        <p>0</p>
      </div>
    </div>
    <button>
      <Link to="/create-ticket">Create New Ticket</Link>
    </button>
  </main>
);

export default Dashboard;
