import React from "react";
import { Play } from "lucide-react";
import "./video.css"; // Import CSS file

export default function VideoSection() {
  const handleClick = () => {
    window.open("https://youtu.be/pxUEaxAH27c?feature=shared", "_blank");
  };

  return (
    <section className="video-video-container"
    >
      <div className="video-video-content">
        <div className="video-video-text">
          <h2 className="video-video-heading">Well, Play Reel</h2>
          <p className="video-video-description">
            Kodo Search reduces the scholarship search process from months to
            minutes by matching students with opportunities made for them.
          </p>
        </div>

        <div className="video-video-wrapper">
          <div className="video-video-thumbnail">
            <img
              src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742425949/Frame_21_ogalts.png"
              alt="Video thumbnail"
              className="video-video-image"
              onClick={handleClick}
              style={{
                cursor: 'pointer'
              }}
            />
            {/* <button
              className="video-video-play-button"
              aria-label="Play video"
            >
              <Play className="video-video-play-icon" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
