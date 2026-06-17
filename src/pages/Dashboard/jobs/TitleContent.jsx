import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import axiosInstance from "../../../api/axiosInstance";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const TitleContent = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const job = JSON.parse(localStorage.getItem("userData"));
	const newJob = job.user.jobAppType;

	const fetchJobs = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.get("/job");
			setData(res.data.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	return (
		<>
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
				{data.length < 0 ? (
					<div
						style={{
							letterSpacing: "2px",
							color: "rgb(74,74,74)"
						}}
					>
						No Available Jobs
					</div>
				) : (
					<div
						style={{
							letterSpacing: "2px",
							color: "#1c2755",
							fontSize: isSm ? "1.6rem" : ""
						}}
					>
						{newJob === false ? (
							<div
								style={{
									cursor: "pointer",
									fontSize: "1.2rem"
								}}
								onClick={() => history.push("/jobStep1")}
							>
								Register for jobs
							</div>
						) : (
							"Latest Jobs"
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default TitleContent;
