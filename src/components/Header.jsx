import { useContext } from "react";
import PageSettings from "./PageSettings";
import { LangContext } from "../contexts/LangContext";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

function Header() {
  const { lang } = useContext(LangContext);
  return (
    <>
      <PageSettings />
      <div className="flex justify-between items-center my-12 mx-40 max-500:mx-10 max-500:p-0">
        <div className="flex items-center justify-center w-14 h-14 p-3 rounded-full rotate-45 bg-[#EEEBFF] dark:bg-[#4731D3]">
          <span className="text-[#3730a3] text-3xl font-bold dark:text-[#8F88FF]">
            H
          </span>
        </div>
        <div className="font-bold text-xl">
          <NavLink href="#profile">
            {lang == "tr" ? "Profil" : "Profile"}
          </NavLink>
          <NavLink href="#skills">
            {lang == "tr" ? "Yetenekler" : "Skills"}
          </NavLink>
          <NavLink href="#projects">
            {lang == "tr" ? "Projeler" : "Projects"}
          </NavLink>
          <NavLink className="ml-20 max-500:ml-12">
            <Link to="/contact">
              <button className="text-[#3730a3] border border-[#3730a3] py-2 px-8 max-500:px-6 rounded-xl dark:bg-white max-500:hidden">
                {lang == "tr" ? "Bana Ulaşın" : "Contact Me"}
              </button>
            </Link>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
