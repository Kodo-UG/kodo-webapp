import React from "react";
import { Link } from "react-router-dom";
function LoginComponent() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				marginTop: "10px",
				marginBottom: "40px",
				justifyContent: "space-between",
				flexDirection: "row"
			}}
		>
			<div>
				<img
					src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688382432/logo-kodo_mtlh4q.png"
					width={200}
					alt="logo"
				/>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",
					cursor: "pointer"
				}}
			>
				<Link
					to="/login"
					style={{
						color: "#EB1E5E",
						transition:
							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
						fontFamily: "Arial, sans-serif",
						fontSize: "24px"
					}}
				>
					Login |{" "}
				</Link>
				<Link
					to="/admissions"
					style={{
						color: "gray",
						transition:
							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
						fontFamily: "Arial, sans-serif",
						fontSize: "24px"
					}}
				>
					Sign up
				</Link>
			</div>
		</div>
	);
}

export default LoginComponent;
