import React from "react";
import { Link } from "react-router-dom";

const NewScholarshipCard = ({
	plan,
	currency,
	amount,
	period,
	description
}) => {
	return (
		<div>
			<div class="col-md-4">
				<div class="card card-shadow border-0 mb-4">
					<div class="card-body p-4">
						<div class="d-flex align-items-center">
							<h5 class="font-medium m-b-0">{plan}</h5>
						</div>
						<div class="row">
							<div class="col-lg-5 text-center">
								<div class="price-box my-3">
									<sup>{currency}</sup>
									<span class="text-dark display-5">{amount}</span>
									<h6 class="font-weight-light">{period}</h6>
									<Link
										style={{ backgroundColor: "#EB1E5E" }}
										class="btn btn-info-gradiant border-0 font-14 text-white p-3 btn-block mt-3"
										to="/"
									>
										CHOOSE PLAN{" "}
									</Link>
								</div>
							</div>
							<div class="col-lg-7 align-self-center">
								<ul class="list-inline pl-3 font-14 font-weight-medium text-dark">
									<li class="py-2">
										<i class="icon-check text-info mr-2"></i>{" "}
										<span>{description} </span>
									</li>
									<li class="py-2">
										<i class="icon-check text-info mr-2"></i>{" "}
										<span>Dedicated Trainer</span>
									</li>
									<li class="py-2">
										<i class="icon-check text-info mr-2"></i>{" "}
										<span>Diet Plan Included </span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewScholarshipCard;
