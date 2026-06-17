import React from "react";
import CustomAlert from "../../../components/alert";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

const RootApplication = () => {
	return (
		<div class="wrapper">
			<MyHeader />
			<Menu />
			<CustomAlert />
			<Footer />
		</div>
	);
};

export default RootApplication;
