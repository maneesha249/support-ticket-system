import React, { createContext, useState, useContext, useEffect } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: localStorage.getItem('theme') || 'light',
    notifications: {
      email: true,
      inApp: true,
    },
  });

  const updateSettings = (newSettings) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

  useEffect(() => {
    localStorage.setItem('theme', settings.theme);
    document.body.className = settings.theme;
  }, [settings.theme]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => useContext(SettingsContext);

export { SettingsProvider, useSettings };
