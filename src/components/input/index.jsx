import React from "react";

const CustomInput = ({
	onChange,
	name,
	email,
	type,
	id,
	label,
	placeholder,
	defaultValue
}) => {
	return (
		<div style={{ marginTop: "10px", marginBottom: "10px" }}>
			<div
				className="form-group"
				style={{ display: "flex", flexDirection: "column" }}
			>
				<label htmlFor="email">{label}</label>
				<input
					id={id}
					name={name}
					placeholder={placeholder}
					defaultValue={defaultValue}
					onChange={onChange}
					required=""
					type={type}
					style={{
						borderRadius: "10px",
						width: "450px",
						padding: "10px",
						border: "1px solid #ccc",
						outline: "none",
						transition: "box-shadow 0.3s ease-in-out",
						boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
						fontFamily: "Arial, sans-serif",
						fontSize: "16px",
						lineHeight: "1.5",
						color: "#333",
					}}
					// onChange={handleCountryChange} // Add onChange event handler
				/>
			</div>
		</div>
	);
};

export default CustomInput;
