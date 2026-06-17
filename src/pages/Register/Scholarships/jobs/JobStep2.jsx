/* eslint-disable no-script-url */
import React, { useState } from "react";
import "../stepperElement.css";
import { useDispatch, useSelector } from "react-redux";
import { updateJobData } from "../../../../toolkit/jobReducer";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { displayErrorMessage } from "../../../../utils/Toast";

const countries = [
	{ id: 1, name: "Afghanistan", population: 38928346, area: 652230 },
	{ id: 2, name: "Albania", population: 2877797, area: 28748 },
	{ id: 3, name: "Algeria", population: 43851043, area: 2381741 },
	{ id: 4, name: "Andorra", population: 77265, area: 468 },
	{ id: 5, name: "Angola", population: 32866272, area: 1246700 },
	{ id: 6, name: "Antigua and Barbuda", population: 97928, area: 442 },
	{ id: 7, name: "Argentina", population: 45195777, area: 2780400 },
	{ id: 8, name: "Armenia", population: 2963234, area: 29743 },
	{ id: 9, name: "Australia", population: 25499884, area: 7692024 },
	{ id: 10, name: "Austria", population: 9006400, area: 83871 },
	{ id: 11, name: "Azerbaijan", population: 10139177, area: 86600 },
	{ id: 12, name: "Bahamas", population: 393248, area: 13943 },
	{ id: 13, name: "Bahrain", population: 1701575, area: 760 },
	{ id: 14, name: "Bangladesh", population: 164689383, area: 148460 },
	{ id: 15, name: "Barbados", population: 287371, area: 430 },
	{ id: 16, name: "Belarus", population: 9449323, area: 207600 },
	{ id: 17, name: "Belgium", population: 11589623, area: 30528 },
	{ id: 18, name: "Belize", population: 397621, area: 22966 },
	{ id: 19, name: "Benin", population: 12123200, area: 112622 },
	{ id: 20, name: "Bhutan", population: 771608, area: 38394 }, // ... and so on, including a total of 120 countries
	{ id: 120, name: "Venezuela", population: 28435940, area: 916445 },
	{ id: 21, name: "Bolivia", population: 11673029, area: 1098581 },
	{ id: 22, name: "Bosnia and Herzegovina", population: 3280819, area: 51129 },
	{ id: 23, name: "Botswana", population: 2351627, area: 581730 },
	{ id: 24, name: "Brazil", population: 212559417, area: 8515770 },
	{ id: 25, name: "Brunei", population: 437483, area: 5765 },
	{ id: 26, name: "Bulgaria", population: 6948445, area: 110879 },
	{ id: 27, name: "Burkina Faso", population: 20903273, area: 274200 },
	{ id: 28, name: "Burundi", population: 11890784, area: 27834 },
	{ id: 29, name: "Cabo Verde", population: 555987, area: 4033 },
	{ id: 30, name: "Cambodia", population: 16718965, area: 181035 },
	{ id: 30, name: "Cambodia", population: 16718965, area: 181035 },
	{ id: 31, name: "Cameroon", population: 26545863, area: 475442 },
	{ id: 32, name: "Canada", population: 37742154, area: 9984670 },
	{
		id: 33,
		name: "Central African Republic",
		population: 4829764,
		area: 622984
	},
	{ id: 34, name: "Chad", population: 16425864, area: 1284000 },
	{ id: 35, name: "Chile", population: 19116209, area: 756102 },
	{ id: 36, name: "China", population: 1439323776, area: 9596961 },
	{ id: 37, name: "Colombia", population: 50882891, area: 1141748 },
	{ id: 38, name: "Comoros", population: 869601, area: 1862 },
	{ id: 39, name: "Congo", population: 5518087, area: 342000 },
	{ id: 40, name: "Costa Rica", population: 5094118, area: 51100 },
	{ id: 41, name: "Croatia", population: 4105267, area: 56594 },
	{ id: 42, name: "Cuba", population: 11326616, area: 109884 },
	{ id: 43, name: "Cyprus", population: 1207359, area: 9251 },
	{ id: 44, name: "Czech Republic", population: 10708981, area: 78867 },
	{
		id: 45,
		name: "Democratic Republic of the Congo",
		population: 89561403,
		area: 2344858
	},
	{ id: 46, name: "Denmark", population: 5792202, area: 43094 },
	{ id: 47, name: "Djibouti", population: 988000, area: 23200 },
	{ id: 48, name: "Dominica", population: 71986, area: 751 },
	{ id: 49, name: "Dominican Republic", population: 10847904, area: 48671 },
	{ id: 50, name: "Ecuador", population: 17643060, area: 276841 },
	{ id: 51, name: "Egypt", population: 102334404, area: 1002450 },
	{ id: 52, name: "El Salvador", population: 6486205, area: 21041 },
	{ id: 53, name: "Equatorial Guinea", population: 1402985, area: 28051 },
	{ id: 54, name: "Eritrea", population: 3546421, area: 117600 },
	{ id: 55, name: "Estonia", population: 1326535, area: 45339 },
	{ id: 56, name: "Eswatini", population: 1160164, area: 17364 },
	{ id: 57, name: "Ethiopia", population: 114963588, area: 1104300 },
	{ id: 58, name: "Fiji", population: 896445, area: 18274 },
	{ id: 59, name: "Finland", population: 5540720, area: 338145 },
	{ id: 60, name: "France", population: 65273511, area: 551695 },
	{ id: 61, name: "Gabon", population: 2225734, area: 267668 },
	{ id: 62, name: "Gambia", population: 2416664, area: 10689 },
	{ id: 63, name: "Georgia", population: 3989167, area: 69700 },
	{ id: 64, name: "Germany", population: 83783942, area: 357022 },
	{ id: 65, name: "Ghana", population: 31072940, area: 238533 },
	{ id: 66, name: "Greece", population: 10423056, area: 131957 },
	{ id: 67, name: "Grenada", population: 112523, area: 344 },
	{ id: 68, name: "Guatemala", population: 17915568, area: 108889 },
	{ id: 69, name: "Guinea", population: 13132795, area: 245857 },
	{ id: 70, name: "Guinea-Bissau", population: 1968001, area: 36125 },
	{ id: 71, name: "Guyana", population: 786508, area: 214969 },
	{ id: 72, name: "Haiti", population: 11402528, area: 27750 },
	{ id: 73, name: "Holy See", population: 801, area: 0.44 },
	{ id: 74, name: "Honduras", population: 9904607, area: 112492 },
	{ id: 75, name: "Hungary", population: 9660351, area: 93028 },
	{ id: 76, name: "Iceland", population: 366425, area: 103000 },
	{ id: 77, name: "India", population: 1380004385, area: 3287263 },
	{ id: 78, name: "Indonesia", population: 273523615, area: 1904569 },
	{ id: 79, name: "Iran", population: 83992949, area: 1648195 },
	{ id: 80, name: "Iraq", population: 40222493, area: 438317 },
	{ id: 81, name: "Ireland", population: 4937786, area: 70273 },
	{ id: 82, name: "Israel", population: 8655541, area: 20770 },
	{ id: 83, name: "Italy", population: 60461828, area: 301340 },
	{ id: 84, name: "Jamaica", population: 2961167, area: 10991 },
	{ id: 85, name: "Japan", population: 126476461, area: 377975 },
	{ id: 86, name: "Jordan", population: 10203140, area: 89342 },
	{ id: 87, name: "Kazakhstan", population: 18776707, area: 2724900 },
	{ id: 88, name: "Kenya", population: 53771296, area: 580367 },
	{ id: 89, name: "Kiribati", population: 119449, area: 811 },
	{ id: 90, name: "Kuwait", population: 4270571, area: 17818 },
	{ id: 91, name: "Kyrgyzstan", population: 6524195, area: 199951 },
	{ id: 92, name: "Laos", population: 7275556, area: 236800 },
	{ id: 93, name: "Latvia", population: 1886198, area: 64559 },
	{ id: 94, name: "Lebanon", population: 6825442, area: 10452 },
	{ id: 95, name: "Lesotho", population: 2142249, area: 30355 },
	{ id: 96, name: "Liberia", population: 5057677, area: 111369 },
	{ id: 97, name: "Libya", population: 6871287, area: 1759540 },
	{ id: 98, name: "Liechtenstein", population: 38128, area: 160 },
	{ id: 99, name: "Lithuania", population: 2722291, area: 65300 },
	{ id: 100, name: "Luxembourg", population: 625978, area: 2586 },
	{ id: 101, name: "Madagascar", population: 27691019, area: 587041 },
	{ id: 102, name: "Malawi", population: 19129952, area: 118484 },
	{ id: 103, name: "Malaysia", population: 32365999, area: 330803 },
	{ id: 104, name: "Maldives", population: 521167, area: 298 },
	{ id: 105, name: "Mali", population: 20250834, area: 1240192 },
	{ id: 106, name: "Malta", population: 441543, area: 316 },
	{ id: 107, name: "Marshall Islands", population: 59190, area: 181 },
	{ id: 108, name: "Mauritania", population: 4649658, area: 1030700 },
	{ id: 109, name: "Mauritius", population: 1271768, area: 2040 },
	{ id: 110, name: "Mexico", population: 128932753, area: 1964375 },
	{ id: 111, name: "Micronesia", population: 115023, area: 702 },
	{ id: 112, name: "Moldova", population: 4033963, area: 33851 },
	{ id: 113, name: "Monaco", population: 39244, area: 2.02 },
	{ id: 114, name: "Mongolia", population: 3278290, area: 1564116 },
	{ id: 115, name: "Montenegro", population: 628066, area: 13812 },
	{ id: 116, name: "Morocco", population: 36910560, area: 710850 },
	{ id: 117, name: "Mozambique", population: 31255435, area: 801590 },
	{ id: 118, name: "Myanmar", population: 54409794, area: 676578 },
	{ id: 119, name: "Namibia", population: 2540905, area: 825615 },
	{ id: 120, name: "Nauru", population: 10834, area: 21 },
	{ id: 121, name: "Nepal", population: 29136808, area: 147516 },
	{ id: 122, name: "Netherlands", population: 17134872, area: 41543 },
	{ id: 123, name: "New Zealand", population: 4822233, area: 270467 },
	{ id: 124, name: "Nicaragua", population: 6624554, area: 130373 },
	{ id: 125, name: "Niger", population: 24206636, area: 1186408 },
	{ id: 126, name: "Nigeria", population: 206139587, area: 923768 },
	{ id: 127, name: "North Korea", population: 25778816, area: 120538 },
	{ id: 128, name: "North Macedonia", population: 2083374, area: 25713 },
	{ id: 129, name: "Norway", population: 5421241, area: 323802 },
	{ id: 130, name: "Oman", population: 5106622, area: 309500 },
	{ id: 131, name: "Pakistan", population: 220892340, area: 881913 },
	{ id: 132, name: "Palau", population: 18094, area: 459 },
	{ id: 133, name: "Panama", population: 4314767, area: 75420 },
	{ id: 134, name: "Papua New Guinea", population: 8947027, area: 462840 },
	{ id: 135, name: "Paraguay", population: 7132538, area: 406752 },
	{ id: 136, name: "Peru", population: 32971846, area: 1285216 },
	{ id: 137, name: "Philippines", population: 109581078, area: 300000 },
	{ id: 138, name: "Poland", population: 37846611, area: 312696 },
	{ id: 139, name: "Portugal", population: 10196709, area: 92212 },
	{ id: 140, name: "Qatar", population: 2881060, area: 11586 },
	{ id: 141, name: "Romania", population: 19237691, area: 238397 },
	{ id: 142, name: "Russia", population: 145912025, area: 17098242 },
	{ id: 143, name: "Rwanda", population: 12952218, area: 26338 },
	{ id: 144, name: "Saint Kitts and Nevis", population: 53199, area: 261 },
	{ id: 145, name: "Saint Lucia", population: 183627, area: 617 },
	{
		id: 146,
		name: "Saint Vincent and the Grenadines",
		population: 110947,
		area: 389
	},
	{ id: 147, name: "Samoa", population: 198414, area: 2831 },
	{ id: 148, name: "San Marino", population: 33938, area: 61 },
	{ id: 149, name: "Sao Tome and Principe", population: 219159, area: 964 },
	{ id: 150, name: "Saudi Arabia", population: 34813867, area: 2149690 },
	{ id: 151, name: "Senegal", population: 16743930, area: 196722 },
	{ id: 152, name: "Serbia", population: 8737371, area: 77474 },
	{ id: 153, name: "Seychelles", population: 98347, area: 459 },
	{ id: 154, name: "Sierra Leone", population: 7976983, area: 71740 },
	{ id: 155, name: "Singapore", population: 5850342, area: 728 },
	{ id: 156, name: "Slovakia", population: 5459642, area: 49035 },
	{ id: 157, name: "Slovenia", population: 2078932, area: 20273 },
	{ id: 158, name: "Solomon Islands", population: 686884, area: 28896 },
	{ id: 159, name: "Somalia", population: 15893222, area: 637657 },
	{ id: 160, name: "South Africa", population: 59308690, area: 1221037 },
	{ id: 161, name: "South Korea", population: 51269183, area: 100210 },
	{ id: 162, name: "South Sudan", population: 11193729, area: 644329 },
	{ id: 163, name: "Spain", population: 47329981, area: 505990 },
	{ id: 164, name: "Sri Lanka", population: 21413249, area: 65610 },
	{ id: 165, name: "Sudan", population: 43849260, area: 1886068 },
	{ id: 166, name: "Suriname", population: 586634, area: 163820 },
	{ id: 167, name: "Sweden", population: 10099265, area: 450295 },
	{ id: 168, name: "Switzerland", population: 8654622, area: 41284 },
	{ id: 169, name: "Syria", population: 17500658, area: 185180 },
	{ id: 170, name: "Tajikistan", population: 9537642, area: 143100 },
	{ id: 171, name: "Tanzania", population: 59734213, area: 945087 },
	{ id: 172, name: "Thailand", population: 69799978, area: 513120 },
	{ id: 173, name: "Timor-Leste", population: 1318445, area: 14874 },
	{ id: 174, name: "Togo", population: 8278724, area: 56600 },
	{ id: 175, name: "Tonga", population: 105695, area: 747 },
	{ id: 176, name: "Trinidad and Tobago", population: 1399488, area: 5128 },
	{ id: 177, name: "Tunisia", population: 11818619, area: 163610 },
	{ id: 178, name: "Turkey", population: 84339067, area: 783562 },
	{ id: 179, name: "Turkmenistan", population: 6031200, area: 491210 },
	{ id: 180, name: "Tuvalu", population: 11792, area: 26 },
	{ id: 181, name: "Uganda", population: 45741000, area: 241550 },
	{ id: 182, name: "Ukraine", population: 43733762, area: 603500 },
	{ id: 183, name: "United Arab Emirates", population: 9890402, area: 83600 },
	{ id: 184, name: "United Kingdom", population: 67886011, area: 242900 },
	{ id: 185, name: "United States", population: 331002651, area: 9372610 },
	{ id: 186, name: "Uruguay", population: 3473730, area: 176215 },
	{ id: 187, name: "Uzbekistan", population: 33469203, area: 448978 },
	{ id: 188, name: "Vanuatu", population: 307145, area: 12189 },
	{ id: 189, name: "Vatican City", population: 801, area: 0.44 },
	{ id: 190, name: "Venezuela", population: 28435940, area: 916445 },
	{ id: 191, name: "Vietnam", population: 97338579, area: 331212 },
	{ id: 192, name: "Yemen", population: 29825968, area: 527968 },
	{ id: 193, name: "Zambia", population: 18383955, area: 752612 },
	{ id: 194, name: "Zimbabwe", population: 14862924, area: 390757 }
];

