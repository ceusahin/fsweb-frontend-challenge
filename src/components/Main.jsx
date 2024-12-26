import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function Main() {
  const { lang } = useContext(LangContext);
  /*
  Original Ideas  Clear Results tkili Çözümler
  */
  return (
    <div className="mx-40">
      <div className="flex flex-row items-center mt-16 mb-9 ">
        <div className="border-r-[100px] border border-[#4338ca] dark:border-[#B7AAFF]"></div>
        <span className="text-2xl text-[#4338ca] ml-4 dark:text-[#B7AAFF]">
          Hakan
        </span>
      </div>
      <main className="flex justify-between">
        <section className="w-[60rem]">
          <h1 className="font-bold text-8xl w-[55rem] dark:text-[#AEBCCF]">
            {lang == "tr" ? "Özgün Düşünce" : "Original Ideas"}
          </h1>
          <br />
          <h1 className="font-bold text-8xl w-[55rem] dark:text-[#AEBCCF]">
            {lang == "tr" ? "Etkili Çözümler" : "Clear Results"}
          </h1>
          <p className="w-[46rem] my-12 text-2xl dark:text-white">
            {lang == "tr"
              ? "Merhaba, ben Hakan. Full-stack yazılım geliştiricisiyim. Eğer sağlam ve özelleştirilebilir frontend ürünleri tasarlayıp, harika kullanıcı deneyimleri sunabilecek bir geliştirici arıyorsanız, gelin el sıkışalım!"
              : "  Hi, I'm Hakan. I'm a full-stack software developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Lets shake hands with me."}
          </p>
          <nav className="flex items-center">
            <a
              href="/"
              className="w-[14rem] text-center mr-6 border border-[#3730A3] px-12 py-4 text-white bg-[#3730A3] text-2xl rounded-2xl dark:bg-[#E1E1FF] dark:border-none dark:text-black"
            >
              <button>{lang == "tr" ? "Bana Ulaşın" : "Contact Me"} </button>
            </a>
            <a
              href="https://github.com/ceusahin"
              className="text-[#3730A3] mr-6 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]"
              target="_blank"
            >
              <button className="flex items-center ">
                <i className="fa-brands fa-github fa-xl pr-3" />
                <p>Github</p>
              </button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hakonsahin/"
              className="text-[#3730A3] mr-14 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]"
            >
              <button className="flex items-center">
                <i className="fa-brands fa-linkedin-in fa-xl pr-3" />
                <p>Linkedin</p>
              </button>
            </a>
          </nav>
        </section>
        <section className="">
          <img
            className="object-contain rounded-l-3xl w-full h-[28rem]"
            src="https://picsum.photos/700/500"
            alt=""
          />
        </section>
      </main>
    </div>
  );
}
