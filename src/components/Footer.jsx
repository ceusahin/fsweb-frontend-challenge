import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function Footer() {
  const { lang } = useContext(LangContext);
  return (
    <div className="flex dark:bg-[#141414] bg-[#F9F9F9]">
      <div>
        <h1 className="text-5xl font-bold mb-[5rem] dark:text-[#AEBCCF] w-[42rem] pl-40 mt-[3rem]">
          {lang == "tr"
            ? "Projenizde birlikte çalışmaya ne dersiniz?"
            : "Let's work together on your next product!"}
        </h1>
        <div className="flex items-center space-x-4 dark:text-[#AEBCCF] text-red-800 pl-40 mb-[3rem]">
          <i className="fa-solid fa-arrow-right"></i>
          <a
            href="mailto:hakonsahin@gmail.com"
            className="font-bold text-xl border-b-2 border-red-800 dark:border-[#AEBCCF]"
          >
            hakonsahin@gmail.com
          </a>
        </div>
      </div>
      <div className="flex ml-[40rem] mt-[14rem] gap-12 font-bold">
        <a href="" className="text-black dark:text-[#AEBCCF] ">
          Personal Blog
        </a>
        <a href="" className="text-green-600">
          Github
        </a>
        <a href="" className="text-blue-600">
          Linkedin
        </a>
      </div>
    </div>
  );
}
