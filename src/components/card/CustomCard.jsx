import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ total, text, link , bg }) => {
	return (
		<div>
			<div className="col-lg-3 col-6">
				<div className={`small-box  ${bg}`}>
					<div className="inner">
						<h3>{total}</h3>
						<p> {text}</p>
					</div>
					<div className="icon">
						<i className="ion ion-bag" />
					</div>
					<Link to={`${link}`} className="small-box-footer">
						More info <i className="fas fa-arrow-circle-right" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CustomCard;
