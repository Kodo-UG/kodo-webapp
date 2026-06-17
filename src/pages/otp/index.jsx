import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import { BiEnvelope } from "react-icons/bi";
import axiosInstance from "../../api/axiosInstance";
import "../Login/custom.css";
import NavHeader from "../../components/Layout/NavHeader";
import { useMediaQuery } from "@uidotdev/usehooks";
import logologin from '../../assets/logo-login.jpg';
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from 'react-router-dom';

export default function Otp() {
    const [otp, setotp] = useState();
    const [loading,setLoading] = useState(false);
    const location = useLocation();
    const email = location.state?.email;

     const isSm = useMediaQuery("only screen and (max-width : 700px)");
        
    const isMd = useMediaQuery(
            "only screen and (min-width : 700px) and (max-width : 1000px)"
        );
        
    const isLg = useMediaQuery(
            "only screen and (min-width : 1000px)"
        );
    

    const history = useHistory();
    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await axiosInstance.post("/user/verify-otp", {
                email: email,
                otp: otp,
            });
            const data = res.data;
            if (data.statusCode == 200) {
                setLoading(false);
                displaySuccessMessage(
                    `otp verification successfull`
                );
                history.push({
                    pathname: '/changepassword',
                    state: {email}
                })
            } else {
                setLoading(false);
                displayErrorMessage("Password reset");
            }
        } catch (error) {
            displayErrorMessage("Invalid Email or Password");
            setLoading(false);
        }
    };
    return (
        <div>
            <NavHeader />
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
                                  width: isSm ? '90%' : '100%',
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
                                    Verify otp code
                                  </h3>
                                
                                
                                </div>
                                <form className="login-form" onSubmit={handleSubmit}
                                    style={{
                                        width: isSm ? '100%' : isMd ? '50%' : isLg? '30%': '',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div className="form-group">
                                    <input
                                        id="otp"
                                        placeholder="otp code"
                                        value={otp}
                                        onChange={(e) => setotp(e.target.value)}
                                    />
                                    </div>
                                    <button type="submit" className="sign-in-button"
                                        style={{
                                            color: '#1d2855'
                                        }}
                                    >
                                         {loading ? (
                                <span>
                                    <ClipLoader size={20} color="#1d2855" />
                                </span>
                            ) : (
                                <>
                                    verify <span className="arrow">→</span>
                                </>
                            )}
                                    </button>
            
                                    <div className="signup-prompt">
                                    {" "}
                                    <div  className="signup-link"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => history.goBack()}
                                    >
                                        Back to login
                                    </div>
                                    </div>
                                </form>
                              </div>
                            </section>


        </div>
    );
}
