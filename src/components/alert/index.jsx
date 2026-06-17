import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";
import LargeCard from "../card/LargeCard";
// import { IconName } from "react-icons/si";

const CustomAlert = () => {
	const history = useHistory();
	return (
		<div style={{ padding: "20px" }} className="content-wrapper">
			<section className="content">
				<div class="alert alert-success" role="alert">
					<h4 class="alert-heading">
						You do not yet have any applications
					</h4>
					<p>
						Continue by selecting a study program. After you have found
						where you want to apply , click "Apply" and your application
						will be automatically created.
					</p>
					<hr />
					<p class="mb-0">kodo scholarship.</p>
				</div>
			</section>

			<button
				style={{
					backgroundColor: "#EB1E5E",
					fontWeight: "bold",
					color: "white",
					borderRadius: "7px",
					padding: "8px",
					marginLeft: "6.8px"
				}}
				onClick={() => history.push("/scholars")}
			>
				Continue &gt;&gt;
			</button>

			<LargeCard />
		</div>
	);
};

export default CustomAlert;
