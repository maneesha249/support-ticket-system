import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';
import Layout from './components/Layout'; // Import Layout component
import UserDashboard from './components/UserDashboard';
import CreateTicket from './UserPages/CreateTicket';
import AdminSignup from './AdminPages/AdminSignup';
import AdminLogin from './AdminPages/AdminLogin';
import ManageTickets from './AdminPages/ManageTickets';
import AssignTickets from './AgentPages/AssignTickets'; // Uncommented import
import AdminDashboard from './AdminPages/AdminDashboard';
import UserProfile from './components/UserProfile';
import SearchFilter from './components/SearchFilter';
import Notifications from './components/Notifications';
import HelpDocumentation from './components/HelpDocumentation';
import LoginPage from './pages/LoginPage';
import UserSignup from './UserPages/UserSignup';
import ProtectedRoute from './components/ProtectedRoute';
import AgentSignup from './AgentPages/AgentSignup';
import AgentLogin from './AgentPages/AgentLogin';
import AgentManageTickets from './AgentPages/AgentManageTickets';
import AgentDashboard from './AgentPages/AgentDashboard';
import './styles/styles.css';
import AgentRegister from './AgentPages/AgentRegister';
import TicketDetails from './AgentPages/TicketDetails';
import TicketDisplay from './AdminPages/TicketsDisplay';

const App = () => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Router>
          <Routes>
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/signup" element={<UserSignup />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/signup/agent" element={<AgentSignup />} />
            <Route path="/agent/login" element={<AgentLogin />} />
            <Route path="/admin/tickets/details" element={<TicketDisplay />} />
            
            {/* Protected Routes with Layout */}
            <Route path="/" element={<ProtectedRoute element={<Layout><UserDashboard /></Layout>} />} />
            <Route path="/create-ticket" element={<ProtectedRoute element={<Layout><CreateTicket /></Layout>} />} />
            <Route path="/admin/manage-tickets" element={<ProtectedRoute element={<Layout><ManageTickets /></Layout>} />} />
            <Route path="/admin/assign-tickets" element={<ProtectedRoute element={<Layout><AssignTickets /></Layout>} />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute element={<Layout><AdminDashboard/></Layout>} />} />
            <Route path="/profile" element={<ProtectedRoute element={<Layout><UserProfile /></Layout>} />} />
            <Route path="/search" element={<ProtectedRoute element={<Layout><SearchFilter /></Layout>} />} />
            <Route path="/notifications" element={<ProtectedRoute element={<Layout><Notifications /></Layout>} />} />
            <Route path="/help" element={<Layout><HelpDocumentation /></Layout>} />
            
            {/* Agent Routes */}
            <Route path="/agent/dashboard" element={<Layout><AgentDashboard /></Layout>} />
            <Route path="/agent/register" element={<Layout><AgentRegister /></Layout>} />
            <Route path="/tickets/title/:title" element={<TicketDetails />} />

            <Route path="/agent/manage-tickets" element={<Layout><AgentManageTickets /></Layout>} />
            

            <Route path="/agent/assign-tickets" element={<ProtectedRoute element={<Layout><AssignTickets /></Layout>} />} />
          </Routes>
        </Router>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default App;
