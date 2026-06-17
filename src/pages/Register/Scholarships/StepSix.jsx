// import React from "react";
// import { useDispatch } from "react-redux";
// import { updateFormData } from "../../../toolkit/formReducer";
// import { useState } from "react";
// import StepperCard from "../../../components/StepperCard";

// const StepSix = ({ nextStep, prevStep, formData, setFormData }) => {
// 	const dispatch = useDispatch();
// 	const buttons = [
// 		{ id: 1, title: "As soon as possible" },
// 		{ id: 2, title: "In the next 3 months" },
// 		{ id: 3, title: "3 - 6 months" },
// 		{ id: 4, title: "6 - 12 months" },
// 		{ id: 5, title: "12 or more months" }
// 	];
// 	const [selectedCard, setSelectedCard] = useState(null);
// 	const handleClick = (title, id) => {
// 		setSelectedCard(id);
// 		dispatch(updateFormData({ field: "scholarshipStart", value: title }));
// 	};

// 	return (
// 		<div class="app-container">
// 			<div class="app-wrapper">
// 				<div
// 					class="selections-container"
// 					style={{
// 						transform: "none",
// 						transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
// 					}}
// 				>
// 					<h2>How soon were you looking to start this new program?</h2>
// 					<div class="option-list">
// 						<div
// 							style={{
// 								display: "grid",
// 								gridTemplateColumns: "repeat(3, 1fr)",
// 								gap: "2rem",
// 								cursor: "pointer",
// 								padding: "3rem",
// 								width: "100%"
// 							}}
// 						>
// 							{buttons.map((item) => (
// 								<StepperCard
// 									item={item.title}
// 									// handleClick={handleClick}
// 									// selectedCard={selectedCard}
// 								/>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div
// 				className="d-flex"
// 				style={{ display: "flex", justifyContent: "space-evenly" }}
// 			>
// 				<button
// 					class="select-option sonic-btn"
// 					style={{
// 						padding: "10px 20px",
// 						border: "none",
// 						outline: "none",
// 						transition:
// 							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
// 						fontFamily: "Arial, sans-serif",
// 						fontSize: "16px",
// 						lineHeight: "1.5",
// 						color: "#fff",
// 						cursor: "pointer",
// 						marginBottom: "4px"
// 					}}
// 					onClick={prevStep}
// 				>
// 					Previous
// 				</button>
// 				<button
// 					class="select-option sonic-btn"
// 					style={{
// 						padding: "10px 20px",
// 						border: "none",
// 						outline: "none",
// 						transition:
// 							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
// 						fontFamily: "Arial, sans-serif",
// 						fontSize: "16px",
// 						lineHeight: "1.5",
// 						color: "#fff",
// 						cursor: "pointer",
// 						marginBottom: "4px"
// 					}}
// 					onClick={nextStep}
// 				>
// 					Next
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default StepSix;
