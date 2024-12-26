import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { LangContext } from "../contexts/LangContext";

export default function Profile() {
  const { profile } = useContext(DataContext);
  const { lang } = useContext(LangContext);
  return (
    <div className="mx-40">
      <h1 className="font-bold text-5xl mt-[6rem] dark:text-[#AEBCCF]">
        {lang == "tr" ? "Profil" : "Profile"}
      </h1>
      <section className="mb-[6rem] mt-10 flex justify-between">
        <div className="w-[55rem]">
          <h3 className="text-[#4338ca] font-bold text-3xl mb-6 dark:text-[#B7AAFF]">
            {lang == "tr" ? "Profil" : "Profile"}
          </h3>
          <div className="flex gap-16 dark:text-white">
            <div id="titles" className="font-bold text-xl leading-9">
              <h4>{lang == "tr" ? "Doğum Tarihi" : "Date of Birth"}</h4>
              <h4>{lang == "tr" ? "Yaşadığı Şehir" : "Location"}</h4>
              <h4>{lang == "tr" ? "Eğitim Durumu" : "Education"}</h4>
              <h4>{lang == "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}</h4>
            </div>
            <div id="user-infos" className="text-xl leading-9">
              <h4>{profile.dateOfBirth}</h4>
              <h4>{profile.location}</h4>
              <h4>
                {lang == "tr" ? profile.education.tr : profile.education.en}
              </h4>
              <h4>{profile.preferredRole}</h4>
            </div>
          </div>
        </div>
        <div className="w-[65rem]">
          <h3 className="text-[#4338ca] font-bold text-3xl mb-6 dark:text-[#B7AAFF]">
            {lang == "tr" ? "Hakkımda" : "About Me"}
          </h3>
          <p className="text-xl dark:text-white">
            {lang == "tr" ? profile.about.tr : profile.about.en}
          </p>
        </div>
      </section>
    </div>
  );
}
