import React, { useEffect, useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { BASE_URL } from "../../../constants/api";
import { useHistory } from "react-router-dom";
import truncateText from "../../../utils/truncate";
import { useMediaQuery } from "@uidotdev/usehooks";

const MapCardJobs = ({ path }) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [subscription, setSubscription] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
    const isSm = useMediaQuery("only screen and (max-width : 700px)");
    const isLg = useMediaQuery(
        "only screen and (min-width : 1250px) and (max-width : 1300px)"
      );

  const [loading, setLoading] = useState(false);

  const job = JSON.parse(localStorage.getItem("userData"));
  const newJob = job.user.jobAppType;

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/job?page=${pageNumber}`, config);
      setData(res?.data?.data);
      setSubscription(res.data.subscription);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const fetchData = async () => {
    setPageNumber(pageNumber + 1);
    try {
      const res = await axios.get(`${BASE_URL}/job?page=${pageNumber}`, config);

      if (res?.data?.data.length === 0) {
        setHasMore(false);
      }
      setData(data.concat(res?.data?.data));
      setSubscription(res.data.subscription);
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleRoute = (id) => {
    if (id) {
      const data = {
        getJobs: true,
      };
      history.push(`/details/${id}`, data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div style={{ width: "100%", marginBottom: "20rem"}}>
      {newJob === false ? (
      <>
          <div
            style={{
              textAlign: "center",
              marginTop: ".4rem",
              fontFamily: "Montserrat, sans-serif",
              cursor: "pointer",
              marginLeft: isSm ? "" : "1rem",
            }}
          >
            <div
              style={{
                color: '#1d2855',
                fontSize: 30
              }}
            >
              Jobs Available
            </div>
            <p
              onClick={() => history.push("/scholars")}
              style={{
                fontSize: "14px",
                letterSpacing: "1.6px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "rgb(74,74,74)",
              }}
            >
              You Have No! Jobs offer
            </p>
          </div>
      </>
      ) : (
        <>
          <InfiniteScroll
            dataLength={data.length}
            next={fetchData}
            hasMore={hasMore}
            loader={
              <h4 style={{ textAlign: "center", padding: "1rem" }}>
                Loading...
              </h4>
            }
            endMessage={
              <h4 style={{ textAlign: "center", padding: "1rem" }}>
                <b>Thats all we have for you</b>
              </h4>
            }
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "9rem",
                }}
              >
                <img
                  style={{
                    width: "7rem",
                    height: "7rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
                  alt="middle"
                />
              </div>
            ) : data.length === 0 ? (
              <div style={{ textAlign: "center" }}>No Jobs Currently</div>
            ) : (
              data.map((dta) =>
                subscription ? (
                  <LargeCard
                    key={dta._id}
                    award={dta.salary}
                    title={truncateText(dta.title, 4)}
                    formatDate={dta.deadline}
                    type="Salary"
                    subText={truncateText(dta.about, 5)}
                    about={dta.about}
                    link={dta.link}
                    handleRoute={() => handleRoute(dta._id)}
                  />
                ) : (
                  <LargeCardNotPaid
                    key={dta._id}
                    award={dta.salary}
                    formatDate={dta.deadline}
                    text="jobs"
                    type="Salary"
                    path="/jobs"
                  />
                )
              )
            )}
          </InfiniteScroll>
        </>
      )}
    </div>
  );
};

export default MapCardJobs;
