import React from "react";
import { Card } from "antd";
const DashboardCard = ({ children }) => (
	<Card
		style={{
			width: 300
		}}
	>
		{children}
	</Card>
);
export default DashboardCard;
