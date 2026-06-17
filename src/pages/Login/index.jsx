import React, { useState } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiEnvelope } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import NavHeader from "../../components/Layout/NavHeader";
import { useMediaQuery } from "@uidotdev/usehooks";
import logologin from '../../assets/logo-login.jpg';
import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";
import { BASE_URL } from "../../constants/api";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const location = useLocation();
    const ref = location.state?.ref;
    console.log(`ref: ${ref}`);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const history = useHistory();

    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    };

     const isSm = useMediaQuery("only screen and (max-width : 700px)");
    
      const isMd = useMediaQuery(
        "only screen and (min-width : 700px) and (max-width : 1000px)"
      );
    
      const isLg = useMediaQuery(
        "only screen and (min-width : 1000px)"
      );

    const inputStyles = {
        borderRadius: "0",
        minHeight: "40px",
        WebkitBoxShadow: "none",
        boxShadow: "none",
        border: "0",
        padding: "10px 30px 10px 0",
        color: "#111111",
        backgroundColor: "#ffffff",
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password,
            });

            if (data) setMessage(data?.data?.message);
            localStorage.setItem("userID", data.data.user._id);

            if (data.status === 201) {
                console.log(data.data.user, "am");
                localStorage.setItem("userData", JSON.stringify(data.data));
                displaySuccessMessage("Login successful");
                localStorage.setItem("token", data.data.token);
                setModalOpen(true);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
                
                history.push("/scholars");
            } else {
                displayErrorMessage(message);
            }
        } catch (error) {
            displayErrorMessage(message);
        } finally {
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
                        Login
                      </h3>
                    
                    
                    </div>
                    <form className="login-form" onSubmit={handleLogin}
                        style={{
                            width: isSm ? '100%' : isMd ? '50%' : isLg? '30%': '',
                            marginTop: '50px'
                        }}
                    >
                        <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>

                        <div className="form-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                            <span>⋯</span>
                        </button>
                        </div>

                        <div className="forgot-password">
                        <Link to="/forgot/password">Forgot password?</Link>
                        </div>

                        <button 
                            type="submit" 
                            className="sign-in-button"
                            style={{ color: '#1d2855' }}
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? (
                                <span>
                                    <ClipLoader size={20} color="#1d2855" />
                                </span>
                            ) : (
                                <>
                                    Sign in <span className="arrow"
                                      style={{
                                        marginBottom: 6,
                                        marginLeft: 5
                                      }}
                                    >→</span>
                                </>
                            )}
                        </button>

                        <div className="signup-prompt">
                        Don't have an account?{" "}
                        {
                          ref == 'job' ?  <Link to="/jobStep1" className="signup-link">
                          Sign up!
                      </Link> :  <Link to="/stepper" className="signup-link">
                            Sign up!
                        </Link>
                        }
                        </div>
                    </form>
                  </div>
                </section>
           
       </div>
    );
}
