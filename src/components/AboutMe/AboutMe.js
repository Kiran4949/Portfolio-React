import React, { useState } from "react";
import myPhoto from "../../assets/myPhoto.png";
import web from "../../assets/web.jpg";
import reactImage from "../../assets/reactImage.jpg";
import ImageModal from "../ImageModal/ImageModal";

function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="about-me" id="about">
      <div className="container">
        <div className="about-content">
          <div className="left-content">
            <div>
              <h1 className="about-heading" data-aos="zoom-out-left">
                About Me
              </h1>
            </div>
            <img src={myPhoto} alt="" data-aos="zoom-out-right" />
            <p data-aos="zoom-in-up">
              Hello! I'm Kiran Ajnalkar, a recent graduate in Computer Science Engineering with a passion for web development. While I completed my B.E. in Computer Science Engineering in 2021, my journey into the world of web development truly began with my decision to pursue additional courses. <br />
              <br />
              I've recently completed courses in{" "}
              <span onClick={() => openModal(web, "Web Development certificate")} style={{ cursor: "pointer", color: "#07374a" }}>
                {" "}
                web development{" "}
              </span>{" "}
              covering HTML, CSS, JavaScript, and{" "}
              <span onClick={() => openModal(reactImage, "React Certificate")} style={{ cursor: "pointer", color: "#07374a" }}>
                {" "}
                React,{" "}
              </span>{" "}
              where I gained hands-on experience in building responsive and interactive web applications. Through these courses, I've not only honed my technical skills but also developed a keen eye for design and user experience. <br />
              <br />
              I'm particularly drawn to the dynamic nature of web development and the endless possibilities it offers in terms of creativity and innovation. My goal is to leverage my education and newfound skills to contribute meaningfully to projects that push the boundaries of what's possible on the web. <br />
              <br />
              I'm excited about the opportunities that lie ahead and eager to continue learning and growing as a developer. Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work!
            </p>
          </div>
        </div>
        <div className="work-arrow">
          <p data-aos="zoom-in-up">
            <a href="#mySkills">
              Check out my Skills <i className="fas fa-arrow-down"></i>
            </a>
          </p>
        </div>
      </div>
      {modalOpen && <ImageModal src={selectedImage.src} alt={selectedImage.alt} closeModal={closeModal} />}
    </section>
  );
}

export default AboutMe;
