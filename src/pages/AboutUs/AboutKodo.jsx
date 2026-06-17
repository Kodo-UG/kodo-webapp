/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutKodo() {
    return (
        <section
            className="steps-area2 p-relative fix"
            style={{ background: "#125875" }}
        >
            <div class="animations-02">
                <img
                    height={100}
                    width={100}
                    src="/images/w.svg"
                    alt="an-img-01"
                />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="step-box step-box2 wow fadeInUp animated"
                            data-animation="fadeInUp"
                            data-delay=".4s"
                        >
                            <div className="dnumber">
                                <div
                                    class="date-box"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img src="/images/ico.png" alt="icon" />
                                </div>
                            </div>
                            <div className="text">
                                <h2>Kodo Scholarships</h2>
                                <p>
                                    We were founded by a group of individuals
                                    who are passionate about making a difference
                                    in the world and who understand the
                                    transformative power of education. Through
                                    our work, we hope to create a brighter
                                    future. We are committed to building a
                                    community of life long learners and leaders
                                    who will shape the future of their
                                    continents and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="step-img2 wow fadeInLeft animated"
                            data-animation="fadeInLeft"
                            data-delay=".4s"
                        >
                            <img
                                src="/images/Picture2.png"
                                alt="class image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutKodo;
