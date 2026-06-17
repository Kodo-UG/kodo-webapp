// import { useState } from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { Link } from "react-router-dom";

// const Scholarships = () => {
// 	const config = {
// 		public_key: "FLWPUBK-c0a2bbbc88f38c522c6a798a8af45364-X",
// 		tx_ref: Date.now(),
// 		amount: "10",
// 		currency: "UGX",
// 		payment_options: "card,mobilemoney,ussd",
// 		customer: {
// 			email: "frank.mwesigwa1@gmail.com",
// 			phone_number: "0779825056",
// 			name: "Frank Mwesigwa",
// 		},
// 		customizations: {
// 			title: "Kodo Scholarships Payments",
// 			description: "Payments for Kodo Scholarships",
// 			logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
// 		},
// 	};

// 	const handleFlutterPayment = useFlutterwave(config);
// 	return (
// 		<>
// 			<div class=" py-5 bg-light">
// 				<div class="container">
// 					<div class="row justify-content-center">
// 						<div class="col-md-8 text-center">
// 							<h3 class="mb-3">Pricing to make your Work Effective</h3>
// 							<h6 class="subtitle font-weight-normal">
// 								We offer 100% satisafaction and Money back Guarantee
// 							</h6>
// 						</div>
// 					</div>
// 					<div class="row mt-4">
// 						<div class="col-md-4">
// 							<div class="card card-shadow border-0 mb-4">
// 								<div class="card-body p-4">
// 									<div class="d-flex align-items-center">
// 										<h5 class="font-weight-medium mb-0">
// 											Basic Plan
// 										</h5>
// 										<div class="ml-auto">
// 											<span class="badge badge-danger font-weight-normal p-2">
// 												Popular
// 											</span>
// 										</div>
// 									</div>
// 									<div class="row">
// 										<div class="col-lg-5 text-center">
// 											<div class="price-box my-3">
// 												<sup>$</sup>
// 												<span class="text-dark display-5">10</span>
// 												<h6 class="font-weight-light">MONTHLY</h6>
// 												<Link
// 													style={{
// 														backgroundColor: "#EB1E5E",
// 													}}
// 													class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
// 													onClick={() =>
// 														handleFlutterPayment({
// 															callback: (response) => {

// 																closePaymentModal();
// 															},
// 															onClose: () => {},
// 														})
// 													}
// 												>
// 													CHOOSE PLAN{" "}
// 												</Link>
// 											</div>
// 										</div>
// 										<div class="col-lg-7 align-self-center">
// 											<ul class="list-inline pl-3 font-14 font-weight-medium text-dark">
// 												<li class="py-2">
// 													<i class="icon-check text-info mr-2"></i>{" "}
// 													<span>6 Days a Week </span>
// 												</li>
// 												<li class="py-2">
// 													<i class="icon-check text-info mr-2"></i>{" "}
// 													<span>Dedicated Trainer</span>
// 												</li>
// 												<li class="py-2">
// 													<i class="icon-check text-info mr-2"></i>{" "}
// 													<span>Diet Plan Included </span>
// 												</li>
// 											</ul>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Scholarships;
