import React, { useState } from 'react';

const UpdateTicketForm = ({ ticket, onUpdate }) => {
  const [status, setStatus] = useState(ticket.status);
  const [priority, setPriority] = useState(ticket.priority);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTicket = { ...ticket, status, priority };
    onUpdate(updatedTicket); // Call the update function with the new ticket data
  };

  return (
    <form onSubmit={handleUpdate}>
      <div>
        <label>Status: {ticket.status}</label>
      </div>
      <div>
        <label>Priority: {ticket.priority}</label>
      </div>

      {/* Form for changing status */}
      <div>
        <label>Change Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="CLOSED">CLOSED</option>
          <option value="PENDING">PENDING</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
        </select>
      </div>

      {/* Form for changing priority */}
      <div>
        <label>Change Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
      </div>

      <button type="submit">Update Ticket</button>
    </form>
  );
};

export default UpdateTicketForm;
