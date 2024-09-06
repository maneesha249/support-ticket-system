// src/components/AssignTickets.js

import React, { useState, useEffect } from 'react';
import { tickets as initialTickets } from '../AdminPages/MockData'; // Import mock ticket data
import './AssignTickets.css'; // Import the CSS file

const AssignTickets = ({ onAssignPriority, onAssignStatus }) => {
  const [unassignedTickets, setUnassignedTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    filterTickets();
  }, [searchQuery, statusFilter]);

  const filterTickets = () => {
    const filtered = initialTickets.filter(ticket => {
      const matchesSearch = ticket.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === '' || ticket.status === statusFilter;
      return ticket.priority === '' && matchesSearch && matchesStatus;
    });
    setUnassignedTickets(filtered);
  };

  const handlePriorityChange = (ticketId, event) => {
    const priority = event.target.value;
    const updatedTickets = unassignedTickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, priority } : ticket
    );
    setUnassignedTickets(updatedTickets);
    onAssignPriority(ticketId, priority);
  };

  const handleStatusChange = (ticketId, event) => {
    const status = event.target.value;
    const updatedTickets = unassignedTickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, status } : ticket
    );
    setUnassignedTickets(updatedTickets);
    onAssignStatus(ticketId, status);
  };

  return (
    <div>
      <h2>Assign Tickets</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="status-dropdown"
        >
          <option value="">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {unassignedTickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.category}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>
                <select
                  value={ticket.status}
                  onChange={(e) => handleStatusChange(ticket.id, e)}
                  className="status-dropdown"
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td>
                <select
                  value={ticket.priority}
                  onChange={(e) => handlePriorityChange(ticket.id, e)}
                  className="priority-dropdown"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignTickets;
