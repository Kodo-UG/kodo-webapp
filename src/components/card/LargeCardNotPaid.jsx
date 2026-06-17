import { FaAward, FaRegCalendarAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "@uidotdev/usehooks";
import { CiLock } from "react-icons/ci";

const LargeCardNotPaid = ({
	formatDate,
	subText,
	award,
	link,
	about,
	path,
	type,
	text
}) => {
	const date = new Date(formatDate);
	const formattedDate = date.toLocaleDateString();
	const history = useHistory();

	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1302px)"
	);
	const isLg = useMediaQuery(
		"only screen and (min-width : 1302px) and (max-width : 1700px)"
	);
	const isXl = useMediaQuery(
		"only screen and (min-width : 1700px) and (max-width : 2000px)"
	);

	const destinationPath = () => {
		if (path === "/jobs") {
			history.push("/payjobs");
		} else {
			history.push("/payment");
		}
	};

	return (
		<>
			<div
				style={{
					backgroundColor: "#fff",
					height: "12rem",
					borderRadius: ".3rem",

					boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
					cursor: "pointer",
					width: isMd ? "75%" : "55%",
					marginLeft: isLg
						? "20rem"
						: "" | isMd
						? "10rem"
						: "" | isXl
						? "27rem"
						: "27rem",
					marginBottom: "2rem"
				}}
				onClick={() => destinationPath()}
			>
				<div
					style={{
						height: "100%",
						width: "100%",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						borderRadius: ".3rem"
					}}
				>
					<div
						style={{
							backgroundColor: "#1c2755",
							borderTopRightRadius: ".3rem",
							borderTopLeftRadius: ".3rem",

							alignItems: "center",
							display: "flex",
							width: "100%",
							height: "6rem",
							paddingLeft: "1rem",
							paddingRight: "2rem"
						}}
					>
						<div
							className=" "
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%"
							}}
						>
							{/* <img
								src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689711758/Screenshot_from_2023-07-18_23-19-08-removebg-preview_kavcdq.png"
								alt=""
								style={{
									maxWidth: "100%",
									height: "auto"
								}}
							/> */}
							<CiLock size={25} color={'#ffffff'}/>

							<div
								className=""
								style={{
									display: "flex",
									width: "90%",
									alignItems: "center",
									justifyContent: "space-between",
									paddingTop: "1rem"
								}}
							>
								<p
									style={{
										fontWeight: "bold",
										color: "white",
										fontSize: "18px"
									}}
								>
									Upgrade Account Required
								</p>
								<p
									style={{
										color: "#fff",
										fontWeight: "normal",
										fontSize: "16px",
										display: "flex"
									}}
								>
									Access all matched {text}
									<span>
										<IoIosArrowForward
											size={25}
											style={{
												color: "#fff",
												marginLeft: "1rem"
											}}
										/>
									</span>
								</p>
							</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "end",
							justifyContent: "space-between",
							paddingLeft: "1rem",
							paddingRight: "1rem",
							height: "5rem",
							width: "100%",
							borderBottomRightRadius: "1rem",
							borderBottomLeftRadius: "1rem"
						}}
					>
						{/* left child div */}
						<div
							style={{
								display: "flex",
								padding: ".1rem",
								justifyContent: "center",
								alignItems: "center",
								height: "100%"
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									height: "100%",
									alignItems: "center",
									marginTop: "1.52rem",
									marginLeft: ".8rem"
								}}
							>
								<FaAward
									style={{
										width: "1.7rem",
										height: "1.7rem",
										color: "#D8D8D8"
									}}
								/>{" "}
								<div style={{ marginLeft: "0.5rem" }}>
									<p
										style={{
											marginBottom: "-1px",
											marginLeft: ".1rem",
											color: "#4e4b66",
											fontSize: "14px",
											lineHeight: "22px",
											fontWeight: "400px"
										}}
									>
										{type}
									</p>
									<p
										style={{
											marginTop: "0px",
											fontWeight: "bold",
											color: "#1c2755",
											fontSize: "18px",
											lineHeight: "20px"
										}}
									>
										{award}
									</p>
								</div>
							</div>
						</div>
						{/* middle child */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingLeft: "1rem",
								paddingRight: "1rem",
								height: "5rem"
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									height: "100%",
									alignItems: "center",
									marginTop: "1.52rem",
									marginLeft: ".8rem"
								}}
							>
								<div
									style={{
										paddingLeft: ".1rem",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<FaRegCalendarAlt
										style={{
											width: "1.7rem",
											height: "1.7rem",
											color: "#D8D8D8"
										}}
									/>
								</div>
								<div style={{ marginLeft: "0.5rem" }}>
									<p
										style={{
											marginBottom: "-1px",
											marginLeft: ".1rem",
											color: "#4e4b66",
											fontSize: "14px",
											lineHeight: "22px",
											fontWeight: "400px"
										}}
									>
										Deadline
									</p>
									<p
										style={{
											marginTop: "0px",
											fontWeight: "bold",
											color: "#1c2755",
											fontSize: "18px",
											lineHeight: "20px"
										}}
									>
										{formattedDate}
									</p>
								</div>
							</div>
						</div>
						{/* right child */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingLeft: "1rem",
								paddingRight: "1rem",
								// backgroundColor: "yellow",
								height: "5rem"
							}}
						>
							<div
								style={{
									// padding: ".1rem",
									justifyContent: "center",
									height: "100%",
									alignItems: "center",
									marginTop: "1.52rem",
									marginLeft: ".8rem"
								}}
							>
								{" "}
								<p
									style={{
										marginBottom: "-2px",
										marginLeft: ".1rem",
										color: "#4e4b66",
										fontSize: "14px",
										lineHeight: "22px",
										fontWeight: "400px",
										marginTop: "6px"
									}}
								>
									Effort
								</p>
								<div
									style={{
										marginTop: "6px",
										fontWeight: "bold",
										color: "#1c2755",
										fontSize: "18px",
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
						<div
							style={{
								background: "gray",
								height: "100%",
								width: "1px",
								opacity: "0.8"
							}}
						></div>
						<div
							style={{
								width: "25%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<button
								style={{
									color: "white",
									background: "#00d6dd",
									borderRadius: "0.5rem",
									width: "90%",
									paddingTop: "0.5rem",
									paddingBottom: "0.5rem",
									paddingLeft: "0.7rem",
									paddingRight: "0.7rem",
									opacity: "0.8",
									fontWeight: "bold",
									marginTop: "1rem"
								}}
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LargeCardNotPaid;
