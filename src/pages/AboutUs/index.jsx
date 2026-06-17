import React from "react";
import "./index.css";
import HeroSection from "../../components/about/HeroSection";
import VideoSection from "../../components/about/VideoSection";
import MissionSection from "../../components/about/MissionSection";
import Experience from "../../components/about/Experience";
import Features from "../../components/about/Features";

export default function About() {
  return (
    <div className="about-container">
      <main className="about-main">
        <div className="bg-white">
          <HeroSection />
        </div>
        <div className="about-about-container">
          <div className="about-about-video-section"
          >
            <VideoSection />
          </div>
          
          <div className="about-about-content-section">
            <div className="about-about-content-box">
              <MissionSection />
              <div className="about-about-experience-section">
                <Experience />
              </div>
            </div>
          </div>
        </div>
        <div className="cutsom-bg">
          <Features />
        </div>
        <div className="about-spacer" />
      </main>
    </div>
  );
}
