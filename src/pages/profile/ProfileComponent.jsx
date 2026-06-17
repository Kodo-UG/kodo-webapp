import React from "react";
import { useState } from "react";
import CustomInput from "../../components/input";
import axiosInstance from "../../api/axiosInstance";

const ProfileComponent = ({
	name,
	email,
	phone,
	city,
	country,
	lname,
	fname
}) => {
	const [bg, setBg] = useState("#EB1E5E");
	const [first_name, setName] = useState(fname);
	const [last_name, setLastName] = useState(lname);
	const [ncity, setCity] = useState(city);
	const [newPhone, setNewPhone] = useState(phone);
	const [newEmail, setNewEmail] = useState(email);
	const [ncountry, setCountry] = useState(country);
	const [loading, setLoading] = useState(false);

	const handleEditUserInfo = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.patch("/user/profile", {
				fname: first_name,
				lname: last_name,
				city: ncity,
				country: ncountry,
				phone: newPhone,
				email: newEmail
			});

			setCity("");
			setCountry("");
			setLastName("");
			setName("");
			setNewEmail("");
			setNewPhone("");

			if (res?.data.data) {
				alert(res?.data.data);
			}
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (setState) => (event) => {
		setState(event.target.value);
	};

	return (
		<div>
			<div
				style={{
					padding: "20px",
					justifyContent: "center",
					alignItems: "center"
				}}
				className="main-body"
			>
				<div className="row gutters-sm">
					<div className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img
										src="https://bootdey.com/img/Content/avatar/avatar7.png"
										alt="Admin"
										className="rounded-circle"
										width={150}
									/>
									<div className="mt-3">
										<h4>{name}</h4>

										<p className="text-muted font-size-sm">
											{city},{country}
										</p>

										<button
											style={{
												backgroundColor: "#EC1D64",
												color: "white"
											}}
											className="btn "
										>
											Subscription Active
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card mb-3">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">First Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{fname}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Last Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{lname}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{email}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Phone</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{phone}
									</div>
								</div>

								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Address</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{city} ,{country}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-12">
										<button
											style={{
												backgroundColor: "#EC1D64",
												padding: "8px",
												width: "90px",
												marginTop: "8px",
												color: "white"
											}}
											type="button"
											class="btn "
											data-toggle="modal"
											data-target="#exampleModalCenter"
										>
											Edit
										</button>
									</div>
								</div>
							</div>
						</div>

						<div
							class="modal fade"
							id="exampleModalCenter"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalCenterTitle"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered"
								role="document"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="exampleModalLongTitle"
										>
											Edit User Information
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div style={{ display: "grid" }} class="modal-body">
										<CustomInput
											// style={{ width: "10rem" }}
											defaultValue={first_name}
											onChange={handleInputChange(setName)}
											name="fname"
											type="text"
											placeholder="Enter first name"
											label="First Name"
										/>

										<CustomInput
											defaultValue={last_name}
											onChange={handleInputChange(setLastName)}
											name="lname"
											type="text"
											placeholder="Enter Last name"
											label="Last Name"
										/>
										<CustomInput
											onChange={handleInputChange(setNewEmail)}
											name="email"
											defaultValue={newEmail}
											type="text"
											placeholder="Enter Email"
											label="Email"
										/>
										<CustomInput
											onChange={handleInputChange(setNewPhone)}
											defaultValue={newPhone}
											name="phone"
											type="text"
											placeholder="Enter Phone Number"
											label="Phone Number"
										/>
										<CustomInput
											onChange={handleInputChange(setCountry)}
											defaultValue={ncountry}
											name="country"
											type="text"
											placeholder="Enter Country"
											label="Country"
										/>
										<CustomInput
											onChange={handleInputChange(setCity)}
											defaultValue={ncity}
											name="city"
											type="text"
											placeholder="Enter City"
											label="City"
										/>
									</div>
									<div class="modal-footer">
										<button
											type="button"
											class="btn btn-secondary"
											data-dismiss="modal"
										>
											Close
										</button>
										<button
											onClick={handleEditUserInfo}
											style={{
												backgroundColor: "#EC1D64",
												color: "white"
											}}
											type="button"
											class="btn "
										>
											{loading ? "Loading..." : "Save "}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileComponent;
