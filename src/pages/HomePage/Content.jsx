import React from "react";
import { Link } from "react-router-dom";

function Content() {
	return (
		<div
			className="slider-content-wrapper position-absolute"
			style={{
				top: "8.7rem",
				left: "4rem"
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7 slide">
						<div className="p-4 text-white" style={{ opacity: "0.9" }}>
							<h2
								data-animation="fadeInUp"
								data-delay=".4s"
								className="font-weight-bold  mb-4 h"
							>
								Find Life Changing Scholarships Made For You
							</h2>
							<p
								style={{ color: "white", font: "bold" }}
								data-animation="fadeInUp"
								data-delay=".6s"
								className="mb-4 pr"
							>
								KODO Scholarships is #1 college scholarship app <br />
								in the world and has helped students win more than $1{" "}
								<br />
								million dollars
							</p>

							<div
								className="second-header-btn btn-sm"
								style={{ display: "flex" }}
							>
								<Link
									to="/"
									className="btn ss-btn mr-2"
									data-animation="fadeInLeft"
									data-delay=".4s"
									style={{
										background: "#EC1D64",
										borderRadius: "2rem",
										height: "3rem",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "16rem",
										fontWeight: "bold"
									}}
								>
									Find Scholarships Now
									<i className="fal fa-long-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 p-relative"></div>
				</div>
			</div>
		</div>
	);
}

export default Content;
