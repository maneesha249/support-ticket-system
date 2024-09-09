import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DeleteTicketPage.css'

const DeleteTicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserTickets = async () => {
      try {
        // Retrieve logged-in user ID
        const userResponse = await axios.get('http://localhost:7000/checkLoggedInUser', {
          withCredentials: true
        });
        
        const loggedInUserId = userResponse.data.id;
        console.log('Logged-in user ID:', loggedInUserId); // Debugging

        if (loggedInUserId) {
          // Fetch user's tickets
          const ticketsResponse = await axios.get(`http://localhost:7000/api/tickets/userId/${loggedInUserId}`, {
            withCredentials: true
          });
          console.log('Fetched tickets:', ticketsResponse.data); // Debugging
          setTickets(ticketsResponse.data);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching tickets or checking logged-in user:', error);
        alert('An error occurred while fetching your tickets.');
      }
    };

    fetchUserTickets();
  }, [navigate]);

  const handleDelete = async (ticketId) => {
    try {
      await axios.delete(`http://localhost:7000/api/tickets/delete/${ticketId}`, {
        withCredentials: true
      });
      
      // Remove deleted ticket from state
      setTickets(tickets.filter(ticket => ticket.id !== ticketId));
      alert('Ticket deleted successfully.');
    } catch (error) {
      console.error('Error deleting ticket:', error);
      alert('An error occurred while deleting the ticket.');
    }
  };
  

  return (
    <div className="page-container">
      <h1>Your Tickets</h1>
      <div className="tickets-container">
        {tickets.length === 0 ? (
          <p>No tickets found.</p>
        ) : (
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id} className="ticket-item">
                <span>{ticket.title}</span>
                <button onClick={() => handleDelete(ticket.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DeleteTicketPage;
