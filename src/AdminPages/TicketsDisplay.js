import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketDisplay.css'


import axios from 'axios';

const TicketDisplay = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/tickets', {
          withCredentials: true,
        });
        setTickets(response.data);  // Store tickets in state
      } catch (error) {
        console.error('Error fetching tickets:', error);
        alert('Error fetching tickets.');
      }
    };

    fetchTickets(); // Invoke the API to fetch tickets
  }, []);

  return (
    <div>
      <h1>All Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <strong>Title:</strong> {ticket.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketDisplay;
