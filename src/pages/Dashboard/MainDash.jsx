import React from "react";
import MyHeader from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";


const MainDashboard = ({children}) => {
	return (
		<div class="wrapper">
			<MyHeader />
			<Menu />
			{children}
			<Footer />
		</div>
	);
};

export default MainDashboard;
