import { createContext, useContext, useEffect, useState } from "react";


const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); 

  
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference !== null) {
      setDarkMode(storedPreference === "true");
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
};


export const useDarkMode = () => useContext(DarkModeContext);
