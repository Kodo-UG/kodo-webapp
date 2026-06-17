import React, { Fragment } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs1 = () => {
    return (
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
            <div class="animations-02">
                <img
                    width={100}
                    height={100}
                    src="/images/react.png"
                    alt="contact-bg-an-01"
                />
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="s-about-img p-relative  wow fadeInLeft animated"
                            data-animation="fadeInLeft"
                            data-delay=".4s"
                        >
                            <img
                                src="/images/Picture1.png"
                                alt="img"
                            />
                            <div className="about-text second-about three-about">
                                <span>
                                    25 <sub>+</sub>
                                </span>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="about-content s-about-content pl-15 wow fadeInRight  animated"
                            data-animation="fadeInRight"
                            data-delay=".4s"
                        >
                            <div className="about-title second-title pb-25">
                                <h5>
                                    <i className="fal fa-graduation-cap"></i>{" "}
                                    About Kodo Scholarships
                                </h5>
                                <h2>About Kodo</h2>
                            </div>
                            <p class="txt-clr">
                                Kodo Scholarships We provide a free, up-to-date,
                                comprehensive list of scholarships, grants and
                                Jobs that are available to international
                                students from around the world. It is our aim to
                                help you find opportunities for higher education
                                and become agents of development in your own
                                countries and the rest of the world.{" "}
                            </p>
                            <p>
                                We’ve helped students win more than $10 million
                                dollars in scholarships. We take the hassle out
                                of the scholarship search process and increase
                                your chances of matching you with scholarships
                                in minutes.
                            </p>
                            <div className="about-content2">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="green2">
                                            <li>
                                                <div className="abcontent">
                                                    {" "}
                                                    <div
                                                        style={{
                                                            textAlign:
                                                                "justify",
                                                            marginRight: "2rem",
                                                        }}
                                                        class="text"
                                                    >
                                                        <h3>Our Mission</h3>{" "}
                                                        <p>
                                                            Our mission is to
                                                            ensure that we build
                                                            a Scholarship System
                                                            that will operate in
                                                            the whole of world ,
                                                            a company that will
                                                            boast of having some
                                                            of the best and
                                                            reliable
                                                            scholarships .
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="abcontent">
                                                    {" "}
                                                    <div
                                                        style={{
                                                            textAlign:
                                                                "justify",
                                                        }}
                                                        class="text"
                                                    >
                                                        <h3>Our Vission</h3>{" "}
                                                        <p>
                                                            Our Vision is to
                                                            become one of the
                                                            most preferred
                                                            choices of
                                                            individuals and
                                                            organization when it
                                                            comes to the demand
                                                            htmlFor Scholarships
                                                            and Job offers in
                                                            the whole of Africa
                                                            and the rest of
                                                            world.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs1;
