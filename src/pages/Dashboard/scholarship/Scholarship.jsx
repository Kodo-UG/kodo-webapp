import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import MatchedCard from "./MatchedCard";
import ShowTitle from "./ShowTitle";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import MapCardData from "./MapCardData";
import "./modal.css";

const Scholarship = () => {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	return (
		<div style={{ background: "white"}}>
			<div className="content-wrapper">
				<section
					style={{ marginBottom: "2rem" }}
					className="content"
				>
					<div
						style={{
							display: "flex ",
							flexDirection: "column",
							width: "100%",
							alignItems: "center",
							padding: "2px",
							justifyContent: "center"
						}}
					>
						{/* <MatchedCard title="scholarships" total="702,531" /> */}
						<div style={{ marginTop: "100px" }}></div>

						<ShowTitle />
						<div
							style={{
								padding: isSm ? "2rem" : "",
								width: "100%"
							}}
						>
							<div
								style={{
									textAlign: "center",
									letterSpacing: "2px",
									color: "#1c2755",
									fontSize: isSm ? "1.45rem" : "2.5rem"
								}}
							>
								Latest Scholarships
							</div>
							{isSm ? (
								<CombinedScholarshipCard />
							) : (
								<MapCardData />
							)}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
