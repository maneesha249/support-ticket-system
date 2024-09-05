import React, { useState, useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';
import '../styles/Settings.css';

const Settings = () => {
  const { settings, updateSettings } = useSettings();
  const [profileInfo, setProfileInfo] = useState({ name: '', email: '' });
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(settings.notifications);
  const [theme, setTheme] = useState(settings.theme);

  useEffect(() => {
    setNotifications(settings.notifications);
    setTheme(settings.theme);
  }, [settings]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profileInfo);
    // Add logic to update profile in the backend or context
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log('Password changed:', password);
    // Add logic to change password
  };

  const handleNotificationChange = () => {
    updateSettings({ notifications });
    console.log('Notifications updated:', notifications);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    updateSettings({ theme: newTheme });
    console.log('Theme changed to:', newTheme);
  };

  return (
    <div className="settings-container">
      {/* <h1>Settings</h1> */}

      <section className="settings-section">
        <h2>Account Settings</h2>
        <div className="settings-item">
          <h3>Profile Information</h3>
          <form onSubmit={handleProfileUpdate}>
            <label>
              Name:
              <input
                type="text"
                value={profileInfo.name}
                onChange={(e) => setProfileInfo({ ...profileInfo, name: e.target.value })}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={profileInfo.email}
                onChange={(e) => setProfileInfo({ ...profileInfo, email: e.target.value })}
                required
              />
            </label>
            <button type="submit">Update Profile</button>
          </form>
        </div>

        <div className="settings-item">
          <h3>Change Password</h3>
          <form onSubmit={handlePasswordChange}>
            <label>
              New Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Change Password</button>
          </form>
        </div>
      </section>
      <section className="settings-section">
        <h2>Appearance</h2>
        <div className="settings-item">
          <label>
            <input
              type="radio"
              value="light"
              checked={theme === 'light'}
              onChange={() => handleThemeChange('light')}
            />
            Light Mode
          </label>
          <label>
            <input
              type="radio"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => handleThemeChange('dark')}
            />
            Dark Mode
          </label>
        </div>
      </section>
    </div>
  );
};

export default Settings;
