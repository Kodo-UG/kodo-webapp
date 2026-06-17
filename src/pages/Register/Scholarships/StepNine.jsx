// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearFormData, updateFormData } from "../../../toolkit/formReducer";
// import api from "../../../api/apiClient";
// import axios from "axios";
// import CustomModal from "../../../components/modal/Modal";
// import {
// 	displayErrorMessage,
// 	displaySuccessMessage
// } from "../../../utils/Toast";
// import Input from "../../../components/input/index";

// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axiosInstance from "../../../api/axiosInstance";

// const StepNine = ({ nextStep, prevStep }) => {
// 	const [modalOpen, setModalOpen] = useState(true);
// 	const [loading, setLoading] = useState(false);
// 	const formData = useSelector((state) => state.formData);
// 	const [gender, setGender] = useState("");

// 	const [password, setPassword] = useState("");
// 	const [showPassword, setShowPassword] = useState(false);

// 	const dispatch = useDispatch();
// 	const handleEmailChange = (e) => {
// 		const { name, value } = e.target;
		
// 		// Dispatch an action to update the form data in the Redux store
// 		dispatch(updateFormData({ field: "email", value: value }));
// 	};
// 	const handlePasswordChange = (e) => {
// 		const { name, value } = e.target;
		
// 		// Dispatch an action to update the form data in the Redux store
// 		dispatch(updateFormData({ field: "password", value: value }));
// 	};
// 	const handlePhoneChange = (e) => {
// 		const { name, value } = e.target;
		
// 		// Dispatch an action to update the form data in the Redux store
// 		dispatch(updateFormData({ field: "phone", value: value }));
// 	};

// 	const register = async () => {
// 		setLoading(true);
// 		let data = JSON.stringify(formData);

		

// 		if (!formData.email || !formData.phone || !formData.password) {
			
// 			displayErrorMessage("Please fill in all the required fields");
// 			setLoading(false);
// 			return;
// 		}

// 		try {
// 			const res = await axiosInstance.post(
// 				"/auth/user/signup",
// 				formData
// 			);
			
// 			localStorage.setItem("userID", res.data.id);

// 			if (res.data.id) {
// 				displaySuccessMessage(
// 					"Registration successful "
// 				);
// 				nextStep();
// 			}
// 		} catch (error) {
			
// 			displayErrorMessage("Failed to register");
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	const togglePasswordVisibility = () => {
// 		setShowPassword(!showPassword);
// 	};

// 	const handleGenderChange = (e) => {
// 		setGender(e.target.value);
		
// 		// Dispatch an action to update the form data in the Redux store
// 		dispatch(updateFormData({ field: "sex", value: e.target.value }));
// 	};
// 	return (
// 		<div className="app-container">
// 			<div class="app-wrapper">
// 				<div
// 					class="selections-container"
// 					style={{
// 						transform: "none",
// 						transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
// 					}}
// 				>
// 					<h2>Tell us your name.</h2>
// 				</div>
// 			</div>
// 			<form
// 				method="POST"
// 				style={{
// 					display: "flex",
// 					flexDirection: "column",
// 					justifyContent: "space-between",
// 					marginTop: "4px",
// 					marginBottom: "10px",
// 					alignItems: "center"
// 				}}
// 			>
// 				<div style={{ marginTop: "0px", marginBottom: "0px" }}>
// 					{" "}
// 					<div className="_fieldGroup_1g3ja_1">
// 						<Input
// 							onChange={handleEmailChange}
// 							name="email"
// 							type="text"
// 							id="email"
// 							label="Email Address"
// 							placeholder="Your email"
// 						/>
// 					</div>
// 				</div>
// 				<div style={{ marginTop: "2px", marginBottom: "2px" }}>
// 					{" "}
// 					<div className="_fieldGroup_1g3ja_1">
// 						<Input
// 							onChange={handlePhoneChange}
// 							name="phone"
// 							type="text"
// 							id="phone"
// 							label="Phone Number "
// 							placeholder="phone"
// 						/>
// 					</div>
// 				</div>
// 				<div style={{ marginTop: "2px", marginBottom: "2px" }}>
// 					<div className="_fieldGroup_1g3ja_1 ">
					

// 						<div
// 							style={{
// 								position: "relative"
// 							}}
// 						>
// 							<Input
// 								onChange={handlePasswordChange}
// 								name="password"
// 								type={showPassword ? "text" : "password"}
// 								id="password"
// 								label="Password"
// 								placeholder="password"
// 							/>

// 							<button
// 								type="button"
// 								onClick={togglePasswordVisibility}
// 								style={{
// 									position: "absolute",
// 									right: "10px",
// 									bottom: "2%",
// 									transform: "translateY(-50%)",
// 									background: "none",
// 									border: "none",
// 									outline: "none",
// 									cursor: "pointer"
// 								}}
// 							>
// 								{showPassword ? <FaEyeSlash /> : <FaEye />}
// 							</button>
// 						</div>

// 						<div
// 							style={{
// 								height: "3rem",
// 								display: "flex",
// 								alignItems: "center",
// 								justifyContent: "center"
// 							}}
// 						>
							
// 							<select
// 								value={gender}
// 								onChange={handleGenderChange}
// 								style={{
									
// 									border: "none",
// 									backgroundColor: "#E8F0FE",
// 									borderRadius: "4px",
// 									padding: "8px",
// 									width: "100%",
// 									height: "100%",
// 									marginTop: "4rem"
// 								}}
// 							>
// 								<option value="">Select gender</option>
// 								<option value="male">Male</option>
// 								<option value="female">Female</option>
// 							</select>
// 						</div>
// 					</div>
// 				</div>
// 			</form>
// 			<div
// 				className="d-flex"
// 				style={{
// 					display: "flex",
// 					justifyContent: "space-evenly",
// 					padding: "2rem"
// 				}}
// 			>
// 				<button
// 					className="select-option sonic-btn"
// 					onClick={prevStep}
// 					style={{
// 						padding: "10px 20px",
// 						border: "none",
// 						outline: "none",
// 						transition:
// 							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
// 						fontFamily: "Arial, sans-serif",
// 						fontSize: "14px",
// 						color: "#fff",
// 						cursor: "pointer",
// 						marginBottom: "4px"
// 					}}
// 				>
// 					Previous
// 				</button>

// 				<button
// 					className="select-option sonic-btn"
// 					onClick={register}
// 					style={{
// 						padding: "10px 20px",
// 						border: "none",
// 						outline: "none",
// 						transition:
// 							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
// 						fontFamily: "Arial, sans-serif",
// 						fontSize: "14px",
// 						color: "#fff",
// 						cursor: "pointer",
// 						marginBottom: "4px"
// 					}}
// 				>
// 					{loading ? "Registering..." : "Register"}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default StepNine;
