import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LangContext";
import SwitchButton from "./SwitchButton";

function PageSettings() {
  const { theme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div className="page-settings font-bold text-right dark:text-[#D9D9D9] text-gray-600 mx-40 my-6 flex justify-end items-center">
      <SwitchButton />
      <h4 className="inline ml-4 cursor-pointer">
        {theme === "light" ? "dark mode" : "light mode"}
      </h4>
      <h4 className="inline ml-4">|</h4>
      <h4 className="inline ml-4 cursor-pointer" onClick={() => toggleLang()}>
        {lang === "eng" ? "TÜRKÇE" : "ENGLISH"}
      </h4>
    </div>
  );
}

export default PageSettings;
