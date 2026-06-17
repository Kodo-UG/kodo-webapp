import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

function CtaSection() {
  return (
    <section className="cta-section"
    >
      <div className="cta-container"
        style={{
          width: '100%',
          marginTop: '-380px'
        }}
      >
        <div className="cta-content">
          <h2>Take your next step with Kodo</h2>
          <p>
            Join thousands of students who have found their perfect scholarship match with Kodo.
          </p>
          <Link to="/stepper" className="cta-button-cta">
            Find Scholarships →
          </Link>
        </div>
        <div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2040-uSWaHJsqWq1W4yLVYPL0IPaAwa5GCM.png"
            alt="Students"
            width={800}
            height={400}
            className="cta-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
