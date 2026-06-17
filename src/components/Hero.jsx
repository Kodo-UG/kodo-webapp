import React from "react";
import CustomContainer from "./ShredComponents/CustomerContainer";
import {Link} from 'react-router-dom';
import './hero.css';
import { useMediaQuery } from "@uidotdev/usehooks";

function HeroSection() {
  const token = localStorage.getItem('token');

  const isSm = useMediaQuery('only screen and (max-width:700px)');
  const isMd = useMediaQuery('only screen and (max-width: 1023px)');
  const isLg = useMediaQuery('onlyscreen and (min-width:1024px)');
  const isXl = useMediaQuery('only screen and (min-width:1280px)');

  return (
    <div className="hero-section"
      style={{
        backgroundColor: '#eeeef7',

      }}
    >
      <CustomContainer>
        <div className="hero-grid"
          style={{
            marginTop: isSm ? '-120px' : isMd ? '-80px' : '-40px'
          }}
        >
          <div className="hero-text-container">
            <h1 className="hero-title">
              Find Life-changing Scholarships made for you
            </h1>
            <p className="hero-description">
              Kodo Scholarships is the #1 college scholarship app in the world 
              and has helped students win more than $1 million dollars
            </p> {
              token ?  <Link to="/scholarships" className="hero-button">
              Find Scholarships →
            </Link> :  <Link to="/stepper" className="hero-button">
              Find Scholarships →
            </Link>
            }
           
          </div>

          <div className="hero-image-container">
            <img
              src="https://res.cloudinary.com/djbzzqgzx/image/upload/v1742437666/Group_5_mgdcro.png"
              alt="Student with books"
              className="hero-image"
              style={{
               
                // marginTop:  isLg ? 60 : isXl ? 40 : ''
              }}
            />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}

export default HeroSection;
