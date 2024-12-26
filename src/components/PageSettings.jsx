import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LangContext";

function PageSettings() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div className="page-settings italic font-bold text-right dark:text-[#D9D9D9] text-gray-600">
      <h4 className="inline ml-4 cursor-pointer" onClick={() => toggleTheme()}>
        {theme === "light" ? "dark mode" : "light mode"}
      </h4>
      <h4 className="inline ml-4">|</h4>
      <h4 className="inline ml-4 cursor-pointer" onClick={() => toggleLang()}>
        {lang === "eng" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
      </h4>
    </div>
  );
}

export default PageSettings;
