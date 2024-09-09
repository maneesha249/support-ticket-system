import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const EditTicketPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticketId, initialDescription } = location.state || {}; 
  const [newDescription, setNewDescription] = useState(initialDescription || ''); 
  const [id, setId] = useState(ticketId || ''); 

  const handleUpdateTicket = async () => {
    try {
      const ticketData = {
        id, 
        description: newDescription,
      };
      console.log(id);

      const response = await axios.put(`http://localhost:7000/api/tickets/${id}`, ticketData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Ticket updated:', response.data);
      alert('Ticket updated successfully!');

      navigate('/view-ticket-status'); 
    } catch (error) {
      console.error('Error updating ticket:', error);
      alert('Failed to update ticket. Please try again.');
    }
  };

  return (
    <div className="edit-ticket-page">
      <h2>Edit Ticket</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateTicket();
      }}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Description:</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            rows="4"
            cols="50"
            required
          />
        </div>
        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default EditTicketPage;
