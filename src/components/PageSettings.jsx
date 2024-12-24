import { useContext } from "react";
import "../styles/PageSettings.css";
import { ThemeContext } from "../contexts/ThemeContext";

function PageSettings() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className="page-settings italic font-bold text-right">
      <h4 onClick={() => toggleTheme()}>
        {theme === "light" ? "dark mode" : "light mode"}
      </h4>
      <h4>|</h4>
      <h4>
        <span className="text-[#3730a3]">TÜRKÇE</span>&apos;YE GEÇ
      </h4>
    </div>
  );
}

export default PageSettings;
