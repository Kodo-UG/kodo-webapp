import React from "react";
import { Link } from "react-router-dom";

function Cta() {
    return (
        <section
            class="cta-area cta-bg pt-50 pb-50 mb-100"
            style={{
                backgroundImage:
                    'url("/images/bb.jpeg")',
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div
                            className="section-title cta-title wow fadeInLeft animated"
                            data-animation="fadeInDown animated"
                            data-delay=".2s"
                        >
                            <h2
                                style={{
                                    textAlign: "left",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontFamily: "Roboto ,sans-serif",
                                    fontSize: "2.4rem",
                                }}
                            >
                                Free Consultation If You Want To <br /> Know
                                About Kodo
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4 text-right">
                        <div
                            className="cta-btn s-cta-btn wow fadeInRight animated mt-30"
                            data-animation="fadeInDown animated"
                            data-delay=".2s"
                        >
                            <Link
                                to="/scholars"
                                style={{
                                    backgroundColor: "#EC1D64",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    padding: "1rem",
                                }}
                                className="btn ss-btn smoth-scroll"
                            >
                                SEARCH PROGRAMS{" "}
                                <i class="fal fa-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
