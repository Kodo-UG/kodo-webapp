/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MyButton from "../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "../../../components/Layout/steeperLayout/footer.css";

const StepOne = ({ nextStep, setFormData }) => {
	const formData = useSelector((state) => state.formData);
	const dispatch = useDispatch();

	const myList = [
		{
			id: 1,
			text: "Associate's"
		},
		{
			id: 2,
			text: "Bachelor's"
		},
		{
			id: 3,
			text: "Master's"
		},
		{
			id: 4,
			text: "Doctorate"
		},
		{
			id: 5,
			text: "Non-Degree Courses"
		},
		{
			id: 6,
			text: "Certificate/ Diploma"
		},
		{
			id: 7,
			text: "Graduate Certificates"
		},
		{
			id: 8,
			text: "General"
		},
		{
			id: 9,
			text: "Bootcamps"
		}
	];

	const [selectedButtonId, setSelectedButtonId] = useState(null);

	const handleButtonClick = (id, text) => {
		setSelectedButtonId(id);
		dispatch(updateFormData({ field: "appType", value: "scholarship" }));

		dispatch(updateFormData({ field: "degree", value: text }));
		nextStep();
	};

	return (
		<div>
			<div
				className="selections-container"
				style={{
					transform: "none",
					transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
				}}
			>
				<h2 style={{
					fontFamily: "Lexend Deca, Helvetica, Arial, sans-serif",
					fontWeight: "700",
					color: "#1d2855",

				}}>What degree level are you looking for?</h2>
				<div className="option-list">
					{myList.map((info) => (
						<button
							type="button"
							onClick={() => handleButtonClick(info.id, info.text)}
							className="select-option sonic-btn"
							style={{
								backgroundColor: '#00D6DD',
								color: 'black',
								borderRadius: 10
							}}
							key={info.id}
						>
							{info.text}
						</button>
					))}
				</div>
			</div>
		</div>

	);
};

export default StepOne;
