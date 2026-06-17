import React, { useState, useEffect } from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import Scholarship from "./Scholarship";
import Favorite from "../../favorite";
import Jobs from "../jobs/Jobs";
import MainProfile from "../Profile";
import RSSUsage from "../../share/RSSUsage";
import RandomImageModal from "./RandomImage";
import { BASE_URL } from "../../../constants/api";
import axios from "axios";

const images = ["/images/ad1.jpg", "/images/ad2.jpg", "/images/ad3.jpg"];
const RootScholarship = () => {
	const [showContent, setShowContent] = useState(0);

	const [modal2Open, setModal2Open] = useState(false);

	const [subscription, setSubscription] = useState(false);

	const closeModal = () => {
		setModal2Open(false);
		localStorage.setItem("modal2Open", "false");
	};

	const openModal = () => {
		setModal2Open(true);
		localStorage.setItem("modal2Open", "true");
	};

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};

	const getScholarship = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/scholarship`, config);
			// console.log(res?.data.subscription, "==-----");

			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
		}
	};

	const renderContent = () => {
		switch (showContent) {
			case 0:
				return <Scholarship />;
			case 1:
				return <Favorite />;
			case 2:
				return <Jobs />;
			case 3:
				return <MainProfile />;
			case 4:
				return <RSSUsage />;

			default:
		}
	};
	useEffect(() => {
		getScholarship();
		const storedModalState = localStorage.getItem("modal2Open");
		if (storedModalState === "false") {
			closeModal();
		} else {
			openModal();
		}
	}, []);

	return (
		<div
			style={{ background: "white" }}
			className="wrappe"
		>
			<MyHeader setShowContent={setShowContent} />
			<Menu setShowContent={setShowContent} />

			<div>{renderContent()}</div>

			{!subscription ? null : (
				<RandomImageModal
					visible={modal2Open}
					closeModal={closeModal}
					images={images}
					show={() => setShowContent(4)}
				/>
			)}

			<Footer />
		</div>
	);
};

export default RootScholarship;
