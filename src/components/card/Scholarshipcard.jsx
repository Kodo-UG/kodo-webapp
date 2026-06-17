import React from "react";
import { Card, Button, Col, Row } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const ScholarshipCard = ({
	cardTitle,
	text,
	award,
	deadline,
	subscription
}) => {
	const date = new Date(deadline);
	const formattedDate = date.toLocaleDateString();
	return (
		<Col xs={24} sm={22} md={20} lg={10} xl={14}>
			<Card style={{ width: "35vw" }} className="scholarship-card">
				<Card.Meta title={cardTitle} description={text} />
				<div className="scholarship-details">
					<p className="scholarship-amount">Amount: ${award}</p>
					<p className="scholarship-deadline">Deadline: {formattedDate}</p>
				</div>
				{subscription ? (
					<Button type="primary">Apply Now</Button>
				) : (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between"
						}}
						className="upgrade-section"
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<LockOutlined className="padlock-icon" />
							<p className="upgrade-text">
								Upgrade to apply for this scholarship.
							</p>
						</div>

						<Link to="/payment">
							<Button
								style={{ backgroundColor: "#EB1E5E" }}
								type="primary"
								className=""
							>
								Upgrade Now
							</Button>
						</Link>
					</div>
				)}
			</Card>
		</Col>
	);
};

export default ScholarshipCard;
