import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { CiLock } from "react-icons/ci";


const CardScholarship = ({
	cardTitle,
	text,
	award,
	deadline,
	subscription,
	type,
	path
}) => {
	const date = new Date(deadline);
	const formattedDate = date.toLocaleDateString();

	const history = useHistory();

	const destinationPath = () => {
		if (path === "/jobs") {
			history.push("/payjobs");
		} else {
			history.push("/payment");
		}
	};

	return (
		<Card
			className="shadow-xl"
			style={{
				width: "100%",
				borderRadius: "0.5rem",
				cursor: "pointer",
				marginBottom: "3rem"
			}}
			onClick={() => destinationPath()}
		>
			<div
				className="card-heade"
				style={{
					background: "#1c2755",
					color: "white",
					borderTopLeftRadius: "0.5rem",
					borderTopRightRadius: "0.5rem"
				}}
			>
				<div
					style={{
						borderTopLeftRadius: "0.5rem",
						borderTopRightRadius: "0.5rem"
					}}
					className="d-flex align-items-center justify-content-between"
				>
					{/* <div className="">
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689711758/Screenshot_from_2023-07-18_23-19-08-removebg-preview_kavcdq.png"
							alt=""
							style={{ maxWidth: "100%", height: "auto" }}
						/>
					</div> */}
					<CiLock size={25} color={'#ffffff'} 
						style={{
							marginLeft: 25,
							marginTop: -10
						}}
					/>
					
					<div
						className="w-75 d-flex flex-column align-items-start justify-content-center "
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between"
						}}
					>
						<p
							style={{
								fontWeight: "bold",
								color: "white",
								width: "100%",

								fontSize: "14px"
							}}
						>
							<p
								style={{
									marginTop: 10,
									marginBottom: 10
								}}
							>Upgrade Account Required</p>
							<br />
							<span
								style={{
									color: "white",
									fontWeight: "normal",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									opacity: 0.7,
									fontSize: 13,
									marginTop: -27,
									marginBottom: 5
								}}
							>
								<p></p>
								Access all matched {text} 
								<IoIosArrowForward
									size={25}
									style={{ 
										color: "white", 
										marginRight: 40
									}}
								/>
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="card-body" style={{ height: "6.5rem" }}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">{type}</p>
						<p
							style={{
								color: "#1c2755",
								fontWeight: "bold",
								fontSize: "15px"
							}}
						>
							{award}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Deadline</p>
						<p
							style={{
								color: "#1c2755",
								fontWeight: "bold",
								fontSize: "15px"
							}}
						>
							{formattedDate}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center"
						style={{
							marginTop: -18
						}}
					>
						{" "}
						<p className="mb-1">Effort</p>
						<div
							style={{
								marginTop: "4px",
								fontWeight: "bold",
								color: "#1c2755",
								fontSize: "15px",
								lineHeight: "20px"
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="17"
								fill="none"
							>
								<path
									d="M29.961 13.783a16.45 16.45 0 0 0-1.52-4.985 16.05 16.05 0 0 0-4.38-5.482C17.505-1.992 7.604-.834 2.694 6.118a14.45 14.45 0 0 0-2.31 5.105c-.43 1.84-.499 3.749-.202 5.616-.21-3.603 1.06-7.31 3.444-9.954 4.753-5.419 13.292-5.827 18.264-.562a11.999 11.999 0 0 1 3.298 7.91v.008c-.006.325.051.649.17.952.118.302.294.578.518.81a2.371 2.371 0 0 0 3.437 0A2.483 2.483 0 0 0 30 14.24a2.531 2.531 0 0 0-.039-.458"
									fill="#1c2755"
								></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="4"
								height="14"
								fill="none"
								deg="-90"
								style={{
									position: "absolute",
									marginLeft: "12px",
									marginTop: "-12px",
									transform: "rotate(-90deg)",
									height: "22px"
								}}
							>
								<path
									d="M2.416.288S.992 11.25.993 11.753c.002.394.156.772.43 1.05a1.442 1.442 0 0 0 2.068-.003 1.49 1.49 0 0 0 .427-1.053c0-.52-1.502-11.459-1.502-11.459Z"
									fill="#1c2755"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CardScholarship;
