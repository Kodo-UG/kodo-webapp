import React from 'react';
import '../featuressection.css';
import FindScholarships from './FindScholarships';

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="features-header">
        <h2>What we’re all about</h2>
        <p
            style={{
                paddingLeft: '10px',
                paddingRight: '10px'
            }}
        >Kodo Search reduces the scholarship search process from months to minutes by matching students with opportunities made them.</p>
      </div>
      <div className="features-grid"
      >
        {[
          {
            title: "Kodo AI",
            color: "feature-box-red",
            description:
              "AI-powered scholarship matching tailored to your profile and preferences.",
          },
          {
            title: "Expert Support",
            color: "feature-box-yellow",
            description:
              "Get guidance from our team of scholarship and education experts.",
          },
          {
            title: "Application Process",
            color: "feature-box-teal",
            description:
              "Streamlined application system to help you apply efficiently.",
          },
        ].map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className={`feature-icon ${feature.color}`}>
              <img
                src="https://res.cloudinary.com/dfdswxx7x/image/upload/v1740085647/mingcute_ai-line_xwgbqs.png"
                width={60}
                height={60}
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
      <FindScholarships />
    </div>
  );
}

export default FeaturesSection;
