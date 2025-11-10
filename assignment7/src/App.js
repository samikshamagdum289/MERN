// src/App.js
import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeContext";

function HomePage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🌗 Customizable Theme in React</h1>
      <p>Current theme: <b>{theme}</b></p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"} Mode
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
