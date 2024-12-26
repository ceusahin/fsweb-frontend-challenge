/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const LangContext = createContext();

export function LangContextProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "tr"
  );

  function toggleLang() {
    let newLang = lang === "tr" ? "eng" : "tr";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }

  // console.log("LangContextProvider çalıştı");
  // console.log("language:", lang);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
