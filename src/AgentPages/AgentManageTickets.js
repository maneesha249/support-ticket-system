// ManageTickets.js
import React, { useState } from 'react';
import { tickets as initialTickets } from '../AdminPages/MockData'; // Import mock ticket data

const ManageTickets = ({ priorityAssignedTickets }) => {
  const [filteredTickets, setFilteredTickets] = useState(initialTickets.filter(ticket => ticket.priority !== ''));

  return (
    <main>
      <h2>Manage Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {priorityAssignedTickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.category}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageTickets;
