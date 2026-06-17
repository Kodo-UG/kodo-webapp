import React from "react";
import { Card, CardContent } from "./card/card";
import CustomContainer from "./ShredComponents/CustomerContainer";
import { Link } from "react-router-dom";
import "./featuresgrid.css";

function FeaturesGrid() {
  return (
    <div className="features-grid-container"
      style={{
        backgroundColor: '#eeeef7'
      }}
    >
      <CustomContainer>
        <div className="features-grid">
          {[
            {
              title: "Start Your New Career",
              description:
                "Kodo Scholarship is dedicated to creating opportunities for young people in Africa and the rest of the world to pursue their dreams and reach their full potential.",
              isNavy: false,
            },
            {
              title: "Scholarship Programs",
              description:
                "Kodo is the #1 college scholarship web app in the world and has helped students win more than $10 million dollars. Join today and start matching with scholarships in minutes.",
              isNavy: true,
            },
            {
              title: "Career Opportunities",
              description:
                "Looking for a remote job as a developer, customer service rep, recruiter, designer or sales professional? Launch your career with global remote job opportunities",
              isNavy: false,
            },
          ].map((feature, index) => (
            <div key={index} className="card-container">
              <div className={`card-custom ${feature.isNavy ? "card-bg-navy" : "card-bg-white"}`}
                style={{
                  width: '100%',
                  borderRadius: 40
                }}
              >
                <div className="card-content">
                  <div className="card-icon" />
                  <h3 className={`card-title ${feature.isNavy ? "text-white" : "text-gray-900"}`}>
                    {feature.title}
                  </h3>
                  <p 
                    style={{
                      paddingTop: '30px'
                    }}
                  className={`card-text ${feature.isNavy ? "text-white" : "text-gray-600"}`}>
                    {feature.description}
                  </p>
                  <Link to="/blog" className={`card-link ${feature.isNavy ? "card-link-color" : "card-link-color-not"}`}>
                    Read More {
                      !feature.isNavy && <span>→ </span>
                    }
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </div>
  );
}

export default FeaturesGrid;
