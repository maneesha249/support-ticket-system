import React, { useState } from 'react';
import { tickets } from './MockData'; // Import mock data

const ManageTickets = () => {
  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange=(e)=>{
    const status=e.target.value;
    setStatusFilter(status);
    filterTickets(searchQuery,status);
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterTickets(query, statusFilter);
  };
  const filterTickets = (query, status) => {
    const filtered = tickets
      .filter(ticket => 
        ticket.status === status || status === '' 
      )
      .filter(ticket => 
        ticket.title.toLowerCase().includes(query.toLowerCase()) ||  
        ticket.description.toLowerCase().includes(query.toLowerCase())
      );
    setFilteredTickets(filtered);
  };


  return (
    <main>
      <h2>Manage Tickets</h2>
      <input type="text" placeholder="Search tickets..." value={searchQuery} onChange={handleSearchChange} />
      <select value={statusFilter} onChange={handleFilterChange}>
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
      <button onClick={() => handleFilterChange({ target: { value: statusFilter } })}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.category}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
              <td>{ticket.assignedTo || 'Unassigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageTickets;
