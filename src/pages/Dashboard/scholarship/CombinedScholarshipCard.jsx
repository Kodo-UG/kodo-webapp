import React, { useEffect, useState } from "react";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";
import { useMediaQuery } from "@uidotdev/usehooks";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { useHistory } from "react-router-dom";

const CombinedScholarshipCard = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	const history = useHistory();

	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	};
	const getScholarship = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}/scholarship?page=${pageNumber}`,
				config
			);
			setData(res?.data?.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchData = async () => {
		setPageNumber(pageNumber + 1);
		try {
			const res = await axios.get(
				`${BASE_URL}/scholarship?page=${pageNumber}`,
				config
			);
			setData(data.concat(res?.data?.data));
			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
		}
	};

	const handleRoute = (id) => {
		history.push(`/details/${id}`);
	};

	useEffect(() => {
		getScholarship();
	}, []);

	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "13rem"
				}}
			>
				<img
					style={{
						width: "7rem ",
						height: "7rem",
						justifyContent: "center",
						alignItems: "center"
					}}
					src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
					alt="middle"
				/>{" "}
			</div>
		);
	}

	return (
		<div>
			<InfiniteScroll
				dataLength={data.length}
				next={fetchData}
				hasMore={true}
				style={{
					width: '100%'
				}}
				loader={
					<h4 style={{ textAlign: "center", padding: "1rem" }}>
						{data.length < 1 ? " " : "Loading..."}
					</h4>
				}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Thats all we have for you</b>
					</p>
				}
			>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
						width: "100%"
					}}
				>
					{!subscription &&
						data?.map((dta) => (
							<CardScholarship
								key={dta.id}
								award={dta.award}
								deadline={dta.deadline}
								subscription={subscription}
								text="scholarships"
								type="Award"
							/>
						))}
					{subscription &&
						data?.map((dta) => (
							<CardScholarshipSubscribed
								key={dta._id}
								award={dta.award}
								deadline={dta.deadline}
								subscription={subscription}
								cardTitle={dta.title}
								id={dta._id}
								link={dta.link}
								about={dta.about}
								type="Award"
								handleRoute={() => handleRoute(dta._id)}
							/>
						))}
				</div>
			</InfiniteScroll>
		</div>
	);
};

export default CombinedScholarshipCard;
