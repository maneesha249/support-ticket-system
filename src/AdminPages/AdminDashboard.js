import React from 'react';
import { tickets } from './MockData'; 
import './AdminDashboard.css'; 
const Dashboard = () => {

  const calculateTicketStats = () => {
    const stats = {
      resolved: 0,
      pending: 0,
      inProgress: 0
    };

    tickets.forEach(ticket => {
      if (ticket.status === 'Resolved') {
        stats.resolved++;
      } else if (ticket.status === 'Pending') {
        stats.pending++;
      } else if (ticket.status === 'In Progress') {
        stats.inProgress++;
      }
    });

    return stats;
  };

  const ticketStats = calculateTicketStats();

  return (
    <main>
      <h2>Dashboard</h2>
      <section className="ticket-stats">
        <div className="stat-card">
          <h3>Resolved</h3>
          <p>{ticketStats.resolved}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p>{ticketStats.pending}</p>
        </div>
        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{ticketStats.inProgress}</p>
        </div>
      </section>
      {/* You can include other dashboard content here */}
    </main>
  );
};

export default Dashboard;
