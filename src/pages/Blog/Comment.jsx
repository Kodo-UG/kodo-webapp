import { useMediaQuery } from "@uidotdev/usehooks";
import { FaReply } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import React, { useState } from "react";
import image1 from '../../assets/2.png';

const Comment = ({ image, username, timestamp, text }) => {
	const [replyText, setReplyText] = useState("");
	const [reply, setReply] = useState(false);
	const [hover, setHover] = useState(false);

	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const isLg = useMediaQuery(
		"only screen and (min-width : 1250px) and (max-width : 1300px)"
	);

	const commentStyle = {
		display: "flex",
		width: "100%",
		padding: "10px",
		marginBottom: "20px",
		backgroundColor: "#fff",
		borderRadius: "5px"
	};

	const hovered = {
		display: "flex",
		width: "100%",
		padding: "10px",
		marginBottom: "20px",
		backgroundColor: "red",
		borderRadius: "5px"
	};

	const headerStyle = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "5px"
	};

	const usernameStyle = {
		fontWeight: "bold"
	};

	const spanStyle = {
		color: "#666"
	};

	const bodyStyle = {
		fontSize: "13px",
		width: "100%"
	};

	const userImageStyle = {
		width: "30px",
		height: "30px",
		borderRadius: "50%",
		objectFit: "cover"
	};

	const handleCommentReply = (e) => {
		e.preventDefault();
	};

	const toggleReply = (e) => {
		e.preventDefault();
		setReply(!reply);
	};

	return (
		<div style={{ fontFamily: "montserrat,san-serif" }} className="comment">
			<div
				style={{
					marginRight: "1rem",
					marginTop: 40
				}}
			>
				<img
					// src={
					// 	image ||
					// 	`https://ui-avatars.com/api/name=${username}&background=random`
					// }
					src={image1}
					alt="User"
					style={userImageStyle}
				/>
			</div>

			<div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
				<div style={headerStyle}>
					<strong style={usernameStyle}>{username}</strong>
					<span style={spanStyle}> {timestamp}</span>
				</div>
				<div
					style={{
						width: isSm
							? "15rem"
							: "" || isMd
							? "40rem"
							: "" || isLg
							? "52rem"
							: "52rem"
					}}
				>
					<p style={bodyStyle}>{text}</p>
				</div>

				<div>
					<button
						onClick={toggleReply}
						style={{
							backgroundColor: "#f2f2f2",
							color: "black",
							fontWeight: "normal",
							cursor: "pointer",
							paddingRight: ".5rem",
							paddingLeft: ".5rem",
							paddingTop: ".1rem",
							marginRight: ".5rem",
							paddingBottom: ".1rem",
							borderRadius: 10
						}}
						className="mr-6"
					>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<span style={{ marginRight: ".5rem" }}>
								<FaReply />
							</span>
							<span style={{ marginRight: ".5rem" }}>reply</span>
						</span>
					</button>

					<button
						style={{
							backgroundColor: "#f2f2f2",
							color: "black",
							fontWeight: "normal",
							cursor: "pointer",
							paddingRight: "1rem",
							paddingLeft: "1rem",
							paddingTop: ".1rem",
							paddingBottom: ".1rem",
							borderRadius: 10
						}}
						className="mr-6"
					>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<span style={{ marginRight: ".5rem" }}>
								<BiLike />
							</span>
							<span style={{ marginRight: ".5rem" }}>2</span>
							<span>
								{" "}
								<BiDislike />
							</span>
						</span>
					</button>
				</div>

				{reply && (
					<div style={{ flex: 1 }}>
						<textarea
							placeholder="Your Reply"
							value={replyText}
							onChange={(e) => setReplyText(e.target.value)}
							style={{
								width: "100%",
								height: "5rem",
								padding: "10px",
								marginBottom: ".5rem",
								marginTop: ".5rem",
								border: "1px solid #ccc",
								borderRadius: "5px",
								resize: "none"
							}}
						/>
						<div>
							<button
								onClick={toggleReply}
								style={{
									backgroundColor: "#00d6dd",
									color: "#fff",
									border: "none",
									marginRight: ".8rem",
									borderRadius: "20px",
									padding: "5px 10px",
									cursor: "pointer"
								}}
							>
								<span
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center"
									}}
								>
									<span style={{ marginRight: ".5rem" }}>
										<FaReply />
									</span>
									<span style={{ marginRight: ".5rem" }}>reply</span>
								</span>
							</button>

							<button
								onClick={toggleReply}
								style={{
									position: 'absolute',
									backgroundColor: "#00d6dd",
									color: "#fff",
									border: "none",
									borderRadius: "20px",
									padding: "5px 10px",
									cursor: "pointer"
								}}
							>
								cancel
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
