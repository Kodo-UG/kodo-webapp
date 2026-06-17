import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section
            className="about-area about-p pt-120 pb-120 p-relative fix"
            style={{ background: "#eff7ff" }}
        >
            <div className="animations-02">
                <img
                    width={200}
                    height={200}
                    src="/images/ico2.png"
                    alt="contact-bg-an-01"
                />
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="s-about-img p-relative wow fadeInLeft animated"
                            data-animation="fadeInLeft"
                            data-delay=".4s"
                        >
                            <img
                                width={700}
                                height={700}
                                src="/images/im.png"
                                alt="img"
                            />
                            <div
                                style={{ height: "7.8rem", width: "15.8rem" }}
                                className="about-text second-about"
                            >
                                <span style={{ fontSize: "2rem" }}>
                                    25 <sub>+</sub>
                                </span>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="about-content s-about-content pl-15 wow fadeInRight animated"
                            data-animation="fadeInRight"
                            data-delay=".4s"
                        >
                            <div className="about-title second-title pb-25 fontWeight-bold">
                                <h5>
                                    <i className="fal fa-graduation-cap font-weight-bold"></i>{" "}
                                    About Our Scholarships
                                </h5>
                                <h2 className="font-weight-bold">
                                    A Few Words About Kodo
                                </h2>
                            </div>
                            <p className="txt-clr">
                                We take the hassle out of the scholarship search
                                process and increase your chances of matching
                                you with scholarships in minutes.
                            </p>
                            <p style={{ fontSize: "17px" }}>
                                We’ve helped students win more than $10 million
                                dollars in scholarships. We take the hassle out
                                of the scholarship search process and increase
                                your chances of matching you with scholarships
                                in minutes.
                            </p>

                            <div className="slider-btn mt-20">
                                <Link
                                    to="/scholars"
                                    className="btn ss-btn smoth-scroll"
                                    style={{ padding: "18px", color: "white" }}
                                >
                                    Search Programs{" "}
                                    <i className="fal fa-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
