import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const App = () => {
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [username, setUsername] = useState('');
    const [tickets, setTickets] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        checkLoggedInUser();
    }, []);

    const checkLoggedInUser = async () => {
        try {
            const response = await axios.get('http://localhost:7000/checkLoggedInUser', {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                },
            });
            setLoggedInUserId(response.data.id);
            setUsername(response.data.username);
            localStorage.setItem('userData', JSON.stringify(response.data));
            fetchTicketsByUserId(response.data.id);
        } catch (error) {
            console.error('Error checking logged-in user:', error);
        }
    };

    const fetchTicketsByUserId = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:7000/api/tickets/userId/${userId}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            setTickets(response.data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    const filterTickets = (status) => {
        setFilter(status);
        if (status === 'all') {
            setFilteredTickets(tickets);
        } else {
            const filtered = tickets.filter(ticket => ticket.status === status);
            setFilteredTickets(filtered);
        }
    };

    const getStatusDistribution = () => {
        const statusCounts = tickets.reduce((acc, ticket) => {
            acc[ticket.status] = (acc[ticket.status] || 0) + 1;
            return acc;
        }, {});

        return {
            labels: Object.keys(statusCounts),
            datasets: [
                {
                    label: 'Ticket Status Distribution',
                    data: Object.values(statusCounts),
                    backgroundColor: [
                        'rgba(0, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                    ],
                },
            ],
        };
    };

    return (
        <div>
            <div style={{ backgroundColor: '#007bff', padding: '10px', color: '#fff', display: 'flex', justifyContent: 'space-around' }}>
                <button onClick={() => filterTickets('OPEN')}>Open Tickets</button>
                <button onClick={() => filterTickets('RESOLVED')}>Resolved Tickets</button>
                <button onClick={() => filterTickets('CLOSED')}>Closed Tickets</button>
                <button onClick={() => filterTickets('all')}>All Tickets</button>
            </div>

            <div style={{ padding: '20px' }}>
                {filter === 'all' && (
                    <div style={{ width: '50%', height: '50%', margin: '0 auto' }}>
                        <Pie data={getStatusDistribution()} />
                    </div>
                )}

                {filteredTickets.length > 0 ? (
                    filteredTickets.map(ticket => (
                        <div key={ticket.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
                                <h3>Ticket name: {ticket.title}</h3>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
                                <h4>Status: {ticket.status}</h4>
                            </div>
                        </div>
                    ))
                ) : (
                    filter !== 'all' && <p>No tickets available </p>
                )}
            </div>
        </div>
    );
};

export default App;
