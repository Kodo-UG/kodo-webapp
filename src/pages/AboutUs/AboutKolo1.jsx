import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutKodo() {
    return (
        <section
            className="steps-area2 p-relative fix"
            style={{ backgroundColor: "#032e3f" }}
        >
            <div className="container">
                <div className="animations-08">
                    <img src="/images/react.png" alt="contact-bg-an-01" />
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="step-img3 wow fadeInLeft animated"
                            data-animation="fadeInLeft"
                            data-delay=".4s"
                        >
                            <img
                                src="/images/Picture3.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="step-box step-box3 wow fadeInUp animated"
                            data-animation="fadeInUp"
                            data-delay=".4s"
                        >
                            <div className="dnumber">
                                <div
                                    className="date-box"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img src="/images/ico2.png" alt="icon" />
                                </div>
                            </div>
                            <div className="text">
                                <h2>Kodo Jobs</h2>
                                <p>
                                    Looking for a remote job as a developer,
                                    customer service rep, recruiter, designer or
                                    sales professional? Browse openings in those
                                    categories and more . We hand curate a list
                                    to showcase the best remote job
                                    opportunities in the most recruited job
                                    categories. Find a remote job here to launch
                                    your work anywhere career.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutKodo;
