// src/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme and apply to <body>
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // Toggle Light / Dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
