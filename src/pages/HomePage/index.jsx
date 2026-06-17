import React, { Fragment, useState, useEffect } from "react";
import HeroSection from "../../components/Hero";
import FeaturesGrid from "../../components/FeaturesGrid";
import AboutSection from "../../components/AboutSection";
import VideoSection from "../../components/VideoSection";
import Footer from "../../components/Layout/Footer";
import './index.css';



const HomePage = () => {
	return (
		<div className="w-full">
			<div className="min-h-screen ">
				{/* Header */}

				{/* Hero Section */}
				<HeroSection />

				<FeaturesGrid />
				<AboutSection />
				<VideoSection />
			</div>
    	</div>
	);
};

export default HomePage;
