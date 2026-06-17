import React from "react";
import { Carousel } from "react-bootstrap";
import "./bg.css";
import { Link } from "react-router-dom";
// import { useMediaQuery } from "@uidotdev/usehooks";

const BackgroundCarousel = () => {
    // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    // const isMediumDevice = useMediaQuery(
    // 	"only screen and (min-width : 769px) and (max-width : 992px)"
    // );
    // const isLargeDevice = useMediaQuery(
    // 	"only screen and (min-width : 993px) and (max-width : 1200px)"
    // );
    // const isExtraLargeDevice = useMediaQuery(
    // 	"only screen and (min-width : 1201px)"
    // );

    return (
        <Carousel interval={9900} slide={true}>
            <Carousel.Item>
                <div
                    className="d-block w-100"
                    style={{
                        backgroundImage:
                            'url("/images/banner2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(97%)",
                        height: "93vh",
                        objectFit: "cover",
                    }}
                >
                    <div
                        className="container h-100 "
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                        }}
                    >
                        <div
                            className="h-100"
                            style={{
                                width: "75%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <h1
                                className="titl"
                                style={{
                                    fontSize: "55px",
                                    fontWeight: "bolder",
                                    color: "#fff",
                                    marginTop: "4.5rem",
                                    fontFamily: "Jost, sans-serif",
                                    lineHeight: "71px",
                                    fontStyle: "normal",
                                }}
                                data-swiper-animation="fadeInUp"
                                data-delay=".4s"
                            >
                                Find life changing <br />
                                scholarships made <br /> for you.
                            </h1>
                            <h5
                                style={{
                                    color: "#fff",
                                    width: "70%",
                                    marginBottom: "4rem",
                                    fontSize: "16px",
                                    fontWeight: "800px",
                                    fontFamily: "Jost, sans-serif",
                                    lineHeight: "22px",
                                    fontStyle: "normal",
                                }}
                                data-swiper-animation="fadeInUp"
                                data-delay=".4s"
                                className="d-md-block d-none"
                            >
                                KODO Scholarships is the #1 college scholarship
                                app in the world and has helped students win
                                more than $1 million dollars
                            </h5>
                            <div style={{ width: "50%" }}>
                                <Link to="/stepper">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn-primary"
                                        style={{
                                            borderRadius: "2rem",
                                            background: "#EB1E5E",
                                            border: "none",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            color: "#fff",
                                            fontFamily: "Roboto, sans-serif;",
                                            lineHeight: "16px",
                                            fontStyle: "normal",
                                            padding: "1.5rem",
                                        }}
                                    >
                                        Find Scholarships Now{" "}
                                        <i className="fal fa-long-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div
                    className="d-block w-100"
                    style={{
                        backgroundImage:
                            'url("/images/banner1.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(95%)",
                        height: "91vh",
                    }}
                >
                    <div
                        className="container h-100 "
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            margitnLeft: "-5rem",
                        }}
                    >
                        <div
                            className="h-100 textContainer"
                            style={{
                                width: "75%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "55px",
                                    fontWeight: "bolder",
                                    color: "#fff",
                                    marginTop: "4rem",
                                    fontFamily: "Jost, sans-serif",
                                    lineHeight: "72px",
                                    fontStyle: "normal",
                                }}
                                data-swiper-animation="fadeInUp"
                                data-delay=".4s"
                            >
                                Find Life Changing <br /> Jobs at Kodo
                            </h1>
                            <h5
                                style={{
                                    color: "#fff",
                                    width: "60%",
                                    marginBottom: "4rem",
                                    fontSize: "18px",
                                    fontWeight: "bolder",
                                    fontFamily: "Jost, sans-serif",
                                    lineHeight: "22px",
                                    fontStyle: "normal",
                                }}
                                data-swiper-animation="fadeInUp"
                                data-delay=".4s"
                                className="d-md-block d-none"
                            >
                                Are you looking for a remote Job? Find Life
                                Changing Jobs Now!
                            </h5>
                            <div style={{ width: "50%" }}>
                                <Link to="/jobStep1">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn-primary"
                                        style={{
                                            borderRadius: "2rem",
                                            background: "#EB1E5E",
                                            border: "none",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            color: "#fff",
                                            fontFamily: "Roboto, sans-serif;",
                                            lineHeight: "16px",
                                            fontStyle: "normal",
                                            padding: "1.5rem",
                                        }}
                                    >
                                        Find Jobs Now{" "}
                                        <i className="fal fa-long-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default BackgroundCarousel;

