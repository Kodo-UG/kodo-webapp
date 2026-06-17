import React from "react";
import CustomContainer from "../ShredComponents/CustomerContainer";
import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section"
      style={{
        backgroundColor: 'white'
      }}
    >
      <div className="hero-grid">
        <div className="hero-left"></div>

        {/* Right Image Container */}
        <div className="hero-image-container">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>

          <img
            src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742423909/Group_3_jgmkol.png"
            loading="lazy"
            className="hero-image"
            alt="Student with colorful background"
          />
        </div>

        {/* Hero Text Content */}
        <div className="hero-content"
        >
          <CustomContainer>
            <div className="hero-container-grid">
              <div className="hero-text-content">
                <p className="hero-badge">About Kodo</p>
                <div
                  className='error-fix'
                >
                  <h1 className="hero-title">We&apos;re Kodo & We&apos;re Different</h1>
                  <p className="hero-description">
                    Kodo Scholarships provides a free, up-to-date, comprehensive list of scholarships, grants, and jobs available to international students worldwide. 
                    Our goal is to help you find opportunities for higher education and become agents of development in your own countries and the rest of the world.
                  </p>
                </div>
              </div>
            </div>
          </CustomContainer>
        </div>
      </div>
    </section>
  );
}
