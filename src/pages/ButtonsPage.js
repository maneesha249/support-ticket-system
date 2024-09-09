import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ButtonsPage.css';

const ButtonsPage = () => {
  const navigate = useNavigate();
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [username, setUsername] = useState(''); // Store username
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded FAQ item

  // Sample FAQ data
  const faqs = [
    {
      question: 'How can I create a ticket?',
      answer: 'To create a ticket, click the "Create Ticket" button and fill out the necessary details in the form.'
    },
    {
      question: 'How do I delete a ticket?',
      answer: 'To delete a ticket, click the "Delete Ticket" button and select the ticket you want to remove.'
    },
    {
      question: 'Can I edit a ticket once it’s created?',
      answer: 'Yes, you can edit the ticket details by navigating to the ticket details page and clicking the "Edit" button.'
    },
    {
      question: 'What are the different ticket statuses?',
      answer: 'The possible statuses for a ticket are: Open, In Progress, Resolved, and Closed.'
    }
  ];

  // Function to check logged-in user
  const checkLoggedInUser = async () => {
    try {
      const response = await axios.get('http://localhost:7000/checkLoggedInUser', {
        withCredentials: true, // Include credentials for authentication
        headers: {
          'Accept': 'application/json',
        },
      });
      setLoggedInUserId(response.data.id); // Store user ID in state
      setUsername(response.data.username); // Store username in state
      localStorage.setItem('userData', JSON.stringify(response.data)); // Save user details in localStorage
    } catch (error) {
      console.error('Error checking logged-in user:', error);
      // Handle potential errors (e.g., redirect to login if not authorized)
    }
  };

  // Fetch logged-in user when component mounts
  useEffect(() => {
    checkLoggedInUser();
  }, []);

  const handleCreateTicket = () => {
    navigate('/create-ticket', { state: { userData: { id: loggedInUserId, username } } }); // Pass user data as state
  };

  const handleDeleteTicket = () => {
    navigate('/delete-ticket', { state: { userData: { id: loggedInUserId, username } } }); // Pass user data as state
  };

  const handleViewTicketStatus = () => {
    navigate('/view-ticket-status', { state: { userData: { id: loggedInUserId, username } } }); // Navigate to view ticket status page
  };

  const handleEditTicket = () => {
    navigate('/edit-ticket', { state: { userData: { id: loggedInUserId, username } } }); // Navigate to edit ticket page
  };

  // Toggle the expanded FAQ
  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand clicked item
    }
  };

  return (
    <div className="page-container">
      {/* Left Section - Buttons */}
      <h2 className='h1-tage'>Welcome, {username || 'Guest'}!</h2>
      <div className="buttons-container">
       
        <button onClick={handleCreateTicket}>Create Ticket</button>
        <button onClick={handleDeleteTicket}>Delete Ticket</button>
        <button onClick={handleViewTicketStatus}>View Ticket Status</button> {/* New button */}
        <button onClick={handleEditTicket}>Edit Ticket</button> {/* New button */}
      </div>

      {/* Right Section - FAQ */}
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                {faq.question}
                <span>{expandedIndex === index ? '-' : '+'}</span> {/* Toggle symbol */}
              </div>
              {expandedIndex === index && <div className="faq-answer">{faq.answer}</div>} {/* Conditionally render answer */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ButtonsPage;