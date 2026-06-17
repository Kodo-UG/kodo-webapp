import React from "react";

const Features = () => {
    return (
        <section
            className="steps-area p-relative "
            style={{
                backgroundColor: "#032e3f",
                paddingBottom: "100px",
                paddingTop: "100px",
            }}
        >
            <div className="animations-10 ">
                <img src="/images/react.png" alt="an-img-01" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="section-title mb-35 wow fadeInDown animated"
                            data-animation="fadeInDown"
                            data-delay=".4s"
                        >
                            <h2 className="font-weight-bold">
                                Our Best Features
                            </h2>
                            <p>
                                We have developed deep expertise in Education
                                Technology and Communication support.
                            </p>
                        </div>
                        <ul className="pr-20">
                            <li>
                                <div
                                    className="step-box wow fadeInUp animated"
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
                                            <img
                                                src="/images/ico.png"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h3 className="font-weight-bold">
                                            Kodo Ai
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily:
                                                    "Roboto, sans-serif",
                                                fontSize: "15px",
                                                lineHeight: "26px",
                                            }}
                                        >
                                            Our kodo scholarship AI will compare
                                            your profile to thousands of active
                                            scholarships to create a prioritized
                                            list of opportunities. You’ll be
                                            able to sort by level effort, due
                                            dates and award amount.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="step-box wow fadeInUp animated"
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
                                            <img
                                                src="/images/ico1.png"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h3 className="font-weight-bold">
                                            Expert Support
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily:
                                                    "Roboto, sans-serif",
                                                fontSize: "15px",
                                                lineHeight: "26px",
                                            }}
                                        >
                                            Experience peace of mind with our
                                            extensive all-season support team,
                                            providing you with the resources and
                                            guidance you need.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="step-box wow fadeInUp animated "
                                    data-animation="fadeInUp"
                                    data-delay=".4s"
                                >
                                    <div className="dnumber">
                                        <div
                                            className="date-box  "
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                src="/images/ico2.png"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h3 className="font-weight-bold">
                                            Application Process
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily:
                                                    "Roboto, sans-serif",
                                                fontSize: "15px",
                                                lineHeight: "26px",
                                            }}
                                        >
                                            Take control of your success with
                                            our extensive feature-rich
                                            dashboard, to provide you with a
                                            comprehensive view of your progress
                                            and personalized insights to help
                                            you reach your full potential.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="step-img wow fadeInLeft animated"
                            data-animation="fadeInLeft"
                            data-delay=".4s"
                        >
                            <img
                                src="/images/man.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
