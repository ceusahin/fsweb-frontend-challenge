import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { DataContext } from "../contexts/DataContext";

export default function Projects() {
  const { lang } = useContext(LangContext);
  const { projects } = useContext(DataContext);

  console.log(projects.techs);

  return (
    <>
      <h1 className="font-bold text-5xl mt-[6rem] dark:text-[#AEBCCF]">
        {lang == "tr" ? "Projeler" : "Projects"}
      </h1>
      <div className="flex flex-row mt-10 mb-[6rem] flex-wrap gap-20">
        {projects.map((project) => (
          <div className=" w-[29rem] " key={project.id}>
            <img src="" alt="" />
            <h3 className="text-[#4338ca] font-bold text-3xl mb-8 dark:text-[#B7AAFF]">
              {lang == "tr" ? project.title.tr : project.title.en}
            </h3>
            <p className="text-xl dark:text-white">
              {lang == "tr" ? project.description.tr : project.description.en}
            </p>
            <div className="flex flex-row mt-8">
              {Array.isArray(project.techs) &&
                project.techs.map((tech) => (
                  <div
                    key={tech}
                    className="bg-[#4338ca] px-4 py-2 text-white rounded-full text-sm mr-2 dark:bg-[#B7AAFF]"
                  >
                    {tech.tech || tech}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
