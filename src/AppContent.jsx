import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Skills from "./components/Skills";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`mx-40 my-6  ${theme}`}>
      <Header />
      <Main />
      <Skills />
      <hr className="my-16 border-[#BAB2E7]" />
    </div>
  );
}

export default App;
