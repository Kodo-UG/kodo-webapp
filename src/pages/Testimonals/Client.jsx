import React from "react";

function Client({ name, profession, image, icon, text }) {
	return (
		<div
			className="single-testimonial text-center slick-slide slick-cloned bg-"
			data-slick-index="-3"
			id=""
			aria-hidden="true"
			tabindex="-1"
			style={{ width: "402px", height: "850px" }}
		>
			<div className="qt-img">
				<img src={icon} alt="img" />
			</div>
			<p>{text}</p>
			<div className="testi-author">
				<img src={image} alt="img" />
			</div>
			<div className="ta-info">
				<h6>{name}</h6>
				<span>{profession}</span>
			</div>
		</div>
	);
}

export default Client;
