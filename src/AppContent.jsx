import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`mx-40 my-6  ${theme}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
