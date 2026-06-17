import React from "react";
import { Link } from "react-router-dom";

function 
CardSection() {
    return (
        <section>
            <div className="container ">
                <div
                    className="row "
                    style={{
                        marginTop: "0.5rem",
                    }}
                >
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="services-box07">
                            <div className="sr-contner">
                                <div className="icon">
                                    <img
                                        style={{
                                            width: "30px",
                                            marginLeft: "15px",
                                        }}
                                        src="/images/s1.png"
                                        alt="icon01"
                                    />
                                </div>
                                <div className="text">
                                    <h5 style={{ fontSize: "23px" }}>
                                        <a href="/aboutus">
                                            Start Your New Career
                                        </a>
                                    </h5>
                                    <p
                                        style={{
                                            fontFamily: "Roboto, sans-serif",
                                            lineHeight: "26px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Kodo Scholarship is dedicated to
                                        creating opportunities for young people
                                        in Africa and the rest of the world to
                                        pursue their dreams and reach their full
                                        potential.
                                    </p>
                                    <Link to="/aboutus">
                                        Read More{" "}
                                        <i className="fal fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="services-box07 active">
                            <div className="sr-contner">
                                <div className="icon">
                                    <img
                                        style={{
                                            width: "30px",
                                            marginLeft: "15px",
                                        }}
                                        src="/images/s2.png"
                                        alt="icon01"
                                    />
                                </div>
                                <div className="text">
                                    <h5>
                                        <Link to="/aboutus">
                                            Scholarship Programs
                                        </Link>
                                    </h5>
                                    <p
                                        style={{
                                            fontFamily: "Roboto, sans-serif",
                                            lineHeight: "26px",
                                            fontSize: "15.5px",
                                        }}
                                    >
                                        Kodo is the #1 college scholarship web
                                        app in the world and has helped students
                                        win more than $10 million dollars. Join
                                        today and start matching with
                                        scholarships in minutes.
                                    </p>
                                    <Link to="/aboutus">
                                        Read More{" "}
                                        <i className="fal fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="services-box07">
                            <div className="sr-contner">
                                <div className="icon">
                                    <img
                                        style={{
                                            width: "30px",
                                            marginLeft: "15px",
                                        }}
                                        src="/images/s3.png"
                                        alt="icon01"
                                    />
                                </div>
                                <div className="text">
                                    <h5>
                                        <Link to="/aboutus">
                                            Career Opportunities
                                        </Link>
                                    </h5>
                                    <p
                                        style={{
                                            fontFamily: "Roboto, sans-serif",
                                            lineHeight: "26px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Looking for a remote job as a developer,
                                        customer service rep, recruiter,
                                        designer or sales professional? Launch
                                        your career with global remote job
                                        opportunities
                                    </p>
                                    <a href="/">
                                        Read More{" "}
                                        <i className="fal fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardSection;
