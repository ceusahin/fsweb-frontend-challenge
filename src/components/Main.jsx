export default function Main() {
  return (
    <>
      <div className="flex flex-row items-center mt-16 mb-9 font-bold">
        <div className="border-r-[100px] border border-[#4338ca]"></div>
        <span className="text-[#4338ca] ml-4">Hakan</span>
      </div>
      <main className="flex justify-between">
        <section className=" w-[60rem]">
          <h1 className="font-bold text-8xl w-[55rem]">
            Creative thinker Minimalism lover
          </h1>
          <p className="w-[46rem] my-12 text-2xl">
            Hi, I&apos;m Hakan. I&apos;m a full-stack developer. If you are
            looking for a Developer who to craft solid and scalable frontend
            products with great user experiences. Lets shake hands with me.
          </p>
          <nav className="flex items-center">
            <a
              href="/"
              className="mr-14 border border-[#3730A3] px-9 py-4 text-white bg-[#3730A3] text-2xl rounded-2xl"
            >
              <button>Hire me</button>
            </a>
            <a
              href="/"
              className="text-[#3730A3] mr-14 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl"
            >
              <button>Github</button>
            </a>
            <a
              href="/"
              className="text-[#3730A3] mr-14 border-[#3730A3] px-9 py-4 border text-2xl rounded-2xl"
            >
              <button>Linkedin</button>
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
