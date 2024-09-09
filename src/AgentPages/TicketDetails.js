import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TicketDetails.css';

const TicketDetailsPage = () => {
  const { title } = useParams(); // Get the title from the URL params
  const [ticket, setTicket] = useState(null); // Ticket state
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(''); // Status state for the dropdown
  const [priority, setPriority] = useState(''); // Priority state for the dropdown

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/tickets/title/${title}`, {
          withCredentials: true,
        });
        setTicket(response.data); // Set ticket details
        setStatus(response.data.status); // Set current status
        setPriority(response.data.priority); // Set current priority
      } catch (error) {
        console.error('Error fetching ticket details:', error);
        setError('Error fetching ticket details');
      }
    };

    fetchTicketDetails();
  }, [title]);

  // Function to update the ticket status and priority
  const updateTicket = async () => {
    try {
      const response = await axios.put(
        `http://localhost:7000/api/tickets/${ticket.id}`,
        {
          status, // Send the new status
          priority, // Send the new priority
        },
        {
          withCredentials: true,
        }
      );
      alert('Ticket updated successfully!');
      setTicket(response.data); // Update ticket with the new status and priority
    } catch (error) {
      console.error('Error updating ticket:', error);
      setError('Error updating ticket');
    }
  };

  return (
    <div className="container">
     
      {error && <p className="error">{error}</p>}
      {ticket ? (
        <div className="ticket-details">
          <p><strong>Title:</strong> {ticket.name}</p>
          <p><strong>Description:</strong> {ticket.description}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Priority:</strong> {ticket.priority}</p>

          {/* Dropdown to select status */}
          <label htmlFor="status">Change Status:</label>
          <select 
            id="status" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)} // Handle status change
          >
            <option value="OPEN">OPEN</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="ASSIGNED">ASSIGNED</option>
            <option value="CLOSED">CLOSED</option>
            <option value="RESOLVED">RESOLVED</option>
          </select>

          {/* Dropdown to select priority */}
          <label htmlFor="priority">Change Priority:</label>
          <select 
            id="priority" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)} // Handle priority change
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>

          <button onClick={updateTicket}>Update Ticket</button>
        </div>
      ) : (
        <p className="loading">Loading ticket details...</p>
      )}
    </div>
  );
};

export default TicketDetailsPage;
