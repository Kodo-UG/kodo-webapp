import React from "react";
import "./scholarship.css";
import { Link } from "react-router-dom";

export function ScholarshipCard({ data}) {
 const token = localStorage.getItem('token');

//  const handleRoute = () => {
//   if(token){
//     history('/schloars')
//   } else {
//     history('/signin')
//   }
//  }

  return (
    <div className="scholarship-card">
      <div className="scholarship-content">
        <h3 className="scholarship-title">{data.title}</h3>
        <p className="scholarship-description">{data.about}</p>
        <div className="scholarship-info">
          <div className="scholarship-due">
            <span>Due:</span>
            <span>
              {new Date(data.deadline).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}</span>
          </div>
          <div className="scholarship-award">
            <span>Award</span>
            <p>{data.award}</p>
          </div>
        </div>
      </div>
      <div className="scholarship-buttons">
      {
          token ? <Link to={data.link} className="scholarship-save-btn"
            style={{
              backgroundColor: '#ffffff',
              color: '#1d2855',
              paddingTop: 5
            }}
          >
            Save
          </Link> : <Link to={'/stepper'} className="scholarship-save-btn"
            style={{
              backgroundColor: '#ffffff',
              color: '#1d2855',
              paddingTop: 5
            }}
          >
            Save
          </Link>
        }
        {
          token ? <Link to={'/scholars'} className="scholarship-apply-btn">
            Apply Now → 
          </Link> : <Link to={'/stepper'} className="scholarship-apply-btn">
            Apply Now →
          </Link>
        }
        {/* <button className="scholarship-apply-btn"
          onClick={handleRoute}
        >Apply Now →</button> */}
      </div>
    </div>
  );
}
