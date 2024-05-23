import React from "react";

function Contact() {
  return (
    <div className="contact" id="contactMe">
      <div className="container">
        <div className="contact-content">
          <h2 data-aos="zoom-out-down">Contact Me</h2>
          <p className="mail" data-aos="slide-left">
            Get in touch with me
            <i className="fas fa-arrow-right"></i> kiranajnalkar4949@gmail.com
          </p>
          <p className="mail" data-aos="slide-right">
            Contact number <i className="fas fa-arrow-right"></i> 7972023530, 9130958757
          </p>
          <p className="links" data-aos="zoom-in-up">
            Or find me on:
          </p>
          <p data-aos="slide-right">
            <a href="http://www.linkedin.com/in/kiran-ajnalkar-717175258" target="blank">
              <i className="fab fa-linkedin"> Linkedin</i>
            </a>
          </p>
          <p data-aos="slide-left">
            <a href="https://github.com/Kiran4949" target="blank">
              <i className="fab fa-github"></i> Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
