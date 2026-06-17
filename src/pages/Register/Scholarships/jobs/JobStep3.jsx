import React, { useState } from "react";
import "../stepperElement.css";
import { useDispatch, useSelector } from "react-redux";
import { updateJobData } from "../../../../toolkit/jobReducer";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import NavHeader from "../../../../components/Layout/NavHeader";
import '../stepper8.css';
import "react-datepicker/dist/react-datepicker.css";
import logologin from '../../../../assets/logo-login.jpg'
import { Link } from "react-router-dom";
import {
	displayErrorMessage,
	displaySuccessMessage
} from "../../../../utils/Toast";
import axiosInstance from "../../../../api/axiosInstance";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ClipLoader } from "react-spinners"; 

function StepElement8() {
	const jobData = useSelector((state) => state.jobData);
	  const [showPassword, setShowPassword] = useState(false);
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	const [gender, setGender] = useState("");
	const [selectedDate, setSelectedDate] = useState(null);
	const isSm = useMediaQuery("only screen and (max-width : 900px)");

	const dispatch = useDispatch();
	const handleEmailChange = (e) => {
		const { value } = e.target;
		dispatch(updateJobData({ field: "email", value: value }));
	};
	const handlePasswordChange = (e) => {
		const { value } = e.target;
		dispatch(updateJobData({ field: "password", value: value }));
	};

	const handleDobChange = (date) => {
		setSelectedDate(date);

		const dateString = date ? date.toISOString().split("T")[0] : "";
		dispatch(updateJobData({ field: "dob", value: dateString }));
	};

	const handlePhoneChange = (e) => {
		const { value } = e.target;
		dispatch(updateJobData({ field: "phone", value: value }));
	};
	const handleFirstNameChange = (e) => {
		const { value } = e.target;
		dispatch(updateJobData({ field: "fname", value: value }));
	};
	const handleLastNameChange = (e) => {
		const { value } = e.target;
		dispatch(updateJobData({ field: "lname", value: value }));
	};

	const register = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (!jobData.email || !jobData.phone || !jobData.password) {
			displayErrorMessage("Please fill in all the required fields");
			setLoading(false);
			return;
		}

		try {
			const res = await axiosInstance.post("/auth/job/register", jobData);
			localStorage.setItem("userID", res.data.id);

			if (res.status == 200) {
				displaySuccessMessage(res.data.message);
				history.push("/signin");
				// nextStep();
			}

			if (res.status == 201) {
				displaySuccessMessage(res.data.message);
				history.push("/signin");
			}
		} catch (error) {
			displayErrorMessage("Failed to register");
		} finally {
			setLoading(false);
		}
	};

	const handleGenderChange = (e) => {
		setGender(e.target.value);
		dispatch(updateJobData({ field: "sex", value: e.target.value }));
	};

	return (
		 <div>
			  <NavHeader />
			  <div
				style={{
				  display: 'flex',
				  flexDirection: 'column',
				  alignItems: 'center',
				  justifyContent: 'center'
				}}
			  >
				<main className="signup-page">
				<div className="auth-container">
				<div
							   style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							  }}
							>
							  <img 
								src={logologin}
								width={100}
								height={100}
							  />
							  <h3
								style={{
								  color: '#1d2855',
								  fontSize: 40,
								  fontWeight: 'bold',
								}}
							  >
								Sign up
							  </h3>
							</div>
				  <form className="auth-form" onSubmit={register}
					style={{
					  marginTop: 30
					}}
				  >
					<div className="form-group">
					  <input 
						type="text" 
						placeholder="Email" 
						required 
						onChange={handleEmailChange}
						name="email"
						id="email"
					  />
					</div>
		
					<div className="form-group">
					  <input type="text" placeholder="First Name" required 
						 onChange={handleFirstNameChange}
						 name="fname"
						 id="fname"
					  />
					</div>
		
					<div className="form-group">
					  <input type="text" placeholder="Last Name" required 
						 onChange={handleLastNameChange}
						 name="lname"
						 id="lname"
					  />
					</div>
		
					<div className="form-group">
					  <input type="text" placeholder="Phone Number" required 
						 onChange={handlePhoneChange}
						 name="phone"
						 id="phone"
						 label="Phone Number"
					  />
					</div>
		
					<div className="form-group">
					  <DatePicker
						className={` ${isSm ? "date-pic" : "date-picker"}`}
						selected={selectedDate}
						onChange={handleDobChange} // Call the modified function here
						placeholderText="Select date of birth"
						maxDate={new Date(2009, 11, 31)}
						required
					  />
					</div>
		
					<div className="form-group"
					  style={{
						border: '1px solid #cccccc',
						borderRadius: 10,
						padding: 14,
						color: '#666666'
					  }}
					>
					  <select 
						value={gender}
						onChange={handleGenderChange}
						required
					  >
						<option value="">Select gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					  </select>
					</div>
		
					<div className="form-group">
					  <input
						onChange={handlePasswordChange}
						name={showPassword ? "text" : "password"}
						type="password"
						id="password"
						label="password"
						placeholder="Password"
						required
					  />
					  <button
						type="button"
						className="toggle-password"
						onClick={() => setShowPassword(!showPassword)}
					  >
						⋯
					  </button>
					</div>
		
					<button type="submit" className="auth-button"
					  style={{
						backgroundColor: '#00d6dd',
						color: '#1d2855'
					  }}
					>
					  {loading ? <ClipLoader size={20} color="#fff" /> : "Create account"}
					  <span className="arrow">→</span>
					</button>
				  </form>
		
				  <div className="auth-prompt">
					Already have an account?{" "}
					<Link  to={{ pathname: "/signin", state: { ref: "jobstepper3" } }} className="auth-link">
					  Sign in!
					</Link>
				  </div>
				</div>
				</main>
			  </div>
			</div>
	);
}

export default StepElement8;
