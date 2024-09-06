import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/ProfileMenu.css';

const ProfileMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="profile-menu-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={user?.profilePic}
        alt="Profile"
        className="profile-pic"
      />
      {isOpen && (
        <div className="profile-menu">
          <Link to="/profile" className="profile-menu-item">Profile</Link>
          {/* <Link to="/support-tickets" className="profile-menu-item">Support Tickets</Link> */}
          <Link to="/notifications" className="profile-menu-item">Notifications</Link>
          {/* <Link to="/messages" className="profile-menu-item">Messages</Link> */}
          <Link to="/help" className="profile-menu-item">Help/FAQ</Link>
          {/* <Link to="/settings" className="profile-menu-item">Settings</Link> */}
          <button onClick={logout} className="profile-menu-item">Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
