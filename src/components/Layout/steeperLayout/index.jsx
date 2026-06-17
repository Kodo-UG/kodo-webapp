import React, { Fragment } from "react";

import HeaderStepper from "./HeaderStepper";
import Footer from "./Footer";

const HeaderLayout = ({ children, nextStep }) => {
	return (
		<Fragment>
			<HeaderStepper />
			<main>{children}</main>
			{/* <Footer nextStep={nextStep} /> */}
		</Fragment>
	);
};

export default HeaderLayout;