function JobStep2() {
	const dispatch = useDispatch();
	const jobData = useSelector((state) => state.jobData);
	const [country, setCountry] = useState("");

	const history = useHistory();

	// const handleCountryChange = (e) => {
	// 	const { name, value } = e.target;

	// 	// Dispatch an action to update the form data in the Redux store
	// 	dispatch(updateJobData({ field: "country", value: value }));
	// };

	const handleCountryChange = (e) => {
		setCountry(e.target.value);
		dispatch(updateJobData({ field: "country", value: e.target.value }));
	};
	const handleCityChange = (e) => {
		const { name, value } = e.target;

		// Dispatch an action to update the form data in the Redux store
		dispatch(updateJobData({ field: "city", value: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!jobData.country || !jobData.city) {
			displayErrorMessage("Please fill in all the required fields");
			return;
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
			<div
				id="voyager"
				data-basename="/voyager/experience"
				className="flex-1 relative"
			>
				<section id="voyager-blocks">
					<section>
						<section style={{ padding: "3rem" }} className="">
							<div
								data-testid="progress-bar"
								className="_progressBar_63yfq_1"
							>
								<div
									className="_progress_63yfq_1"
									style={{ width: "50%" }}
								></div>
							</div>
							<Link to="/JobStep1">
								<button
									data-testid="button-previous"
									type="button"
									className="_buttonPrevious_pmptr_34 "
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
									<h2 className="_soloHeading_1fpvz_8">
										Where do you currently live?
									</h2>
								</span>
								<form onSubmit={handleSubmit}>
									<div>
										<div className="_fieldGroup_1g3ja_1">
											<select
												className="_textField_fwd9c_1"
												value={country}
												onChange={handleCountryChange}
												required
											>
												<option value="">Select country</option>
												{countries.map((country) => (
													<option
														key={country.id}
														value={country.name}
													>
														{country.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div>
										<div className="_fieldGroup_1g3ja_1">
											<input
												className="_textField_fwd9c_1"
												onChange={handleCityChange}
												name="city"
												type="text"
												id="city"
												label="city"
												placeholder="City"
												required
											/>
										</div>
									</div>
									<div className="_pageActions_pmptr_26">
										<Link to="/JobStep3">
											<button
												type="submit"
												className="_buttonContinue_pmptr_46 _button_pmptr_30"
												data-testid="continue"
												style={{
													color: '#1d2855',
													backgroundColor: '#00d6dd'
												  }}
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
								</form>
								<div className="_pageActions_pmptr_26"></div>
								<p
									style={{ color: "black" }}
									className="_disclaimer_icov9_1"
								>
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
		
		</main>
	);
}

export default JobStep2;
