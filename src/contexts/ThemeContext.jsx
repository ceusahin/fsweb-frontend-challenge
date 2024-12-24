/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  console.log("ThemeContextProvider çalıştı");
  console.log("theme:", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
