import { useState } from "react";
import "./stepperElement.css";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { updateFormData } from "../../../toolkit/formReducer";
import Footer from "../../../components/Layout/Footer";

import { listArray as list } from "../../../constants/countries";

function StepperElementFour() {
	const list = [
		{
			id: 1,
			text: "High School",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal1"
		},
		{
			id: 2,
			text: "GED",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal1"
		},
		{
			id: 3,
			text: "Associate",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal2"
		},
		{
			id: 4,
			text: "Bachelor's",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal2"
		},
		{
			id: 5,
			text: "Master's",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal4"
		},
		{
			id: 6,
			text: "Doctorate",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal5"
		},
		{
			id: 7,
			text: "Diploma",
			link: "https://res.cloudinary.com/highereducation/image/upload/co_rgb:e22944,e_colorize:100,f_auto,fl_lossy,q_auto,h_48,w_48/v1/Voyager/signal5"
		}
	];

	function changeDivStyle(div) {
		div.style.backgroundColor = "#F9FAFB";
	}

	const dispatch = useDispatch();
	const history = useHistory();
	const [active, setActive] = useState("");

	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const isLg = useMediaQuery(
		"only screen and (min-width : 1250px) and (max-width : 1300px)"
	);

	const handleClick = (text) => {
		dispatch(updateFormData({ field: "educationlevel", value: text }));
	};

	return (
		<div>
			<main
				className="voyager-main flex flex-col min-h-screen "
				role="main"
				style={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				{/* <header className="w-full flex justify-center py-4 bg-white">
					<Link to="/">
						<style>
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
							alt="logo"
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
							<section className="">
								{/* <div
									data-testid="progress-bar"
									className="_progressBar_63yfq_1"
								>
									<div
										className="_progress_63yfq_1"
										style={{ width: "10%" }}
									></div>
								</div> */}
								<div className="_notAnimated_pmptr_10"
									style={{
										marginTop: 20
									}}
								>
									<span className="_headingContainer_1fpvz_1">
										<p>
											First things first, catch us up on your
											education journey so far.
										</p>
										<h2 className="_soloHeading_1fpvz_8"
											style={{
												color: '#1d2855'
											}}
										>
											What’s the highest level of education you’ve
											completed?
										</h2>
									</span>
									<div>
										<div className="_optionGroup_9bife_5 _optionGroupCols4_9bife_70">
											{/* start */}
											{list.map((data) => (
												<div
													onClick={() => {
														setActive(data.id);
														// handleCardClick(data.id)
														handleClick(data.text);
													}}
													// style={divStyle}
													className="_option_9bife_5"
												>
													<div
														className={`${
															data.id === active
																? "clicked"
																: "_optionInner_9bife_23"
														}`}
													>
														<label
															htmlFor="High School "
															className="_optionBody_9bife_90"
															style={{
																marginLeft: isSm ? "-1rem" : "",
																display: isSm ? "flex" : "",
																width: isSm ? "60%" : ""
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
																		alt="signal1"
																		src={data.link}
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
									<div></div>
									<div>
										<span className="_conditional_gamud_1">
											<div>
												<div
													data-testid="callout-field"
													className="_callout_1qfey_1"
												>
													<b>
														We have hundreds of schools to choose
														from.
													</b>
													<p>
														Tell us a little about yourself, and
														we'll find the BEST one for you.
													</p>
												</div>
											</div>
										</span>
									</div>
									<div className="_pageActions_pmptr_26">
										<Link to="/route1">
											<button
												type="button"
												className="_buttonContinue_pmptr_46 _button_pmptr_30"
												data-testid="continue"
												style={{
													backgroundColor: '#00D6DD',
													color: '#1d2855'
												}}
												// onClick={() => history.push("/route1")}
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
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M16.6774 0.468629C17.3023 -0.15621 18.3153 -0.15621 18.9402 0.468629L25.3402 6.86863C25.965 7.49347 25.965 8.50653 25.3402 9.13137L18.9402 15.5314C18.3153 16.1562 17.3023 16.1562 16.6774 15.5314C16.0526 14.9065 16.0526 13.8935 16.6774 13.2686L20.346 9.6H1.80879C0.925131 9.6 0.208786 8.88366 0.208786 8C0.208786 7.11634 0.925131 6.4 1.80879 6.4H20.346L16.6774 2.73137C16.0526 2.10653 16.0526 1.09347 16.6774 0.468629Z"
														fill="#1d2855"
													/>
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
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M3.024 8.8V6.4a6 6 0 0 1 12 0v2.4a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-6a2.4 2.4 0 0 1 2.4-2.4Zm9.6-2.4v2.4h-7.2V6.4a3.6 3.6 0 0 1 7.2 0Z"
												fill="#e22944"
											/>
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
						<a href="https://www.kodoscholarships.com">
							<img
								className="icon-component icon-component--logo-stacked-horizontal "
								style={{ color: "#fff" }}
								src="/images/logo1.svg"
								width="106"
								height="36"
								fill="#fff"
								role="img"
								viewBox="0 0 350 105"
								alt="logo"
							/>
						</a>
						<div className="py-2 divide-x px-4 flex flex-wrap justify-center">
							<a
								className="px-2 text-xs text-white font-bold hover:text-white"
								href="/policy"
								target="_blank"
							>
								Privacy Policy
							</a>
							<a
								className="px-2 text-xs text-white font-bold hover:text-white"
								href="#"
								target="_blank"
							>
								Advertising Disclosure
							</a>
							<a
								className="px-2 text-xs text-white font-bold hover:text-white"
								href="#"
								target="_blank"
							>
								Do Not Sell My Info
							</a>
						</div>
					</div>
				</footer> */}
			</main>
		</div>
	);
}

export default StepperElementFour;
