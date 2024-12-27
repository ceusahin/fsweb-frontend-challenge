import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function Footer() {
  const { lang } = useContext(LangContext);
  return (
    <div className="flex dark:bg-[#141414] bg-[#F9F9F9] max-500:flex-col max-500:items-center max-500:justify-center">
      <div>
        <h1 className="text-5xl font-bold mb-[5rem] dark:text-[#AEBCCF] w-[42rem] pl-40 mt-[3rem] max-500:w-[28rem] max-500:pl-10 max-500:text-center">
          {lang == "tr"
            ? "Projenizde birlikte çalışmaya ne dersiniz?"
            : "Let's work together on your next product!"}
        </h1>
        <div className="flex items-center space-x-4 dark:text-[#AEBCCF] text-red-800 pl-40 mb-[3rem] max-500:justify-center max-500:pl-0 max-500:w-[31rem]">
          <i className="fa-solid fa-arrow-right"></i>
          <a
            href="mailto:hakonsahin@gmail.com"
            className="font-bold text-xl border-b-2 border-red-800 dark:border-[#AEBCCF]"
          >
            hakonsahin@gmail.com
          </a>
        </div>
      </div>
      <div className="flex ml-[40rem] mt-[14rem] gap-12 font-bold max-500:flex-col max-500:ml-0 max-500:mt-8 max-500:gap-4 max-500:items-center max-500:mb-14">
        <a
          href="https://www.linkedin.com/in/hakonsahin/"
          className="text-black dark:text-[#AEBCCF] "
          target="_blank"
        >
          Personal Blog
        </a>
        <a
          href="https://github.com/ceusahin"
          className="text-green-600"
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/hakonsahin/"
          className="text-blue-600"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
