import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import ProfileMenu from '../components/ProfileMenu';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-container">
          {user ? (
            <div className="profile-menu-container">
              <ProfileMenu />
              {/* <button onClick={logout} className="logout-button">Logout</button> */}
            </div>
          ) : (
            <div>
              <Link to="/login" className="login-link">Login</Link>
              <Link to="/signup/user" className="signup-link">Sign Up</Link>
            </div>
          )}
        </div>
        {user ? (
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/create-ticket">Create Ticket</Link>
            {/* <Link to="/manage-tickets">Manage Tickets</Link> */}
            <Link to="/notifications" className="notifications-link">
              <FontAwesomeIcon icon={faBell} className="notifications-icon" />
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
