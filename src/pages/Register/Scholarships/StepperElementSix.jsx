import React, { useState } from "react";
import "./stepperElement.css";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

function StepperElementSix() {
	const list = [
		{
			id: 1,
			text: "As soon as possible",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/fire"
		},
		{
			id: 2,
			text: "In the next 3 months",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/hourglass"
		},
		{
			id: 3,
			text: "3 - 6 months",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/clock"
		},
		{
			id: 4,
			text: " 6 - 12 months",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/calendar"
		},
		{
			id: 5,
			text: "  12 or more months",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/calendarPlus"
		}
	];
	const [active, setActive] = useState("");
	
	const isSm = useMediaQuery("only screen and (max-width : 800px)");

	const dispatch = useDispatch();
	const handleClick = (text) => {
		dispatch(updateFormData({ field: "scholarshipStart", value: text }));
	};
	return (
		<main
			className="voyager-main flex flex-col min-h-screen bg-gray-50"
			role="main"
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			{/* <header
				className="w-full f py-4 bg-white"
				style={{
					display: "flex",
					justifyContent: "center"
				}}
			>
				<Link to="/">
					<style type="text/css">
						{`
        svg.icon-component.icon-component--logo-horizontal:hover {
          fill: var(--secondary-700);
        }
        `}
					</style>
					<img
						className="icon-component icon-component--logo-horizontal"
						src="/images/logo1.svg"
						width="232"
						height="36"
						fill="var(--secondary-600)"
						role="img"
						viewBox="0 0 232 37"
						alt=""
					/>
				</Link>
			</header> */}
			<div
				id="voyager"
				data-basename="/voyager/experience"
				className="flex-1 relative"
			>
				<section id="voyager-blocks">
					<section>
						<section className=""
							style={{
								marginTop: 20
							}}
						>
							<div
								data-testid="progress-bar"
								className="_progressBar_63yfq_1"
							>
								<div
									className="_progress_63yfq_1"
									style={{ width: "16.6667%" }}
								></div>
							</div>
							<Link to="/educationlevel">
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
							<div className="_notAnimated_pmptr_10">
								<span className="_headingContainer_1fpvz_1">
									<p>Thanks for sharing! Let's keep going!</p>
									<h2 className="_soloHeading_1fpvz_8"
										style={{
											color: '#1d2855'
										}}
									>
										How soon were you looking to start this new
										program?
									</h2>
								</span>
								<div>
									<div className="_optionGroup_9bife_5 _optionGroupCols3_9bife_64">
										{/* start */}
										{list.map((data) => (
											<div
												key={data.id}
												onClick={() => {
													setActive(data.id);
													// handleCardClick(data.id)
													handleClick(data.text);
												}}
												className="_option_9bife_5"
											>
												<div
													className={`${
														data.id === active
															? "clicked"
															: "_optionInner_9bife_23"
													}`}
												>
													<input
														id="As soon as possible"
														type="checkbox"
														className="_optionCheckmark_9bife_94"
														data-testid="starttime-0"
														value="0"
													/>
													<label
														htmlFor="As soon as possible"
														className="_optionBody_9bife_90"
														style={{
															marginLeft: isSm ? "-1rem" : "",
															display: isSm ? "flex" : "",
															width: isSm ? "80%" : ""
														}}
													>
														<span className="_optionIcon_9bife_48">
															<div
																style={{
																	height: "1.5rem",
																	width: "1.5rem"
																}}
															>
																<img
																	loading="lazy"
																	src={data.link}
																	alt="fire"
																/>
															</div>
														</span>
														<div>
															<span
																style={{ color: "black" }}
																className="_optionLabel_9bife_106 _normal_9bife_137"
															>
																{data.text}
															</span>
														</div>
													</label>
												</div>
											</div>
										))}
										{/* end */}
									</div>
								</div>
								<div>
									<div
										data-testid="callout-field"
										className="_callout_1qfey_1"
									>
										<p>
											<strong>
												Majority of our programs are online,{" "}
											</strong>
											which means you can start ASAP!
										</p>
									</div>
								</div>
								<div className="_pageActions_pmptr_26">
									<Link to="/route2">
										<button
											type="button"
											className="_buttonContinue_pmptr_46 _button_pmptr_30"
											style={{
												backgroundColor: '#00D6DD',
												color: '#1d2855'
											}}
											data-testid="continue"
										>
											<span>Continue</span>
											<svg
												width="26"
												height="16"
												viewBox="0 0 26 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M16.6774 0.468629C17.3023 -0.15621 18.3153 -0.15621 18.9402 0.468629L25.3402 6.86863C25.965 7.49347 25.965 8.50653 25.3402 9.13137L18.9402 15.5314C18.3153 16.1562 17.3023 16.1562 16.6774 15.5314C16.0526 14.9065 16.0526 13.8935 16.6774 13.2686L20.346 9.6H1.80879C0.925131 9.6 0.208786 8.88366 0.208786 8C0.208786 7.11634 0.925131 6.4 1.80879 6.4H20.346L16.6774 2.73137C16.0526 2.10653 16.0526 1.09347 16.6774 0.468629Z"
													fill="#1d2855"
												></path>
											</svg>
										</button>
									</Link>
								</div>
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
			{/* <footer className="flex justify-center items-center bg-primary-900 mt-4 py-5">
				<div className="flex flex-col items-center justify-center md:flex-row flex-wrap">
					<Link to="/">
						<img
							className="icon-component icon-component--logo-stacked-horizontal"
							style={{ color: "#fff" }}
							src="/images/logo1.svg"
							width="106"
							height="36"
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
							to="/policy"
							target="_blank"
						>
							Do Not Sell My Info
						</Link>
					</div>
				</div>
			</footer> */}
		</main>
	);
}

export default StepperElementSix;
