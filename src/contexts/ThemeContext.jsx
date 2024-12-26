/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const html = document.documentElement;
  const body = document.body;
  body.classList.add("dark:bg-[#252128]");

  function toggleTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  // console.log("ThemeContextProvider çalıştı");
  // console.log("theme:", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
