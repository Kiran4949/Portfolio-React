import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 550) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSolid ? "solid" : ""}`}>
      <div className="navbar-container container">
        <div data-aos="slide-right">
          <h1 className="navbar-brand">Kiran Ajnalkar</h1>
        </div>
        <ul className="menu-items" data-aos="slide-left">
          <li>
            <Link to="/" smooth={true} duration={500}>
              Start
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="mySkills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="myWorks" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contactMe" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