// <Carousel.Item>
// 	<div
// 		className="d-block "
// 		style={{
// 			backgroundImage:
// 				'url("https://res.cloudinary.com/itgenius/image/upload/v1695301943/h3-rev-img-2_wrcet7.png")',
// 			backgroundSize: "contain",
// 			backgroundPosition: "right",
// 			filter: "brightness(95%)",
// 			height: "90vh",
// 			backgroundRepeat: "no-repeat",
// 			width: "100%"
// 		}}
// 	>
// 		<div
// 			className="container h-100"
// 			style={{
// 				display: "flex",
// 				flexDirection: "column",
// 				alignItems: "start",
// 				// background: "black",
// 				// opacity: 0.2,
// 				width: "100%"
// 			}}
// 		>
// 			<div
// 				className="h-100 textContainer"
// 				style={{
// 					width: "75%",
// 					display: "flex",
// 					flexDirection: "column",
// 					justifyContent: "center"
// 				}}
// 			>
// 				<h1
// 					style={{
// 						fontSize: isSmallDevice ? "40px" : "55px",
// 						fontWeight: "bolder",
// 						width: "auto",
// 						maxWidth: isMediumDevice ? "100%":"600px",
// 						padding: "20px",
// 						marginTop: isSmallDevice ? "18rem" : "",
// 						fontFamily: "Jost, sans-serif",
// 						lineHeight: isSmallDevice ? "50px" : "72px",
// 						fontStyle: "normal"
// 					}}
// 					data-swiper-animation="fadeInUp"
// 					data-delay=".4s"

// 					className="carousel-text"
// 				>
// 					UNLOCK YOUR <br />
// 					POTENTIAL
// 				</h1>

// 				<h5
// 					style={{
// 						color: "#1c2755",
// 						width: "60%",
// 						marginBottom: "4rem",
// 						fontSize: "16px",
// 						fontWeight: "bold",
// 						// fontFamily: "Jost, sans-serif",
// 						lineHeight: "22px",
// 						fontStyle: "normal"
// 					}}
// 					data-swiper-animation="fadeInUp"
// 					data-delay=".4s"
// 					className="d-md-block d-none"
// 				>
// 					We help high school athletes get recruited to play the
// 					sports they love in college.
// 				</h5>
// 				<div
// 					style={{
// 						width:
// 							isSmallDevice || isMediumDevice ? "100%" : "50%",
// 						padding: ".1rem",
// 						marginTop: isSmallDevice ? "1rem" : "",
// 						display: "flex"
// 					}}
// 				>

// 					<Link to="#">
// 						<button
// 							type="button"
// 							className="btn btn-lg btn-primary"
// 							style={{
// 								borderRadius: "2rem",
// 								background: "#EB1E5E",
// 								border: "none",
// 								fontSize: "16px",
// 								fontWeight: "bold",
// 								color: "#fff",
// 								fontFamily: "Roboto, sans-serif;",
// 								lineHeight: "16px",
// 								fontStyle: "normal",
// 								padding: "1.5rem"
// 							}}
// 						>
// 							Parents Start Here{" "}
// 							{/* <i className="fal fa-long-arrow-right"></i> */}
// 						</button>
// 					</Link>
// 					<Link to="#">
// 						<button
// 							type="button"
// 							className="btn btn-lg btn-primary"
// 							style={{
// 								borderRadius: "2rem",
// 								background: "#1c2755",
// 								border: "none",
// 								fontSize: "16px",
// 								fontWeight: "bold",
// 								color: "#fff",
// 								fontFamily: "Roboto, sans-serif;",
// 								lineHeight: "16px",
// 								fontStyle: "normal",
// 								padding: "1.5rem",
// 								marginLeft: "1rem"
// 							}}
// 						>
// 							Atheletes Start Here{" "}
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </Carousel.Item>
