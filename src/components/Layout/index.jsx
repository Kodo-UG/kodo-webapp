import React, { Fragment, useState } from "react";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import {Link} from 'react-router-dom';
// import './footer.css';


const Layout = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
		<div
		 	 style={{
				backgroundColor: 'white'
			 }}		
		>
			<NavHeader />
			<main
				style={{
					flex: 1,
  					minHeight: '100vh'
				}}
			>{children}</main>
			<Footer />
		</div>
		<div className="footer-bottom">
			<div
				style={{
					width: '95%',
					margin: 'auto'
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<div>© {new Date().getFullYear()} Kodo Scholarships | All Rights Reserved</div>
					<div className="footer-bottom-links">
					<Link to="/cookies">Cookies</Link>
					<span>|</span>
					<Link to="/sitemap">Site Map</Link>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Layout;
