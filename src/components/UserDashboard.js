import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock function to simulate fetching ticket data
const fetchTicketData = async () => {
  // Replace this with actual API call
  return [
    { id: 1, status: 'resolved', title: 'Issue 1' },
    { id: 2, status: 'pending', title: 'Issue 2' },
    { id: 3, status: 'in-progress', title: 'Issue 3' },
    { id: 4, status: 'resolved', title: 'Issue 4' },
    { id: 5, status: 'pending', title: 'Issue 5' },
  ];
};

const TicketList = ({ tickets }) => (
  <div className="ticket-list">
    <h3>Tickets</h3>
    <ul>
      {tickets.map(ticket => (
        <li key={ticket.id}>{ticket.title}</li>
      ))}
    </ul>
  </div>
);

const UserDashboard = () => {
  const [ticketData, setTicketData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const tickets = await fetchTicketData();
      setTicketData(tickets);
    };

    getData();
  }, []);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const filteredTickets = ticketData.filter(ticket => 
    selectedStatus ? ticket.status === selectedStatus : true
  );

  return (
    <main>
      <h2>Dashboard Overview</h2>
      <div className="status-buttons">
        <button onClick={() => handleStatusClick('resolved')}>
          Resolved Tickets
        </button>
        <button onClick={() => handleStatusClick('pending')}>
          Pending Tickets
        </button>
        <button onClick={() => handleStatusClick('in-progress')}>
          In-Progress Tickets
        </button>
        <button onClick={() => handleStatusClick(null)}>
          All Tickets
        </button>
      </div>
      {selectedStatus && (
        <TicketList tickets={filteredTickets} />
      )}
      <button>
        <Link to="/create-ticket">Create New Ticket</Link>
      </button>
    </main>
  );
};

export default UserDashboard;
