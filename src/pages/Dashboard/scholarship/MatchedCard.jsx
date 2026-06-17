import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { useQuery } from "react-query";
import { Carousel } from "react-bootstrap";
import { BASE_URL } from "../../../constants/api";
import truncateText from "../../../utils/truncate";

const MatchedCard = ({ title, total }) => {
	const [ads, setAds] = useState([]);

	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const [jobCount, setJobCount] = useState(`${total}`);

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};

	const getAds = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/admin/ads`);

			setAds(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAds();
	}, []);

	useEffect(() => {
		const updateJobCount = () => {
			setJobCount((prevCount) => prevCount + 5);
		};

		const intervalId = setInterval(updateJobCount, 32400000); // 9 hour = 3600000 milliseconds

		return () => clearInterval(intervalId);
	}, []);

	useQuery("/scholarship", getScholarship);

	async function getScholarship() {
		try {
			const res = await axios.get(
				"https://api.kodoscholarship.com/api/v1/scholarship",
				config
			);
			return res?.data;
		} catch (error) {
			throw new Error(error.message || "Failed to fetch scholarships");
		}
	}
	return (
		<>
			<Carousel
				style={{ height: "50vh" }}
				interval={9900}
				slide={true}
				controls={false}
			>
				{ads.map((ad) => (
                    <Carousel.Item>
                        <div
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                display: "flex",


                            }}
                        >
                            {" "}
                            <div
                                className="card"
                                style={{ width: isMd ? "84%" : "" || isSm ? "100%" : "65%", marginTop: "6rem", }}
                            >
                                <div
                                    style={{
                                        display: isSm ? "" : "flex",
                                        justifyContent: "space-between",

                                        alignItems: "center",


                                    }}
                                    className="card-body"
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",

                                        }}
                                    >
                                        <h5 className="card-title">
                                            {ad.title}
                                        </h5>
                                        <img
                                            style={{
                                                height: "13rem",
                                                width: "25rem",
                                                objectFit: "contain",
                                            }}
                                            src={ad.visuals}
                                            alt=""
                                        />
                                    </div>




                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            width: isSm ? "" : "60%",
                                            background: "white"
                                        }}
                                    >
                                        <p
                                            style={{ textAlign: "justify" }}
                                            className="card-text"
                                        >
                                            {truncateText(ad.description, 9)}
                                        </p>
                                        <a
                                            href={`https:/${ad?.company?.website}`}
                                            style={{
                                                backgroundColor: "#EC1D64",
                                                color: "#fff",
                                                fontWeight: "bold",
                                            }}
                                            className="btn "
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                ))}
			</Carousel>
		</>
	);
};

export default MatchedCard;
