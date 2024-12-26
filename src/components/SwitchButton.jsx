import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SwitchButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        id="theme-toggle"
        onClick={toggleTheme}
        className="w-12 h-6 flex items-center bg-[#4731D3] dark:bg-[#3A3A3A] rounded-full p-1 cursor-pointer transition"
      >
        <div
          id="theme-icon"
          className="w-4 h-4 bg-yellow-400 rounded-full shadow-md transition transform dark:translate-x-6"
        ></div>
      </button>
    </>
  );
};

export default SwitchButton;
