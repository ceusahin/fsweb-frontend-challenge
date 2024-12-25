import { useContext } from "react";
import "../styles/PageSettings.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LangContext";

function PageSettings() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div className="page-settings italic font-bold text-right">
      <h4 onClick={() => toggleTheme()}>
        {theme === "light" ? "dark mode" : "light mode"}
      </h4>
      <h4>|</h4>
      <h4 onClick={() => toggleLang()}>
        {lang === "eng" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
      </h4>
    </div>
  );
}

export default PageSettings;
