import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { LangContext } from "../contexts/LangContext";

export default function Profile() {
  const { profile } = useContext(DataContext);
  const { lang } = useContext(LangContext);

  return (
    <div id="profile" className="mx-40 max-500:mx-4 max-500:overflow-x-hidden">
      <h1 className="font-bold text-5xl mt-[6rem] dark:text-[#AEBCCF] max-500:text-center">
        {lang == "tr" ? "Profil" : "Profile"}
      </h1>
      <section className="mb-[6rem] mt-10 flex justify-between max-500:flex-col">
        <div className="w-[55rem] max-500:w-full">
          <h3 className="text-[#4338ca] font-bold text-3xl mb-6 dark:text-[#B7AAFF] max-500:text-center">
            {lang == "tr" ? "Profil" : "Profile"}
          </h3>
          <div className="flex flex-col gap-4 dark:text-white max-500:px-4 mr-[13rem] max-500:mr-0">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">
                {lang == "tr" ? "Doğum Tarihi" : "Date of Birth"}
              </span>
              <span className="text-xl">{profile.dateOfBirth}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">
                {lang == "tr" ? "Yaşadığı Şehir" : "Location"}
              </span>
              <span className="text-xl">{profile.location}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">
                {lang == "tr" ? "Eğitim Durumu" : "Education"}
              </span>
              <span className="text-xl">
                {lang == "tr" ? profile.education.tr : profile.education.en}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">
                {lang == "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}
              </span>
              <span className="text-xl">{profile.preferredRole}</span>
            </div>
          </div>
        </div>
        <div className="w-[80rem] max-500:w-full max-500:mt-8">
          <h3 className="text-[#4338ca] font-bold text-3xl mb-6 dark:text-[#B7AAFF] max-500:text-center">
            {lang == "tr" ? "Hakkımda" : "About Me"}
          </h3>
          <p className="text-xl dark:text-white max-500:text-center max-500:px-4">
            {lang == "tr" ? profile.about.tr : profile.about.en}
          </p>
        </div>
      </section>
    </div>
  );
}
