import React from "react";
import "./videoSection.css";

function VideoSection() {
    return (
        <section
            class="cta-area cta-bg pt-160 pb-160"
            style={{
                backgroundImage: 'url("/images/lady.jpeg")',
            }}
        >
            <div className="container">
                <div className="row justify-content-center  align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div
                            className="section-title cta-title video-title wow fadeInLeft animated"
                            data-animation="fadeInDown animated"
                            data-delay=".2s"
                        >
                            <h2 style={{ textAlign: "left" }}>
                                {" "}
                                We're <span>Kodo</span> & We're Different
                            </h2>
                            <p style={{ textAlign: "left" }}>
                                Kodo Search reduces the scholarship search
                                process from months to minutes by matching
                                students with opportunities made them.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-4">
                        <div className="s-video-content">
                            <a
                                href="https://www.youtube.com/watch?v=MaOsdLCRQN8&ab_channel=KodoScholarships"
                                className="popup-video mb-50"
                            >
                                <img
                                    src="/images/p.png"
                                    alt="circle_right"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;
