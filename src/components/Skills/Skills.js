import React from "react";

function Skills() {
  return (
    <section className="skills-content" id="mySkills">
      <div className="skills">
        <div>
          <h1 className="skills-heading" data-aos="zoom-in-up">
            My Skills
          </h1>
        </div>
        <div className="skills-bar" data-aos="zoom-in-up">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line">
              <span className="html"></span>
            </div>
            <div className="bar">
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line">
                <span className="css"></span>
              </div>
              <div className="bar">
                <div className="info">
                  <span>BOOTSTRAP</span>
                </div>
                <div className="progress-line">
                  <span className="bootstrap"></span>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div className="progress-line">
                    <span className="javascript"></span>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>REACT JS</span>
                    </div>
                    <div className="progress-line">
                      <span className="react"></span>
                    </div>
                    <div className="bar">
                      <div className="info">
                        <span>GIT</span>
                      </div>
                      <div className="progress-line">
                        <span className="git"></span>
                      </div>

                      <div className="bar">
                        <div className="info">
                          <span>GITHUB</span>
                        </div>
                        <div className="progress-line">
                          <span className="github"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="work-arrow-1">
            <p data-aos="zoom-in-up">
              <a href="#myWorks">
                Check out my work <i className="fas fa-arrow-down"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
