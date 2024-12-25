import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function Main() {
  const { lang } = useContext(LangContext);
  return (
    <>
      <div className="flex flex-row items-center mt-16 mb-9 font-bold">
        <div className="border-r-[100px] border border-[#4338ca]"></div>
        <span className="text-[#4338ca] ml-4">Hakan</span>
      </div>
      <main className="flex justify-between">
        <section className="w-[60rem]">
          <h1 className="font-bold text-8xl w-[55rem]">
            {lang == "tr"
              ? "Özgün Düşünce Etkili Çözümler"
              : "Original Ideas Clear Results"}
          </h1>
          <p className="w-[46rem] my-12 text-2xl">
            {lang == "tr"
              ? "Merhaba, ben Hakan. Full-stack yazılım geliştiricisiyim. Eğer sağlam ve özelleştirilebilir frontend ürünleri tasarlayıp, harika kullanıcı deneyimleri sunabilecek bir geliştirici arıyorsanız, gelin el sıkışalım!"
              : "  Hi, I'm Hakan. I'm a full-stack software developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Lets shake hands with me."}
          </p>
          <nav className="flex items-center">
            <a
              href="/"
              className="w-[13rem] text-center mr-6 border border-[#3730A3] px-12 py-4 text-white bg-[#3730A3] text-2xl rounded-2xl"
            >
              <button>{lang == "tr" ? "Beni kirala" : "Hire me"} </button>
            </a>
            <a
              href="https://github.com/ceusahin"
              className="text-[#3730A3] mr-6 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl"
              target="_blank"
            >
              <button className="flex items-center">
                <i className="fa-brands fa-github fa-xl pr-3" />
                <p>Github</p>
              </button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hakonsahin/"
              className="text-[#3730A3] mr-14 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl"
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
    </>
  );
}
