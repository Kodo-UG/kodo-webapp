import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import axiosInstance from "../../api/axiosInstance";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";
import "../Login/custom.css";

export default function PasswordReset() {
	const [password, setPassword] = useState();
	const history = useHistory();
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const params = useParams();

	let token = params.token;

	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	console.log(token, "==");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await axiosInstance.post(
				`/auth/password/reset/${token}`,
				{
					password
				}
			);
			console.log(data);
			if (data.status == "200") {
				displaySuccessMessage("Passsword changed successfully");
				history.push("/signin");
			} else {
				displayErrorMessage("Password Reset failed");
			}
		} catch (error) {
			displayErrorMessage(error.message);
		}
	};
	return (
		<section
			className=" fxt-template-layout1"
			style={{ background: "white", height: "100vh" }}
		>
			<div className="container-fluid " style={{ display: "flex" }}>
				<div
					className="col-md-6 col-12 "
					style={{
						background: "#fff",
						height: "100vh"
					}}
				>
					<div
						className="fxt-content"
						style={{
							background: "white",
							height: "100%"
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between"
							}}
							className="fxt-header"
						>
							<Link to="/" className="fxt-logo">
								<img
									src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
									alt="Logo"
								/>
							</Link>
							<div className="fxt-page-switcher">
								<Link to="/signin" className="switcher-text1 active">
									Login
								</Link>
								<Link to="/login" className="switcher-text1">
									| SignUp
								</Link>
							</div>
						</div>
						<div className="fxt-form">
							<h2>Reset PassWord</h2>
							<p>Proceed With Password Reset</p>
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<div className="fxt-transformY-50 fxt-transition-delay-1 ">
										<input
											type="text"
											className="form-control"
											name="password-reset"
											value={password}
											placeholder="Enter New Password"
											required
											style={{
												borderRadius: "0",
												minHeight: "40px",
												WebkitBoxShadow: "none",
												boxShadow: "none",
												border: "0",
												borderBottom: "1px solid #e7e7e7",
												padding: "10px 30px 10px 0",
												color: "#111111",
												backgroundColor: "#ffffff"
											}}
											onChange={handleChange(setPassword)}
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="fxt-transformY-50 fxt-transition-delay-3">
										<div className="fxt-content-between">
											<button type="submit" className="fxt-btn-fill">
												Confirm
											</button>
											<Link to="/signin" className="switcher-text2">
												Back to Login
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				{isSm ? (
					""
				) : (
					<div
						className="col-md-6 col-12 fxt-none-767 fxt-bg-img "
						style={{
							backgroundImage:
								'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688935613/bg1-l_rvlan9.jpg")',
							backgroundPosition: "center",
							backgroundSize: "cover"
						}}
					></div>
				)}
			</div>
		</section>
	);
}
