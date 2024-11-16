import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="home-content" id="/">
        <div className="name">
          <h1> I'm</h1>
          <h1>Hi, I'm Kiran Ajnalkar</h1>
          <h1 className="typewrite">
            <Typewriter
              options={{
                strings: ["A Front-End Developer", "A Web Developer"],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(100).start();
              }}
            />
          </h1>
        </div>
        <div className="angle-down-icon" data-aos="zoom-in-up">
          <a href="#about">
            <i className="fas fa-angle-down"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
