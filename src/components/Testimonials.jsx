import React from 'react';
import CustomContainer from './ShredComponents/CustomerContainer';
import { data } from '../data/homeData';
import './testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <CustomContainer>
        <div className="testimonials-container">
          <h2 className="testimonials-heading">Don't take our word for it</h2>
          <p className="testimonials-subtext">
            We’ve supported so many students on their path to a degree.
            <br /> Their stories inspire what we do every day.
          </p>
          <div className="testimonials-grid">
            {data.map((d, i) => (
              <div key={i} className="testimonial-card"
                style={{
                  backgroundColor: `${d.color}`
                }}
              >
                <div className="testimonial-content">
                  <img
                    src="https://res.cloudinary.com/dfdswxx7x/image/upload/v1740086145/h0edbkykpylvisrmbzvg.png"
                    alt="quotes"
                    className="testimonial-quote-icon"
                    width={35}
                    height={35}
                  />
                  <p className="testimonial-description">{d.description}</p>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      <img 
                        src={d.image}
                        width={100}
                        height={100}
                        className="testimonial-avatar-img"
                        alt="Scholarship student"
                        style={{
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                    <div>
                      <p className="testimonial-name">{d.name}</p>
                      <p className="testimonial-school">{d.school}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}

export default Testimonials;
