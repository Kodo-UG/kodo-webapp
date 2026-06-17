import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import CombinedJobs from "./CombinedJobs";
import MapCardJobs from "./MapCardJobs";
import MatchedCard from "../scholarship/MatchedCard";
import TitleContent from "./TitleContent";

const Jobs = () => {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	return (
		<div>
			<div className="content-wrapper">
				<section style={{ marginBottom: "3rem"}} className="content">
					<div
						style={{
							display: "flex ",
							flexDirection: "column",
							width: "100%",
							alignItems: "center",
							padding: "2px",
							justifyContent: "center",
							// background: "red"
						}}
					>
						{/* <MatchedCard title="jobs" total="360,0000" /> */}
						<TitleContent />

						{isSm ? (
							<CombinedJobs path="/jobs" />
						) : (
							<MapCardJobs path="/jobs" />
						)}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Jobs;
