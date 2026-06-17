import React from "react";
import { Carousel } from "react-bootstrap";
import "./sports.css";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

const Sports = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const isMediumDevice = useMediaQuery(
		"only screen and (min-width : 769px) and (max-width : 992px)"
	);
	const isLargeDevice = useMediaQuery(
		"only screen and (min-width : 993px) and (max-width : 1200px)"
	);
	const isExtraLargeDevice = useMediaQuery(
		"only screen and (min-width : 1201px)"
	);

	const history = useHistory();
	return (
		<div>
			<Carousel interval={9900} slide={true}>
				<Carousel.Item>
					<div
						className="d-block "
						style={{
							backgroundImage:
								'url("https://res.cloudinary.com/itgenius/image/upload/v1695301943/h3-rev-img-2_wrcet7.png")',
							backgroundSize: "contain",
							backgroundPosition: "right",
							filter: "brightness(95%)",
							height: "90vh",
							backgroundRepeat: "no-repeat",
							width: "100%"
							// background: "pink"
						}}
					>
						<div
							className="container h-100"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "start",
								justifyContent: "center",
								// background: "black",
								// opacity: 0.2,
								width: "100%"
							}}
						>
							<div
								className=""
								style={{
									width: "75%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center"
								}}
							>
								<h1
									style={{
										fontSize: isSmallDevice ? "2rem" : "55px",
										fontWeight: "bolder",
										color: "#1c2755",

										fontFamily: "Jost, sans-serif",
										lineHeight: isSmallDevice ? "" : "72px",
										fontStyle: "normal"
									}}
									data-swiper-animation="fadeInUp"
									data-delay=".4s"
								>
									UNLOCK YOUR <br />
									POTENTIAL
								</h1>
								<h5
									style={{
										color: "#1c2755",
										width: "60%",
										// marginBottom: "4rem",
										fontSize: "16px",
										fontWeight: "bold",
										// fontFamily: "Jost, sans-serif",
										lineHeight: "22px",
										fontStyle: "normal"
									}}
									data-swiper-animation="fadeInUp"
									data-delay=".4s"
									className="d-md-block d-none"
								>
									We help high school athletes get recruited to play
									the sports they love in college.
								</h5>
								<div
									style={{
										padding: ".1rem",
										marginTop: isSmallDevice ? "1.5rem" : "",
										display: isMediumDevice ? "flex" : "",
										alignItems: "center",
										justifyContent: "space-between"
									}}
								>
									{/* <div></div> */}
									<Link to="#">
										<button
											type="button"
											className="btn btn-lg btn-primary"
											style={{
												borderRadius: "2rem",
												background: "#EB1E5E",
												fontFamily: "Roboto, sans-serif",
												padding: "1rem",
												margin: "0.5rem",
												border: "none"
											}}
										>
											Parents Start Here{" "}
											{/* <i className="fal fa-long-arrow-right"></i> */}
										</button>
									</Link>
									<Link to="/player">
										<button
											type="button"
											className="btn btn-lg btn-primary"
											style={{
												borderRadius: "2rem",
												background: "#1c2755",
												border: "none",
												fontFamily: "Roboto, sans-serif",
												padding: "1rem",
												margin: "0.5rem"
											}}
										>
											Atheletes Start Here{" "}
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
			<div
				className="child2 "
				style={{
					width: "100%",
					background: "#002d54",

					padding: ".5rem"
				}}
			>
				<div
					className="subParent h-100 w-100 "
					style={{
						color: "white",
						fontWeight: "bold",
						fontSize:
							isMediumDevice || isSmallDevice ? "1.2rem" : "1.5rem",
						width: "100%"
					}}
				>
					<div className="subChild">
						<div
							style={{
								marginRight: "1rem",

								width: "40%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1690692705/Kodo_Colour_Variations-08_oyf5jo.png"
								style={{ width: "100%", objectFit: "contain" }}
								alt="1mg1"
							/>
						</div>
						Get expert guidance
					</div>
					<div className="subChild">
						<div
							style={{
								marginRight: "1rem",

								width: "40%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1690692705/Kodo_Colour_Variations-08_oyf5jo.png"
								style={{ width: "100%", objectFit: "contain" }}
								alt="1mg1"
							/>
						</div>
						Discover the right schools for you
					</div>
					<div className="subChild">
						<div
							style={{
								marginRight: "1rem",

								width: "40%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1690692705/Kodo_Colour_Variations-08_oyf5jo.png"
								style={{ width: "100%", objectFit: "contain" }}
								alt="1mg1"
							/>
						</div>
						Get noticed by more college coaches
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sports;
