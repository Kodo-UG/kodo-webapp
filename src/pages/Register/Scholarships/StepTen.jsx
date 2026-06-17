import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData, updateFormData } from "../../../toolkit/formReducer";
import api from "../../../api/apiClient";
import { Input } from "antd";
import { useHistory } from "react-router-dom";
import {
	displayErrorMessage,
	displaySuccessMessage
} from "../../../utils/Toast";
import axiosInstance from "../../../api/axiosInstance";
const { TextArea } = Input;

const StepTen = ({ nextStep, prevStep }) => {
	const userID = localStorage.getItem("userID");
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState(null);

	const history = useHistory();

	const handleCodeChange = (e) => {
		const { name, value } = e.target;

		setCode(value);
	};

	const verifyEmail = async () => {
		try {
			let response = await axiosInstance.post("/auth/account/verification", {
				id: userID,
				code: code
			});
			if (response.status == "201") {
				displaySuccessMessage("Account verified successfully");
				history.push("/signin");
			} else {
				displayErrorMessage("Invalid code ");
			}
		} catch (error) {
			throw error;
		}
	};

	return (
		<div
			className="_notAnimated_pmptr_10"
			style={{
				display: "flex",
				alignItems: "center",
				marginTop: "10px",
				marginBottom: "20px",
				justifyContent: "center",
				flexDirection: "column"
			}}
		>
			<span
				className="_headingContainer_1fpvz_1"
				style={{ marginTop: "10px", marginBottom: "20px" }}
			>
				<h2 className="_soloHeading_1fpvz_8">Verify Email Address</h2>
			</span>
			<form
				method="POST"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					marginTop: "10px",
					marginBottom: "40px",
					alignItems: "center"
				}}
			>
				<div style={{ marginTop: "20px", marginBottom: "20px" }}>
					{" "}
					<div className="_fieldGroup_1g3ja_1">
						<Input
							showCount
							maxLength={5}
							onChange={handleCodeChange}
							style={{
								borderRadius: "10px",
								width: "500px",
								padding: "10px",
								border: "1px solid #ccc",
								outline: "none",
								transition: "box-shadow 0.3s ease-in-out",
								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
								fontFamily: "Arial, sans-serif",
								fontSize: "16px",
								lineHeight: "1.5",
								color: "#333",
								backgroundColor: "#fff"
							}}
						/>
					</div>
				</div>
			</form>
			<div
				className="d-flex"
				style={{ display: "flex", justifyContent: "center" }}
			>
				<button
					className="select-option sonic-btn"
					onClick={verifyEmail}
					style={{
						padding: "10px 20px",
						border: "none",
						outline: "none",
						transition:
							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
						fontFamily: "Arial, sans-serif",
						fontSize: "16px",
						lineHeight: "1.5",
						color: "#fff",
						cursor: "pointer",
						marginBottom: "4px"
					}}
				>
					{loading ? "Verifying..." : "Verify Email"}
				</button>
			</div>
		</div>
	);
};

export default StepTen;
