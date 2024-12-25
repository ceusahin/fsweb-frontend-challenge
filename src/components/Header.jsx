import PageSettings from "./PageSettings";

function Header() {
  return (
    <>
      <PageSettings />
      <div className="flex justify-between items-center my-12 ">
        <div className="flex items-center justify-center w-14 h-14 border border-[#3730a3] p-3 rounded-full rotate-45">
          <span className="text-[#3730a3] text-3xl font-bold">H</span>
        </div>
        <div className="font-bold text-xl">
          <a className="ml-20" href="/">
            Skills
          </a>
          <a className="ml-20" href="/">
            Projects
          </a>
          <a className="ml-20" href="/">
            <button className="text-[#3730a3]  border border-[#3730a3] py-2 px-8 rounded-xl">
              Hire me
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
