import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { DataContext } from "../contexts/DataContext";

export default function Projects() {
  const { lang } = useContext(LangContext);
  const { projects } = useContext(DataContext);

  console.log(projects.techs);

  return (
    <div className="mx-40">
      <h1 className="font-bold text-5xl mt-[6rem] dark:text-[#AEBCCF]">
        {lang == "tr" ? "Projeler" : "Projects"}
      </h1>
      <div className="flex flex-row justify-between mt-10 mb-[6rem] flex-wrap gap-20">
        {projects.map((project) => (
          <div className=" w-[27rem] " key={project.id}>
            <img
              src={project.cover}
              alt=""
              className="rounded-[0.3rem] w-[30rem] h-[15rem]"
            />
            <h3 className="text-[#4338ca] font-bold text-3xl mb-8 mt-6 dark:text-[#B7AAFF]">
              {lang == "tr" ? project.title.tr : project.title.en}
            </h3>
            <p className="text-xl dark:text-white mt-[-1rem]">
              {lang == "tr" ? project.description.tr : project.description.en}
            </p>
            <div className="flex flex-row mt-6">
              {Array.isArray(project.techs) &&
                project.techs.map((tech) => (
                  <div
                    key={tech}
                    className="bg-white px-6 py-2 text-[#3730A3] border-2 border-[#3730A3] font-bold rounded-xl text-sm mr-[0.4rem] dark:border-[#8F88FF] dark:text-[#8F88FF] dark:bg-[#383838]"
                  >
                    {tech.tech || tech}
                  </div>
                ))}
            </div>
            <div className="flex flex-row items-end justify-between font-semibold mt-4 text-[#3730A3] dark:text-[#E1E1FF] text-xl">
              <a
                href={project.github}
                target="_blank"
                className="border-b-2 border-[#3730A3] dark:border-[#E1E1FF]"
              >
                Github
              </a>
              <a
                href={project.view}
                target="_blank"
                className="border-b-2 border-[#3730A3] dark:border-[#E1E1FF]"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
