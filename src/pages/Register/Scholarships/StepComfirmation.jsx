import React, { useState } from "react";
import "./stepperElement.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
	displayErrorMessage,
	displaySuccessMessage
} from "../../../utils/Toast";
import axiosInstance from "../../../api/axiosInstance";
import { Input } from "antd";

const { TextArea } = Input;

function StepComfirmation() {
	const userID = localStorage.getItem("userID");
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState(null);

	const history = useHistory();

	const handleCodeChange = (e) => {
		const { name, value } = e.target;
		setCode(value);
	};

	const verifyEmail = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			let response = await axiosInstance.post("/auth/account/verification", {
				id: userID,
				code: code
			});

			if (response.status == "201") {
				displaySuccessMessage(response.data.message);
				history.push("/signin");
			} else {
				displayErrorMessage("Invalid code ");
			}
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	return (
		<main
			role="main"
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				backgroundColor: "gray-50"
			}}
		>
			<header
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					paddingTop: "4px",
					backgroundColor: "white"
				}}
			>
				<Link to="/">
					<style type="text/css">
						{`svg.icon-component.icon-component--logo-horizontal:hover {
                    fill: var(--secondary-700);
                }`}
					</style>
					<img
						className="icon-component icon-component--logo-horizontal"
						src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
						width="232"
						height="36"
						fill="var(--secondary-600)"
						role="img"
						viewBox="0 0 232 37"
						alt=""
					/>
				</Link>
			</header>
			<div
				id="voyager"
				data-basename="/voyager/experience"
				className="flex-1 relative"
			>
				<section id="voyager-blocks">
					<section>
						<section
						>
							<div
								data-testid="progress-bar"
								className="_progressBar_63yfq_1"
							>
								<div
									className="_progress_63yfq_1"
									style={{ width: "50%" }}
								></div>
							</div>
							<Link to="/final">
								<button
									data-testid="button-previous"
									type="button"
									className="_buttonPrevious_pmptr_34"
								>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 320 512"
										className="_buttonChevron_pmptr_37"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
									</svg>
									<span className="_buttonText_pmptr_41">Back</span>
								</button>
							</Link>
							<div
								className="_notAnimated_pmptr_10"
							>
								<span
									style={{ marginTop: "6rem" }}
									className="_headingContainer_1fpvz_1"
								>
									<h2 className="_soloHeading_1fpvz_8">
										Enter verification code sent to your email
									</h2>
								</span>
								<form
									style={{ marginTop: "2rem" }}
									onSubmit={verifyEmail}
								>
									<div>
										<div className="_fieldGroup_1g3ja_1">
											<Input
												className="_textField_fwd9c_1"
												showCount
												maxLength={5}
												onChange={handleCodeChange}
												type="number"
											/>
										</div>
									</div>

									<div className="_pageActions_pmptr_26">
										<button
											onClick={verifyEmail}
											type="submit"
											className="_buttonContinue_pmptr_46 _button_pmptr_30"
											data-testid="continue"
										>
											{loading ? "loading..." : "Comfirm"}
										</button>
									</div>
								</form>
								<div className="_pageActions_pmptr_26"></div>
								<p className="_disclaimer_icov9_1">
									<svg
										width="18"
										height="20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M3.024 8.8V6.4a6 6 0 0 1 12 0v2.4a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-6a2.4 2.4 0 0 1 2.4-2.4Zm9.6-2.4v2.4h-7.2V6.4a3.6 3.6 0 0 1 7.2 0Z"
											fill="#e22944"
										></path>
									</svg>
									We safeguard your information with 256-bit
									encryption, the same method employed by most banks
									and one of the most secure encryption solutions
									available.
								</p>
							</div>
						</section>
					</section>
				</section>
			</div>
			<footer className="flex justify-center items-center fixed-bottom bg-primary-900 mt-4 py-5">
				<div className="flex flex-col items-center justify-center md:flex-row flex-wrap">
					<Link to="/">
						<img
							className="icon-component icon-component--logo-stacked-horizontal"
							style={{ color: "#fff" }}
							src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
							width="56"
							height="56"
							fill="#fff"
							role="img"
							viewBox="0 0 350 105"
							alt=""
						/>
					</Link>
					<div className="py-2 divide-x px-4 flex flex-wrap justify-center">
						<Link
							className="px-2 text-xs text-white font-bold hover:text-white"
							to="/policy"
							target="_blank"
						>
							Privacy Policy
						</Link>
						<Link
							className="px-2 text-xs text-white font-bold hover:text-white"
							to="#"
							target="_blank"
						>
							Advertising Disclosure
						</Link>
						<Link
							className="px-2 text-xs text-white font-bold hover:text-white"
							to="#"
							target="_blank"
						>
							Do Not Sell My Info
						</Link>
					</div>
				</div>
			</footer>
		</main>
	);
}

export default StepComfirmation;
