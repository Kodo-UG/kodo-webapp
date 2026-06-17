import { Play } from "lucide-react";
import React from "react";
import CustomContainer from "./ShredComponents/CustomerContainer";
import FeaturesSection from "./FeaturesSection";
import CtaSection from "./CtaSection";
import Testimonials from "./Testimonials";
import "./videosection.css"; // Importing CSS file
import frame from '../assets/frame.png';

function VideoSection() {
  const handleClick = () => {
    window.open("https://youtu.be/MaOsdLCRQN8?feature=shared", "_blank");
  };

  return (
    <div>
      <section className="video-section">
        <div className="video-section-bg">
          <div className="video-section-img-container">
            <img
              src="https://res.cloudinary.com/dfdswxx7x/image/upload/v1740083635/Kodo-image-2-2wewe_1_1_hm4nbe.png"
              alt="vector"
              className="video-section-img"
              onClick={() => handleClick()}
              style={{
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        <CustomContainer>
          <div className="video-section-content">
            <div className="video-section-text">
              <h2 className='video-header-text'>
                We're Kodo & We're Different</h2>
              <div className="video-section-description">
                <p>
                  Kodo Search reduces the scholarship search process from months
                  to minutes by matching students with opportunities made for
                  them.
                </p>
              </div>
            </div>
            <div className="video-section-video">
              <img
                src={frame}
                alt="Students in classroom"
                className="video-section-video-img"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '-35%'
                }}
              >
                <button className="video-section-play-btn"
                  style={{ cursor: "pointer"}}
                  onClick={handleClick}
                >
                  <Play className="video-section-play-icon" />
                </button>
                <p
                  style={{
                    color: 'white'
                  }}
                >
                  Play reel
                </p>
              </div>
            </div>
            <div className="video-section-image-container">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kodo-image-2%202-Lv1OosmFOfi4RU0BP7E90DWtZZ4p9P.png"
                alt="Student with colorful background"
                className="video-section-main-img"
              />
            </div>
            <div>
              <FeaturesSection />
            </div>
            <div
              style={{
                marginTop: 350
              }}
            >
              <CtaSection />
            </div>
          </div>
        </CustomContainer>
      </section>
        <div>
          <Testimonials />
        </div>
    </div>
  );
}

export default VideoSection;
