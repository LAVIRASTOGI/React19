import React, { createContext, useState, useContext } from "react";

// Create ThemeContext
export const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

// Custom Hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
