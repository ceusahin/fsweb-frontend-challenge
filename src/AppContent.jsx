import { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
    <div className="max-500:overflow-x-hidden">
      <Header />
      <Main />
      <Skills />
      <hr className="mx-40 my-16 border-[#BAB2E7]" />
      <Profile />
      <hr className="mx-40 my-16 border-[#BAB2E7]" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
