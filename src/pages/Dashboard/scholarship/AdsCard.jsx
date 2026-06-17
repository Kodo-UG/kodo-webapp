import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@uidotdev/usehooks";

const AdsCArd = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const isSm = useMediaQuery("only screen and (max-width : 1000px)");

	return (
		<div>
			<Slider {...settings}>
				<div>
					{/* Your card component here */}
					<div
						style={{
							height: "70%",
							background: "white",
							boxShadow:
								"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
							borderRadius: "5px",
							padding: "2rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							color: "#1c2755"
						}}
					>
						<h3
							style={{
								fontWeight: "bold",
								fontSize: isSm ? "1rem" : "1.3rem"
							}}
						>
							Resources
						</h3>
						<div
							style={{
								height: "70%",
								marginBottom: "2rem"
							}}
						>
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1690692705/interracial_qodm9k.jpg"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover"
								}}
								alt="resource"
							/>
						</div>
						<p>
							You can checkout more details about kodo scholarship from
							our blog site.
						</p>
						<button
							className="shadow-sm"
							style={{
								border: "2px solid #1c2755",
								borderRadius: "5px",
								padding: "0.6rem",
								fontWeight: "bold",
								color: "#1c2755"
							}}
							//   onClick={() => {
							//     history.push("/blog");
							//   }}
						>
							Learn More
						</button>
					</div>
				</div>

				{/* Add more slides as needed */}
			</Slider>
		</div>
	);
};

export default AdsCArd;
