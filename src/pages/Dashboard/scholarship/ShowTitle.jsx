import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { clearScholarships } from "../../../toolkit/scholarshipReducer";

const ShowTitle = () => {
  const history = useHistory();
  const ifnx = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const { isLoading, isError } = useQuery("/scholarship");

	const handleRegister = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userData");
		dispatch(clearScholarships());
		history.push("/stepper");
	};

	return (
		<div
			style={{
				fontWeight: 300,
				fontSize: "30px",
				margin: "5px",
				padding: "10px",
				fontFamily: "Poppins",
				lineHeight: "45px"
			}}
		>
			{isError ? null : isLoading ? null : (
				<div
					style={{
						letterSpacing: "2px",
						color: "#1c2755",
						fontSize: isSm ? "1.45rem" : ""
					}}
				>
					{!ifnx.user.appType || ifnx.user.appType !== "scholarship"
						? " "
						: "Latest Scholarships"}
					<br />
					{!ifnx.user.appType || ifnx.user.appType !== "scholarship" ? (
						<span
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
								color: "#fff",
								backgroundColor: "#1c2755",
								fontSize: "1.5rem",
								padding: "0 9px"
							}}
							onClick={handleRegister}
						>
							Register for scholarships
						</span>
					) : null}
				</div>
			)}
		</div>
	);
};

export default ShowTitle;
