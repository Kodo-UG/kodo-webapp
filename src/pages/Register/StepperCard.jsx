import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logologin from '../../assets/logo-login.jpg'
import './stepper.css';
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineBriefcase } from "react-icons/hi2";
import Scholarship from './../Dashboard/scholarship/Scholarship';

function StepperCard({ list }) {

  const isSm = useMediaQuery("only screen and (max-width : 700px)");

  const isMd = useMediaQuery(
    "only screen and (min-width : 700px) and (max-width : 1250px)"
  );

  const isLg = useMediaQuery(
    "only screen and (min-width : 1250px) and (max-width : 1300px)"
  );

  return (
    <section
      style={{
        height: 'auto'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          width: isSm ? '90%' : '70%',
        }}
      >
        <div
           style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src={logologin}
            width={100}
            height={100}
          />
          <h3
            style={{
              color: '#1d2855',
              fontSize: 40,
              fontWeight: 'bold',
            }}
          >
            Welcome Back!
          </h3>
        
          <div
           style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
         <div
             style={{
              display: 'flex',
              flexDirection: isSm ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 30,
              marginTop: 60
            }}
         >
          <div
            style={{
              borderRadius: 20
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: '#EEEEF7',
                borderRadius: 20,
                padding: 15,
                paddingBottom: 20,
                
              }}
            >
              <div
                style={{
                  backgroundColor: '#FF7648',
                  padding: 15,
                  width: '20%',
                  marginLeft: '38%',
                  borderRadius: 17,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <PiGraduationCap 
                  size={25}
                  style={{
                    color: '#ffffff'
                  }}
                />
              </div>
              <h3 
                style={{
                  textAlign: 'center',
                  marginTop: 15,
                  marginBottom: 15
                }}
              >Scholarships</h3>
              <p
                style={{
                  color: '#1d2855',
                  textAlign: 'center'
                }}
              >We’ve helped students win more than $10 million dollars in scholarships.</p>
              <div className=""
                style={{
                  marginLeft: '30%'
                }}
              >
                  <Link  to={{ pathname: "/signin", state: { ref: "scholarships" } }} className="mobile-cta-button">
                      Login →
                  </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: 20,
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: '#EEEEF7',
                borderRadius: 20,
                paddingTop: 15,
                paddingBottom: 15,
                
              }}
            >
              <div
                style={{
                  backgroundColor: '#8F98FF',
                  padding: 15,
                  width: '20%',
                  marginLeft: '38%',
                  borderRadius: 17,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              > 
                <HiOutlineBriefcase
                  size={25}
                  style={{
                    color: '#ffffff'
                  }}
                />
              </div>
              <h3 
                style={{
                  textAlign: 'center',
                  marginTop: 15,
                  marginBottom: 20
                }}
              >Jobs</h3>
              <p
                style={{
                  color: '#1d2855',
                  textAlign: 'center'
                }}
              >Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo</p>
              <div className=""
                style={{
                  marginLeft: '30%'
                }}
              >
                  <Link  to={{ pathname: "/signin", state: { ref: "job" } }} className="mobile-cta-button">
                      Login →
                  </Link>
              </div>
            </div>
          </div>


         </div>
        </div>
        </div>
       

      </div>
    </section>
  );
}

export default StepperCard;
