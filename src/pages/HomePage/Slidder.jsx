import { Fragment } from "react";
import BackgroundCarousel from "./BackgroundCarousel";
import CardSection from "./CardSection";

const Slidder = () => {
	return (
		<Fragment>
			<section
				// style={{ background: "black", opacity: 0.9 }}
				id="home"
				className="slider-area fix p-relative "
			>
				<BackgroundCarousel />
				<section
					style={{ background: "#eff7ff", paddingTop: ".6rem" }}
					className="content-section"
				>
					<CardSection />
				</section>
			</section>
		</Fragment>
	);
};

export default Slidder;
