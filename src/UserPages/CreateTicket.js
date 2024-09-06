import React, { useState } from 'react';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('technical');
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main>
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          required
        ></textarea>
        
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="technical">Technical</option>
          <option value="billing">Billing</option>
          <option value="general">General</option>
        </select>
        
        <label htmlFor="attachment">Attach File:</label>
        <input
          type="file"
          id="attachment"
          onChange={(e) => setAttachment(e.target.files[0])}
        />
        
        <button type="submit">Submit Ticket</button>
      </form>
    </main>
  );
};

export default CreateTicket;
