import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fileExplorer from "../../assets/fileExplorer.png";
import wordUtils from "../../assets/wordUtils.png";
import googleDrive from "../../assets/googleDrive.png";
import anime from "../../assets/anime.png";
import KiranCV from "../../assets/KiranCV.pdf";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    // Cleanup function
    return () => {
      tween.kill(); // Kill the animation on unmount
    };
  }, []);

  return (
    <section className="myworks-content" id="myWorks">
      <div className="portfolio">
        <div className="proj-heading">
          <h1 data-aos="flip-up">Portfolio</h1>
        </div>
        <div className="portfolio-content container">
          <div className="racesWrapper">
            <div className="races" ref={racesRef}>
              <div className="proj-1">
                <img src={fileExplorer} alt="" />
                <div className="proj1-details">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-bootstrap"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <h2>File Explorer</h2>
                  <p>Build Using HTML,CSS,Bootstrap,JS,React</p>
                  <button>
                    <a href="https://github.com/Kiran4949/FileExplorer" target="blank">
                      View source <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://file-explorer4.netlify.app/" target="blank">
                      Try it Live <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="proj-2">
                <img src={wordUtils} alt="" />
                <div className="proj2-details">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-bootstrap"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <h2>WordUtils</h2>
                  <p>Build Using HTML,CSS,Bootstrap,JS,React</p>
                  <button>
                    <a href="https://github.com/Kiran4949/WordUtils" target="blank">
                      View source <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://wordutil.netlify.app/" target="blank">
                      Try it Live <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="proj-2">
                <img src={googleDrive} alt="" />
                <div className="proj2-details">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-bootstrap"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <h2>Google Drive Clone</h2>
                  <p>Build Using HTML,CSS,Bootstrap,JS,React</p>
                  <button>
                    <a href="https://github.com/Kiran4949/Google-Drive-Clone" target="blank">
                      View source <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://google-drive-clone4.netlify.app/" target="blank">
                      Try it Live <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="proj-2">
                <img src={anime} alt="" />
                <div className="proj2-details">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <h2>OneTap-Anime</h2>
                  <p>Build Using HTML,CSS,JS,React</p>
                  {/* <button>
                    <a href="https://github.com/Kiran4949/OneTap-Anime" target="blank">
                      View source <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button> */}
                  <button>
                    <a href="https://onetap-anime.vercel.app/" target="blank">
                      Try it Live <i className="fas fa-external-link-alt"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="more-work">
          <p data-aos="slide-right">More</p>
          <p data-aos="slide-left">
            <a href={KiranCV} target="blank" download>
              Download CV <i className="fas fa-download"></i>{" "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
