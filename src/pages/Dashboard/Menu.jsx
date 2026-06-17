import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
import { clearJobData } from "../../toolkit/jobReducer";
import { clearFormData } from "../../toolkit/formReducer";
import logo  from '../../assets/logo.png'
import './menustyle.css';
import { PiGraduationCap } from "react-icons/pi";

const Menu = ({ setShowContent }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [data, setData] = useState();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const history = useHistory();
    const queryClient = useQueryClient(); // Get the queryClient instance
    const dispatch = useDispatch();
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    const handleActive = (buttonName) => {
        setActiveButton(buttonName);
    };

    const isButtonActive = (buttonName) => {
        return activeButton === buttonName;
    };

    // const fetchNotifications = async () => {
    //     let res = await axios.get(
    //         "https://api.kodoscholarship.com/api/v1/user/notifications",
    //         config
    //     );

    //     console.log('hiiiii')
    //     console.log(res.data.data);
    //     setData(res.data.data);
    // };

    // useEffect(() => {
    //     fetchNotifications();
    // }, []);

    const myStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    };

    const pStyle = {
        color: "#1d2855",
        fontWeight: "bold",
        // padding: ".9rem",
        marginLeft: "4px"
    };

    const bpstyle = {
        color: "#ffffff",
        fontWeight: "bold",
        // padding: ".9rem",
        marginLeft: "4px"
    }

    const iconstyle = {
        color: '#ffffff'
    }

    const bstyle={
        backgroundColor: '#00D6DD',
        color: '#ffffff',
        padding: 10
    }

    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        localStorage.removeItem("refer");
        localStorage.setItem("modal2Open", "true");
        dispatch(clearScholarships());
        dispatch(clearFormData());
        dispatch(clearJobData());
        queryClient.clear();
        history.push("/login");
    };
    return (
        <div>
            <div>
                <aside
                    className={`main-sidebar sidebar-dark-primary elevation-4  ${!sidebarVisible ? "sidebar-closed" : ""
                        }`}
                    style={{ backgroundColor: "#ffffff" }}
                >
                    <div className="" style={myStyle}>
                        <div
                            className="bg-primar"
                            style={{ height: "100%", width: "100%" }}
                        >
                            <div
                                className="brand-link "
                                style={{
                                    ...myStyle,
                                    height: "50px",
                                }}
                            >
                                <Link to="/">
                                    <img
                                        style={{
                                            width: "6rem",
                                            height: "6rem",
                                            objectFit: "contain",
                                            marginLeft: "-.1rem",
                                        }}
                                        src={logo}
                                        alt="kodo Logo"
                                        className="brand-imag"
                                    />
                                </Link>
                                <div
                                    className=""
                                    style={{
                                        height: "40px",
                                        width: "40%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "end"
                                    }}
                                    data-widget="pushmenu"
                                >
                                    {" "}
                                    {isSmallDevice ? (
                                        <BsArrowLeft
                                            size={20}
                                            style={{ color: "red" }}
                                        />
                                    ) : null}
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: "#ffffff"}}
                        className="sidebar"
                    >
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 15
                                }}
                            >
                                <li
                                    className="nav-item "
                                    onClick={() => setShowContent(0)}
                                    data-widget="pushmenu"
                                    style={{
                                    
                                    }}
                                >
                                    <Link
                                        onClick={() =>
                                            handleActive("scholarships")
                                        }
                                        to="/scholars"
                                        className="nav-link"
                                        style={isButtonActive("scholarships") ? bstyle : {}}
                                    >
                                        
                                        <i
                                            className="far fa-graduation-cap"
                                            aria-hidden="true"
                                            style={{
                                                color: isButtonActive("scholarships") ? "#ffffff" : "#1d2855",
                                                marginRight: 20,
                                                fontSize: 16
                                            }}
                                        ></i>{" "}
                                        <p style={isButtonActive("scholarships") ? bpstyle : pStyle}>
                                            Dashboard
                                            {data?.length > 0 ? (
                                                <span className="right badge badge-danger">
                                                    New
                                                </span>
                                            ) : null}
                                        </p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(0)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() =>
                                            handleActive("dashboard")
                                        }
                                        to="/scholars"
                                        className={`nav-link`}
                                        style={isButtonActive("dashboard") ? bstyle : {}}
                                    >
                                        <i
                                            className="far fa-trophy"
                                            aria-hidden="true"
                                            style={{
                                                color: isButtonActive("dashboard") ? "#ffffff" : "#1d2855",
                                                marginRight: 20,
                                                fontSize: 16
                                            }}
                                        ></i>{" "}
                                        <p style={isButtonActive("dashboard") ? bpstyle : pStyle}>
                                            Matched Scholarship
                                        </p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(1)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() =>
                                            handleActive("favorites")
                                        }
                                        to="/scholars"
                                        className={`nav-link`}
                                        style={isButtonActive("favorites") ? bstyle : {}}
                                    >
                                        <i
                                            style={{ marginLeft: "3px",  color: isButtonActive("favorites") ? "#ffffff" : "#1d2855",marginRight: 23,fontSize: 20  }}
                                            className="far fa-bookmark"
                                            aria-hidden="true"
                                        ></i>

                                        <p style={isButtonActive("favorites") ? bpstyle : pStyle}>Favorites</p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(2)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() => handleActive("jobs")}
                                        to="/scholars"
                                        className={`nav-link`}
                                        style={isButtonActive("jobs") ? bstyle : {padding: 5}}
                                    >
                                        <i
                                             style={{
                                                marginLeft: 10,
                                                color: isButtonActive("jobs") ? "#ffffff" : "#1d2855",
                                                marginRight: 23,
                                                fontSize: 16
                                            }}
                                            className="far fa-briefcase"
                                            aria-hidden="true"
                                        ></i>

                                        <p style={isButtonActive("jobs") ? bpstyle : pStyle}>Jobs</p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(4)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() => handleActive("invite")}
                                        to="/scholars"
                                        className={`nav-link`}
                                        style={isButtonActive("invite") ? bstyle : {}}
                                    >
                                        <i
                                             style={{
                                                marginLeft:3,
                                                color: isButtonActive("invite") ? "#ffffff" : "#1d2855",
                                                marginRight: 23,
                                                fontSize: 16
                                            }}
                                            className="far fa-share"
                                            aria-hidden="true"
                                        ></i>

                                        <p style={isButtonActive("invite") ? bpstyle : pStyle}>Invite Friends</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div
                                    className="nav-item"
                                    onClick={() => setShowContent(4)}
                                    data-widget="pushmenu"
                                    style={{
                                        marginTop: 100
                                    }}
                                >
                                    <Link
                                        onClick={() => handleLogout()}
                                        to=""
                                        className={`nav-link ${isButtonActive("log")
                                            ? "active"
                                            : ""
                                            }`}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row'
                                            }}
                                    >
                                        <i
                                            style={{
                                                color: "#EB1E5E",
                                                marginLeft: "3px",
                                                marginTop: 0,
                                                marginRight: 20,
                                                fontSize: 20
                                            }}
                                            class="fa fa-sign-out"
                                            aria-hidden="true"
                                        ></i>
                                        <p
                                            style={{
                                                ...pStyle,
                                                color: "#EB1E5E",
                                            }}
                                        >
                                            Log out
                                        </p>
                                    </Link>
                                </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Menu;
