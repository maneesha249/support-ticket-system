import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AgentManageTickets.css'; // Import the CSS file

const ManageTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Get username from localStorage
        let username = JSON.parse(localStorage.getItem('username'));
        console.log(username);

        // Fetch tickets based on agent's username
        const ticketsResponse = await axios.get(`http://localhost:7000/api/tickets/agent/${username}`, {
          withCredentials: true,
        });

        setTickets(ticketsResponse.data);
        console.log(ticketsResponse.data);
      } catch (err) {
        console.error('Error fetching tickets:', err);
        setError('Error fetching tickets');
      }
    };

    fetchTickets();
  }, []);

  // Handler to navigate to ticket details page
  const handleViewTicketDetails = (title) => {
    navigate(`/tickets/title/${title}`);
  };

  return (
    <div className="manage-tickets-container">
      <h1 >Manage Tickets</h1>
      {error && <p>{error}</p>}
      {tickets.length > 0 ? (
        <div className="ticket-buttons">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              className="ticket-button"
              onClick={() => handleViewTicketDetails(ticket.name)} // Navigate on button click
            >
              {ticket.name}
            </button>
          ))}
        </div>
      ) : (
        <p>No tickets available.</p>
      )}
    </div>
  );
};

export default ManageTickets;
