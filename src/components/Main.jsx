import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { Link } from "react-router-dom";
import profilePic from "../media/pp.jpg";

export default function Main() {
  const { lang } = useContext(LangContext);

  return (
    <div className="mx-40 max-500:overflow-x-hidden max-500:mx-6 max-500:w-full">
      <div className="flex flex-row items-center mt-16 mb-9 max-500:mb-16 max-500:mt-10 max-500:w-[22rem] max-500:mx-auto">
        <div className="border-r-[100px] border border-[#4338ca] dark:border-[#B7AAFF]"></div>
        <span className="text-2xl text-[#4338ca] ml-4 dark:text-[#B7AAFF]">
          Hakan Şahin
        </span>
      </div>
      <main className="flex justify-between max-500:flex-col-reverse">
        <section className="w-[60rem] max-500:w-full">
          <h1 className="font-bold text-8xl w-[55rem] dark:text-[#AEBCCF] max-500:text-5xl max-500:w-[22rem] max-500:text-center">
            {lang == "tr" ? "Özgün Düşünce" : "Original Ideas"}
          </h1>
          <br />
          <h1 className="font-bold text-8xl w-[55rem] dark:text-[#AEBCCF] max-500:text-5xl max-500:w-[22rem] max-500:text-center">
            {lang == "tr" ? "Etkili Çözümler" : "Clear Results"}
          </h1>
          <p className="w-[46rem] my-12 text-2xl dark:text-white max-500:w-[22rem] max-500:text-center">
            {lang == "tr"
              ? "Merhaba, ben Hakan. Full-stack yazılım geliştiricisiyim. Eğer sağlam ve özelleştirilebilir frontend ürünleri tasarlayıp, harika kullanıcı deneyimleri sunabilecek bir geliştirici arıyorsanız, gelin el sıkışalım!"
              : "  Hi, I'm Hakan. I'm a full-stack software developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Lets shake hands with me."}
          </p>
          <nav className="flex items-center max-500:flex-wrap max-500:w-[22rem] max-500:mx-0">
            <Link
              to="/contact"
              className="max-500:mt-8 max-500:mr-0 max-500:mb-6 w-[14rem] text-center mr-6 border border-[#3730A3] px-12 py-4 text-white bg-[#3730A3] text-2xl rounded-2xl dark:bg-[#E1E1FF] dark:border-none dark:text-black max-500:w-[26rem]"
            >
              {lang == "tr" ? "Bana Ulaşın" : "Contact Me"}
            </Link>
            <a
              href="https://github.com/ceusahin"
              className="text-[#3730A3] max-500:w-[26rem] max-500:mx-auto mr-6  border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]"
              target="_blank"
            >
              <button className="flex items-center ">
                <i className="fa-brands fa-github fa-xl pr-3 max-500:pl-[4.5rem]" />
                <p>Github</p>
              </button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hakonsahin/"
              className="text-[#3730A3] max-500:mt-6 max-500:w-[26rem] max-500:mx-auto mr-14 max-500:mr-0 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]"
            >
              <button className="flex items-center">
                <i className="fa-brands fa-linkedin-in fa-xl pr-3 max-500:pl-[4.4rem]" />
                <p>Linkedin</p>
              </button>
            </a>
          </nav>
        </section>
        <section className="">
          <img
            className="object-contain rounded-l-3xl w-full h-[28rem] max-500:w-[22rem] max-500:mx-2"
            src={profilePic}
            alt=""
          />
        </section>
      </main>
    </div>
  );
}
