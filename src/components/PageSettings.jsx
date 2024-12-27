import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LangContext";
import SwitchButton from "./SwitchButton";

function PageSettings() {
  const { theme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div className="page-settings font-bold dark:text-[#D9D9D9] text-gray-600 mx-40 my-6 flex justify-end items-center max-500:w-[24rem] max-500:mx-auto">
      <SwitchButton />
      <h4 className="inline ml-4 cursor-pointer">
        {theme === "light" ? "dark mode" : "light mode"}
      </h4>
      <h4 className="inline ml-4">|</h4>
      <h4
        className="inline ml-4 cursor-pointer text-[#4731D3] dark:text-[#bab2e7]"
        onClick={() => toggleLang()}
      >
        {lang === "eng" ? "TÜRKÇE" : "ENGLISH"}
      </h4>
    </div>
  );
}

export default PageSettings;
