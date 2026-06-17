import React from "react";
import {
	BiSignal1,
	BiSignal2,
	BiSignal3,
	BiSignal4,
	BiSignal5,
} from "react-icons/bi";
import "./stepperFourCss.css";

function StepperCard2({ item, handleClick, selectedCard }) {
	const signal = (id) => {
		switch (id) {
			case 1:
				
				return (
					<BiSignal1
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 2:
				
				return (
					<BiSignal2
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 3:
				
				return (
					<BiSignal3
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 4:
				
				return (
					<BiSignal4
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 5:
				
				return (
					<BiSignal5
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			case 6:
				
				return (
					<BiSignal5
						style={{
							color: "red",
							width: "6rem",
							height: "4rem",
						}}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div
			className={`card  ${
				selectedCard === item.id ? "selected" : "notSelected"
			}`}
			onClick={() => handleClick(item.text, item.id)}
		>
			<div
				style={{
					borderRadius: "50%",
					background: "#E6E9ED",
					width: "2.5rem",
					height: "2.5rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "3px",
				}}
			>
				{signal(item.id)}
			</div>

			<div
				style={{
					marginTop: "1rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					padding: "1rem",
				}}
			>
				<h5>{item.title}</h5>
			</div>
		</div>
	);
}

export default StepperCard2;
