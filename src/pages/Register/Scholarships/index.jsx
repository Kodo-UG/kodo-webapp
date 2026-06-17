import React, { useEffect, useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import HeaderLayout from "../../../components/Layout/steeperLayout";
import Footer from "../../../components/Layout/steeperLayout/Footer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";

const Stepper = () => {
	const [step, setStep] = useState(1);

	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []); // empty dependency array ensures it runs only once after the component mounts
	

	const [formData, setFormData] = useState({
		lname: "",
		fname: "",
		email: "",
		password: "",
		country: "",
		city: "",
		scholarshipStart: "",
		educationlevel: "",
		degree: "",
		phone: "",
		appType: "",
		scholarshipcategory: "",
		refer: ""
	});
	const dispatch = useDispatch();

	const params = useParams();
	const userId = localStorage.getItem("refer");

	const nextStep = () =>
		setStep((step) => (step < 4 && step > 0 ? step + 1 : 1));
	const prevStep = () =>
		setStep((step) => (step < 4 && step > 0 ? step - 1 : 1));

	useEffect(() => {
		dispatch(updateFormData({ field: "refer", value: userId }));
	}, []);

	const renderStepContent = () => {
		switch (step) {
			case 1:
				return (
					<StepOne
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<StepTwo
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				return (
					<StepThree
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);

			default:
				return (
					<StepOne
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
		}
	};

	return (
		<HeaderLayout>
			<div
				style={{
					height: "80vh",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "#E6E6E6"
				}}
			>
				<div
					id="school-search-container"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					{renderStepContent()}
				</div>
			</div>
			<Footer step={step} nextStep={nextStep} prevStep={prevStep} />
		</HeaderLayout>
	);
};

export default Stepper;
