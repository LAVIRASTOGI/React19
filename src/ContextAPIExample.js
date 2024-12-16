import React from "react";
import { useTheme } from "./ThemeContext";

function ContextAPIExample() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ContextAPIExample;
