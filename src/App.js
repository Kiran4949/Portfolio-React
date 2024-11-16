import React, { useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;
