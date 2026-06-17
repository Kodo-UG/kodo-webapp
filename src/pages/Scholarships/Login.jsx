/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../toolkit/formReducer";
import StepperCard from "../Register/StepperCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineBriefcase } from "react-icons/hi2";
import NavHeader from "../../components/Layout/NavHeader";

const Login = () => {
	const dispatch = useDispatch();
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery("only screen and (min-width : 730px)");
	const isLg = useMediaQuery("only screen and (min-width : 100px)");

	const object = [
		{
			id: 1,
			title: "Scholarships",
			text: "We’ve helped students win more than $10 million dollars in scholarships.",
			link: "/signin",
			Button: "login",
			icon: <PiGraduationCap />
		},
		{
			id: 2,
			title: "Jobs",
			text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
			link: "/signin",
			Button: "login",
			icon: <HiOutlineBriefcase />
		}
	];

	const handleClick = (appType) => {
		dispatch(updateFormData({ field: "appType", value: appType }));
	};

	return (
		<div>
			<NavHeader />
			<div
				style={{
					height: "45rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					marginTop: isSm ? "3rem" : isMd ? '-6rem' :  isLg ? "-5rem" : ''
				}}
			>
				<StepperCard list={object} />
			</div>
		</div>
	);
};

export default Login;
