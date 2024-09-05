import React from 'react';

const ManageTickets = () => {
  // You would fetch and display ticket data here
  return (
    <main>
      <h2>Manage Tickets</h2>
      <input type="text" placeholder="Search tickets..." />
      <select>
        <option value="">All Statuses</option>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button>Filter</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render tickets here */}
        </tbody>
      </table>
    </main>
  );
};

export default ManageTickets;
