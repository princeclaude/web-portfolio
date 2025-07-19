import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const DarkModeContext = createContext();

// Provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // default dark

  // Load from localStorage on first load
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference !== null) {
      setDarkMode(storedPreference === "true");
    }
  }, []);

  // Save preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
};

// Hook
export const useDarkMode = () => useContext(DarkModeContext);
