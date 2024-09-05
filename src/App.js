import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CreateTicket from './pages/CreateTicket';
import ManageTickets from './components/ManageTickets';
import UserProfile from './components/UserProfile';
import SearchFilter from './components/SearchFilter';
import Notifications from './components/Notifications';
import AdminPanel from './components/AdminPanel';
import HelpDocumentation from './components/HelpDocumentation';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';
import Settings from './pages/Settings';
import AdminSignup from './pages/AdminSignup';
import './styles/styles.css';

const App = () => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup/user" element={<SignUpPage />} />
            <Route path="/signup/admin" element={<AdminSignup/>}/>
            <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/create-ticket" element={<ProtectedRoute element={<CreateTicket />} />} />
            <Route path="/manage-tickets" element={<ProtectedRoute element={<ManageTickets />} />} />
            <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} />} />
            <Route path="/search" element={<ProtectedRoute element={<SearchFilter />} />} />
            <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} />} />
            <Route path="/admin" element={<ProtectedRoute element={<AdminPanel />} />} />
            <Route path="/help" element={<HelpDocumentation />} />
            <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
          </Routes>
        </Router>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default App;
