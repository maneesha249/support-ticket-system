// src/api/ticketApi.js

const API_URL = 'https://your-api-endpoint.com'; // Replace with your actual API URL

export const fetchTickets = async (status = '') => {
  const response = await fetch(`${API_URL}/tickets?status=${status}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tickets');
  }
  return response.json();
};

export const updateTicketStatus = async (id, newStatus) => {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: newStatus }),
  });
  if (!response.ok) {
    throw new Error('Failed to update ticket status');
  }
  return response.json();
};

export const fetchAgents = async () => {
  const response = await fetch(`${API_URL}/agents`);
  if (!response.ok) {
    throw new Error('Failed to fetch agents');
  }
  return response.json();
};

export const assignTicketToAgent = async (ticketId, agentId) => {
  const response = await fetch(`${API_URL}/tickets/${ticketId}/assign`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ agentId }),
  });
  if (!response.ok) {
    throw new Error('Failed to assign ticket to agent');
  }
  return response.json();
};
