import { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className={`mx-40 my-6`}>
      <div className="">
        <Header />
        <Main />
        <Skills />
        <hr className="my-16 border-[#BAB2E7]" />
        <Profile />
        <hr className="my-16 border-[#BAB2E7]" />
      </div>
    </div>
  );
}

export default App;
