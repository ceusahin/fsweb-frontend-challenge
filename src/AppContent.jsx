import { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Axios from "./components/Axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

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

  useEffect(() => {
    toast.success("Hoşgeldiniz!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <ToastContainer
        theme={theme == "dark" ? "light" : "dark"}
        transition={Bounce}
      />
      <Axios />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Skills />
              <hr className="mx-40 my-16 border-[#BAB2E7]" />
              <Profile />
              <hr className="mx-40 my-16 border-[#BAB2E7]" />
              <Projects />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Axios />
    </div>
  );
}

export default App;
