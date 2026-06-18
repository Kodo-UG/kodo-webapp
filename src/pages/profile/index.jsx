// export default index
import React from "react";
import "./index2.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { displaySuccessNotification } from "../../utils/Toast";
import axios from "axios";
import StatsCards from "./cards";
import openSmile from '../../assets/memoji.webp'


function Profile() {
	const isSm = useMediaQuery("only screen and (max-width : 1000px)");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [data, setData] = useState([]);
	const [id, setId] = useState(null);
	const [scholarship, setScholarship] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [firstname, setFirstName] = useState();
	const [lastname, setLastName] = useState();
	const [password, setPassword] = useState();
	const [favData, setFavData] = useState([]);
	const [referCount, setReferCount] = useState(0);

	const [activeTab, setActiveTab] = useState("profileMain");
	const navigate = useNavigate();
	const info = JSON.parse(localStorage.getItem("userData"));

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const userDataPromise = localStorage.getItem("userData");
	const userInfo = JSON.parse(userDataPromise);

	const fetchUser = async () => {
		try {
			const response = await axios.get(
				`https://kodo-backend.onrender.com/api/v1/user/profile/${userInfo.user._id}`,
				config
			);
			setData(response.data.data);
		} catch (error) {
			throw error;
		}
	};

	const handleInputChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleEditUserInfo = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.patch("/user/profile", {
				fname: firstname,
				lname: lastname,
			});

			if (res?.data.data) {
				displaySuccessNotification(res?.data.data);
			}

			fetchUser(id);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleEditPassword = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.patch("/user/profile", {
				password: password,
			});

			if (res?.data.data) {
				displaySuccessNotification(res?.data.data);
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async () => {
		try {
			const data = await axiosInstance.delete(
				"https://kodo-backend.onrender.com/api/v1/user"
			);
			if (data) {
				localStorage.removeItem("token");
				localStorage.removeItem("userData");
				displaySuccessNotification("Account deleted successfully");
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getScholarship = async () => {
		setLoading(true);
		try {
			let res = await axios.get(
				"https://kodo-backend.onrender.com/api/v1/scholarship",
				config
			);

			setScholarship(res.data.count);
			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	const [appliedCount, setAppliedCount] = useState([]);

	const getApplied = async () => {
		try {
			const res = await axios.get(
				"https://kodo-backend.onrender.com/api/v1/user/applications",
				config
			);
			setAppliedCount(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getRefferals = async () => {
		setLoading(true);
		try {
			let response = await axios.get(
				`https://kodo-backend.onrender.com/api/v1/auth/account/referals/${userInfo.user._id}`,
				config
			);
			setReferCount(response.data.data.referals);
			console.log(response);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const fetchFavorites = async () => {
		setLoading(true);
		try {
			let response = await axios.get(
				"https://kodo-backend.onrender.com/api/v1/user/favourites",
				config
			);
			setFavData(response?.data?.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getScholarship();
		fetchFavorites();
		getApplied();
		fetchUser();
		getRefferals();
	}, []);

	return (
		<div className="app-content main-content mt-0 ">
			<div id="google_translate_element"></div>
			<div className="side-app">
				<div
					style={{
						width: "80%",
						marginTop: "5rem",
						marginLeft: isSm ? "" : "19rem",
					}}
					className="main-container container-fluid"
				>
					<div
						className="row"
						id="user-profile"
					>
						{loading ? (
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginTop: "9rem",
								}}
							>
								<img
									style={{
										width: "7rem ",
										height: "7rem",
										justifyContent: "center",
										alignItems: "center",
									}}
									src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
									alt="middle"
								/>{" "}
							</div>
						) : (
							<div className="col-lg-12">
								<div className="card">
									<div className="card-body">
										<div className="">
											<div className="">
												<div className=""
													style={{
														display: 'flex'
													}}
												>	
													<div className="profile-img-main rounded">
														 <img src={openSmile} alt="Memoji" width={68} 
																								style={{
																									borderRadius: 100,
																									
																								}}
																							 />
													</div>
													<div className="ms-4"
													>
														<h4
															style={{
																color: "black",
																marginTop: 6
															}}
														>
															{data.fname +
																" " +
																data.lname}
														</h4>
														<p className="text-muted">
															{
																data.email
															}
														</p>
													</div>
												</div>
													<StatsCards scholarship={scholarship} appliedCount={appliedCount} favData={favData} referCount={referCount} />
											</div>
											{/* <div className="col-lg-12 col-md-12 col-xl-6">
												<div className="d-md-flex flex-wrap justify-content-lg-end">
													<div className="media m-3">
														<div
															style={{
																padding: "1rem",
																borderRadius:
																	"10px",
																marginBottom:
																	"1rem",
																width: "3rem",
																height: "3rem",
																position:
																	"relative",
																lineHeight:
																	" 3rem",
																textAlign:
																	"center",
																fontSize:
																	"1.43rem",
																display: "flex",
																alignItems:
																	"center",
																justifyContent:
																	"center",
															}}
															className="media-icon bg-primary me-3 mt-1"
														>
															<i className="fa fa-compass fs-20 text-white"></i>
														</div>
														<div className="media-body">
															<span className="text-muted">
																Matched
															</span>
															<div
																style={{
																	fontSize:
																		"2rem",
																	marginRight:
																		"2px",
																	color: "#707070",
																}}
																className="fw-semibold fs-25"
															>
																{
																	scholarship
																}
															</div>
														</div>
													</div>
													<div className="media m-3">
														<div
															style={{
																padding: "1rem",
																borderRadius:
																	"10px",
																marginBottom:
																	"1rem",
																width: "3rem",
																height: "3rem",
																position:
																	"relative",
																lineHeight:
																	" 3rem",
																textAlign:
																	"center",
																fontSize:
																	"1.43rem",
																display: "flex",
																alignItems:
																	"center",
																justifyContent:
																	"center",
															}}
															className="media-icon bg-info me-3 mt-1"
														>
															<i className="fa fa-paper-plane fs-20 text-white"></i>
														</div>
														<div className="media-body">
															<span className="text-muted">
																Applied
															</span>
															<div
																style={{
																	fontSize:
																		"1.7rem",
																	marginRight:
																		"2px",
																	color: "#707070",
																}}
																className="fw-semibold fs-25"
															>
																{
																	appliedCount.length
																}
															</div>
														</div>
													</div>
													<div className="media m-3">
														<div
															style={{
																padding: "1rem",
																borderRadius:
																	"10px",
																marginBottom:
																	"1rem",
																width: "3rem",
																height: "3rem",
																position:
																	"relative",
																lineHeight:
																	" 3rem",
																textAlign:
																	"center",
																fontSize:
																	"1.43rem",
																display: "flex",
																alignItems:
																	"center",
																justifyContent:
																	"center",
															}}
															className="media-icon bg-warning me-3 mt-1"
														>
															<i className="fa fa-bookmark fs-20 text-white"></i>
														</div>
														<div className="media-body">
															<span className="text-muted">
																Favorites
															</span>
															<div
																style={{
																	fontSize:
																		"1.7rem",
																	marginRight:
																		"2px",
																	color: "#707070",
																}}
																className="fw-semibold fs-25"
															>
																{
																	favData.length
																}
															</div>
														</div>
													</div>
													<div className="media m-3">
														<div
															style={{
																padding: "1rem",
																borderRadius:
																	"10px",
																marginBottom:
																	"1rem",
																width: "3rem",
																height: "3rem",
																position:
																	"relative",
																lineHeight:
																	" 3rem",
																textAlign:
																	"center",
																fontSize:
																	"1.43rem",
																display: "flex",
																alignItems:
																	"center",
																justifyContent:
																	"center",
															}}
															className="media-icon bg-success  me-3 mt-1"
														>
															<i
																class="fa fa-external-link-square fs-20 text-white"
																aria-hidden="true"
															></i>
														</div>
														<div className="media-body">
															<span className="text-muted">
																Referrals
															</span>
															<div
																style={{
																	fontSize:
																		"1.7rem",
																	marginRight:
																		"2px",
																	color: "#707070",
																}}
																className="fw-semibold fs-25"
															>
																{referCount ||
																	0}
															</div>
														</div>
													</div>
												</div>
											</div> */}
										</div>
									</div>
									<div className="border-top">
										<div className="wideget-user-tab">
											<div className="tab-menu-heading">
												<div
													style={{
														display: "flex",
														flexDirection:
															"row",
													}}
													className="tabs-menu1 "
												>
													<ul
														style={{
															padding: "1rem",
														}}
														className="nav"
													>
														<li
															style={{
																color: "black",
																marginRight:
																	"1rem",
																borderBottom:
																	activeTab ===
																	"profileMain"
																		? "2px solid red"
																		: "none",
																display: "inline",
															}}
														>
															<a
																href="#profileMain"
																className={
																	activeTab ===
																	"profileMain"
																		? "active show"
																		: ""
																}
																data-bs-toggle="tab"
																onClick={() =>
																	handleTabClick(
																		"profileMain"
																	)
																}
																style={{
																	color: "black",
																	fontWeight:
																		"bold",
																}}
															>
																Profile
															</a>
														</li>
														<li
															style={{
																borderBottom:
																	activeTab ===
																	"accountSettings"
																		? "2px solid red"
																		: "none",
																display: "inline",
															}}
														>
															<a
																href="#accountSettings"
																data-bs-toggle="tab"
																onClick={() =>
																	handleTabClick(
																		"accountSettings"
																	)
																}
																style={{
																	color: "black",
																	fontWeight:
																		"bold",
																}}
															>
																Account
																Settings
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-content">
									<div
										className="tab-pane active show"
										id="profileMain"
									>
										<div className="card">
											<div className="card-body p-0">
												<div
													className="table-responsive px-5  "
													style={{
														fontFamily:
															"Poppins, sans-serif",
													}}
												>
													<h3
														className="card-titl  mx-3"
														style={{
															fontFamily:
																"Poppins, sans-serif",
															color: "gray",
															fontSize:
																"18px",
															lineHeight:
																"20px",
															fontWeight:
																"bold",
															margin: "1rem",
															marginBottom:
																"2rem",
														}}
													>
														Personal
														Info
													</h3>
													<table className="table row table-borderless">
														<tbody className="col-lg-12 col-xl-6 p-0 ">
															<tr>
																<td>
																	<strong>
																		First
																		Name
																		:
																	</strong>{" "}
																	{
																		data.fname
																	}
																</td>
															</tr>
															<tr>
																<td>
																	<strong>
																		Location
																		:
																	</strong>{" "}
																	{
																		(data.city,
																		data.country)
																	}
																</td>
															</tr>
															<tr>
																<td>
																	<strong>
																		Subject
																		:
																	</strong>{" "}
																	{
																		data.subject
																	}
																</td>
															</tr>
														</tbody>
														<tbody className="col-lg-12 col-xl-6 p-0 ">
															<tr>
																<td>
																	<strong>
																		Last
																		Name
																		:
																	</strong>{" "}
																	{
																		data.lname
																	}
																</td>
															</tr>
															<tr>
																<td>
																	<strong>
																		Email
																		:
																	</strong>{" "}
																	{
																		data.email
																	}
																</td>
															</tr>
															<tr>
																<td>
																	<strong>
																		Phone
																		:
																	</strong>{" "}
																	{
																		data.phone
																	}
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div className="border-top"></div>

												<div className="border-top"></div>
											</div>
										</div>
									</div>

									<div
										className="tab-pane"
										id="accountSettings"
									>
										<div className="card">
											<div className="card-body">
												<form className="form-horizontal">
													<div className="mb-4 main-content-label">
														Account
													</div>
													<div className="form-group ">
														<div className="row row-sm">
															<div className="col-md-3">
																<label
																	htmlFor="userName"
																	className="form-label"
																>
																	First
																	Name
																</label>
															</div>
															<div className="col-md-9">
																<input
																	type="text"
																	className="form-control"
																	id="userName"
																	placeholder="First Name"
																	defaultValue={
																		data.fname
																	}
																	onChange={handleInputChange(
																		setFirstName
																	)}
																/>
															</div>
														</div>
													</div>
													<div className="form-group ">
														<div className="row row-sm">
															<div className="col-md-3">
																<label
																	htmlFor="userName"
																	className="form-label"
																>
																	Last
																	Name
																</label>
															</div>
															<div className="col-md-9">
																<input
																	type="text"
																	className="form-control"
																	id="userName"
																	placeholder="Last Name"
																	defaultValue={
																		data.lname
																	}
																	onChange={handleInputChange(
																		setLastName
																	)}
																/>
															</div>
														</div>
													</div>
													<div className="form-group ">
														<div className="row row-sm">
															<div
																onClick={() =>
																	handleEditUserInfo()
																}
																className="col-md-12"
															>
																<Link
																	style={{
																		backgroundColor:
																			"#00d6dd",
																		color: "#fff",
																	}}
																	className="btn  my-1 float-end"
																	to="#"
																>
																	{loading
																		? "Updating..."
																		: "Update"}
																</Link>
															</div>
														</div>
													</div>
												</form>
												<form
													onSubmit={
														handleEditPassword
													}
													className="form-horizontal"
												>
													<div className="mb-4 main-content-label">
														Change
														Password
													</div>
													<div className="form-group ">
														<div className="row row-sm">
															<div className="col-md-3">
																<label
																	htmlFor="current_password"
																	className="form-label"
																>
																	Current
																	Password
																</label>
															</div>
															<div className="col-md-9">
																<input
																	type="password"
																	className="form-control"
																	id="current_password"
																	name="current_password"
																	placeholder="Current Password"
																	required
																/>
															</div>
														</div>
													</div>
													<div className="form-group ">
														<div className="row row-sm">
															<div className="col-md-3">
																<label
																	htmlFor="password"
																	className="form-label"
																>
																	New
																	Password
																</label>
															</div>
															<div className="col-md-9">
																<input
																	type="password"
																	className="form-control"
																	id="password"
																	name="password"
																	placeholder="New Password"
																	onChange={handleInputChange(
																		setPassword
																	)}
																	required
																/>
															</div>
														</div>
													</div>

													<div className="form-group float-end">
														<div className="row row-sm">
															<div className="col-md-12">
																<button
																	className="btn  my-1"
																	style={{
																		backgroundColor:
																			"#00d6dd",
																		color: "#fff",
																	}}
																>
																	Change
																	Password
																</button>
															</div>
														</div>
													</div>
												</form>

												<div
													className="form-horizontal"
													style={{
														marginTop:
															"60px",
													}}
												>
													<div className="mt-20 main-content-label">
														Delete
														Account
													</div>

													<div className="form-group ">
														<div className="row row-sm">
															<div className="col-md-12 d-flex justify-content-center">
																<button
																	className="btn btn-danger my-1"
																	onClick={() =>
																		setIsModalOpen(
																			!isModalOpen
																		)
																	}
																>
																	Delete
																	Account
																</button>
															</div>
														</div>
													</div>
													<Modal
														title="Delete Account Confirmation"
														okButtonProps={{
															style: {
																backgroundColor:
																	"#1C2755",
																borderColor:
																	"#1C2755",
															},
														}}
														open={
															isModalOpen
														}
														onOk={
															handleDelete
														}
														onCancel={() =>
															setIsModalOpen(
																!isModalOpen
															)
														}
													>
														<p>
															Are
															you
															sure
															you
															want
															to
															delete
															your
															account?
														</p>
													</Modal>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{/* COL-END */}
					</div>
					{/* ROW-1 CLOSED */}
				</div>
			</div>
		</div>
	);
}

export default Profile;
