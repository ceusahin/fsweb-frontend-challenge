import { useContext } from "react";
import PageSettings from "./PageSettings";
import { LangContext } from "../contexts/LangContext";

function Header() {
  const { lang } = useContext(LangContext);
  return (
    <>
      <PageSettings />
      <div className="flex justify-between items-center my-12 mx-40">
        <div className="flex items-center justify-center w-14 h-14 p-3 rounded-full rotate-45 bg-[#EEEBFF] dark:bg-[#4731D3]">
          <span className="text-[#3730a3] text-3xl font-bold dark:text-[#8F88FF]">
            H
          </span>
        </div>
        <div className="font-bold text-xl">
          <a className="ml-20 text-[#6B7280]" href="/">
            {lang == "tr" ? "Yetenekler" : "Skills"}
          </a>
          <a className="ml-20 text-[#6B7280]" href="/">
            {lang == "tr" ? "Projeler" : "Projects"}
          </a>
          <a className="ml-20" href="/">
            <button className="text-[#3730a3]  border border-[#3730a3] py-2 px-8 rounded-xl dark:bg-white">
              {lang == "tr" ? "Bana Ulaşın" : "Contact Me"}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
