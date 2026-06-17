import { useDispatch } from "react-redux";
import { updateFormData } from "../toolkit/formReducer";
import "./Button.css";

const MyButton = ({ text, isSelected, onClick }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(updateFormData({ field: "degree", value: text }));
		onClick();
	};

	return (
		<div>
			<div
				onClick={handleClick}
				type="button"
				className={`btn btn-xs ${isSelected ? "selected" : "notSelected"}`}
				style={{
					fontWeight: "bold",
					height: "1.3rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				{text}
			</div>
		</div>
	);
};

export default MyButton;
