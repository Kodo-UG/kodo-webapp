import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoIosSend } from "react-icons/io";
import { useMediaQuery } from "@uidotdev/usehooks";
import { displaySuccessNotification } from "../../utils/Toast";
import axiosInstance from "../../api/axiosInstance";
import { useState } from "react";

const ContactForm = () => {
	const isSm = useMediaQuery("only screen and (max-width : 768px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 769px) and (max-width : 992px)"
	);
	const isLg = useMediaQuery(
		"only screen and (min-width : 993px) and (max-width : 1200px)"
	);
	const isEl = useMediaQuery("only screen and (min-width : 1201px)");

	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);

	const handleInputChange = (setState) => (event) => {
		setState(event.target.value);
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await axiosInstance.post("/user/contactus", {
				email,
				phone,
				name,
				message
			});

			console.log(res.status);

			if (res.status == 201 || res) {
				displaySuccessNotification(res.data.message);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<Box
			onSubmit={formSubmit}
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" }
			}}
			noValidate
			autoComplete="off"
			style={{
				// background: "red",
				width: "100%",
				// height: "100vh",
				display: isSm ? "grid" : "flex",
				
				gridTemplateColumns: "1fr"
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					// alignItems: "center",
					// justifyContent: "center",
					width: isSm ? "100%" : "50%",
					// background: "blue",
					height: "100%"
				}}
			>
				<h1
					style={{
						fontWeight: "bold",
						fontSize: isSm ? "" : "3rem" || isMd ? "" : "3rem",
						paddingTop: "4rem",
						paddingBottom: "2rem"
					}}
				>
					Contact With Us
				</h1>
				<TextField
					required
					id="outlined-required"
					label="Name"
					name="name"
					size="normal"
					onChange={handleInputChange(setName)}
					style={{
						width: isSm ? "90%" : "75%",
						marginBottom: "1rem"
					}}
				/>
				<TextField
					required
					id="outlined-required"
					label="Email Address"
					name="email"
					onChange={handleInputChange(setEmail)}
					size="normal"
					style={{
						width: isSm ? "90%" : "75%",
						marginBottom: "1rem"
					}}
				/>
				<TextField
					required
					id="outlined-required"
					label="Phone Number"
					name="phone"
					onChange={handleInputChange(setPhone)}
					size="normal"
					style={{
						width: isSm ? "90%" : "75%",
						marginBottom: "1rem"
					}}
				/>

				<TextField
					required
					id="outlined-required"
					label="Your Message"
					name="message"
					onChange={handleInputChange(setMessage)}
					size="normal"
					multiline={true}
					// maxRows={6}
					rows={6}
					style={{
						width: isSm ? "90%" : "75%",
						marginBottom: "1rem"
					}}
				/>
				<button
					style={{
						width: isSm ? "90%" : "75%",
						height: "4rem",
						background: "#1c2755",
						marginTop: "4rem",
						borderRadius: "10px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "1.5rem",
						fontWeight: "bold",
						color: "white"
					}}
					// onClick={() => formSubmit()}
				>
					Send Message {" "}
					<IoIosSend
						size={25}
						style={{ color: "white", marginLeft: "1rem" }}
					/>
				</button>
			</div>
			<div
				style={{
					width: isSm ? "100%" : "50%",
					height: "100%",
					background: "white",
					marginTop: isSm ? "2rem" : ""
				}}
			>
				<img
					src="/images/map.png"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain"
					}}
					alt="rr"
				/>
			</div>
		</Box>
	);
};
export default ContactForm;
