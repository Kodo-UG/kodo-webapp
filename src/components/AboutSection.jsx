import React from "react";
import CustomContainer from "./ShredComponents/CustomerContainer";
import { Link } from "react-router-dom";
import "./aboutsection.css";

function AboutSection() {
  const handleClick = () => {
    window.open("https://youtu.be/MaOsdLCRQN8?feature=shared", "_blank");
  };

  return (
    <section className="about-section-container">
      <div className="about-section-bg" />
      <div className="about-section-content">
        <CustomContainer>
          <div className="about-section-box">
            <div className="about-section">
              <div className="about-section-grid">
                <div className="about-section-text">
                  <div 
                    style={{
                      width: '100%'
                    }}
                  >
                    <h2 className="about-section-title"
                      // style={{
                      //   fontSize: 33
                      // }}
                    >
                      A Few Words About Kodo Scholarships
                    </h2>
                    <p className="about-section-description">
                      We take the hassle out of the scholarship search process
                      and increase your chances of matching you with
                      scholarships in minutes.
                    </p>
                    <div className="about-section-button-container">
                      <Link to="/aboutus" className="about-section-button">
                        More about us →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="about-section-image-container">
                  <div className="about-section-image-wrapper">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2019-hIg5D8v9tEtohw2PxOGvTeNQAziP7d.png"
                      alt="Student"
                      width={300}
                      height={400}
                      className="about-section-image"
                      onClick={handleClick}
                    />
                    <div className="about-section-experience">
                      <a href="#">
                        <span>
                          25 <span className="text-4xl font-semibold">+</span>
                        </span>
                        <br />
                        <span className="subtext">Years Of Experience</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
}

export default AboutSection;
