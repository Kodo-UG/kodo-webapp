import React from 'react';
import './featuressection.css';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="features-header">
        <h2>Our Best Features</h2>
        <p
            style={{
                paddingLeft: '10px',
                paddingRight: '10px'
            }}
        >We have developed ground-breaking features to help you find and secure scholarships.</p>
      </div>
      <div className="features-grid">
        {[
          {
            title: "Kodo AI",
            color: "feature-box-red",
            icon: icon1,
            description:
              "Our kodo scholarship AI will compare your profile to thousands of active scholarships to create a prioritized list of opportunities. You’ll be able to sort by level effort, due dates and award amount.",
          },
          {
            title: "Expert Support",
            color: "feature-box-yellow",
            icon: icon2,
            description:
              "Experience peace of mind with our extensive all-season support team, providing you with the resources and guidance you need.",
          },
          {
            title: "Application Process",
            color: "feature-box-teal",
            icon: icon3,
            description:
              "Take control of your success with our extensive feature-rich dashboard, to provide you with a comprehensive view of your progress and personalized insights to help you reach your full potential.",
          },
        ].map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className={`feature-icon ${feature.color}`}>
              <img
                src={feature.icon}
                width={25}
                height={25}
                alt="star"
              />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
