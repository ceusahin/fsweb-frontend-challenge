import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { LangContext } from "../contexts/LangContext";

export default function Skills() {
  const { lang } = useContext(LangContext);
  const { skills } = useContext(DataContext);
  // console.log(skills);
  return (
    <div id="skills" className="mx-40 max-500:mx-10 max-500:text-center">
      <h1 className="font-bold text-5xl mt-[14rem] dark:text-[#AEBCCF]">
        {lang == "tr" ? "Yetenekler" : "Skills"}
      </h1>
      <div className="flex flex-row mt-10 mb-20 justify-between flex-wrap gap-20">
        {skills.map((skill) => (
          <div className=" w-[29rem] " key={skill.id}>
            <h3 className="text-[#4338ca] font-bold text-3xl mb-8 dark:text-[#B7AAFF]">
              {skill.title}
            </h3>
            <p className="text-xl dark:text-white">
              {lang == "tr" ? skill.description.tr : skill.description.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
