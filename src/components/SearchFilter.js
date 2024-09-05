import React from 'react';

const SearchFilter = () => {
  return (
    <main>
      <h2>Search Tickets</h2>
      <input type="text" placeholder="Search tickets..." />
      <select>
        <option value="">All Statuses</option>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button>Search & Filter</button>
    </main>
  );
};

export default SearchFilter;
