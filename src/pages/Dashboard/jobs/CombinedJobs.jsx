import React, { useEffect, useState } from "react";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";
import { BASE_URL } from "../../../constants/api";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";

const CombinedJobs = ({ path }) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
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

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "13rem",
        }}
      >
        <img
          style={{
            width: "7rem ",
            height: "7rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
          alt="middle"
        />{" "}
      </div>
    );
  }

  return (
    <div>
      {newJob === false ? (
        ""
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={
            <h4 style={{ textAlign: "center", padding: "1rem" }}>Loading...</h4>
          }
          endMessage={
            <h4 style={{ textAlign: "center", padding: "1rem" }}>
              <b>Thats all we have for you</b>
            </h4>
          }
        >
          <div
            style={{
              padding: "1rem",

              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              // marginLeft: "2.5rem",
              // marginBottom: isSm ? "10rem" : "",
              width: "100%",
            }}
          >
            {data.map((dta) =>
              subscription ? (
                <CardScholarshipSubscribed
                  key={dta._id}
                  award={dta.salary}
                  deadline={dta.deadline}
                  subscription={subscription}
                  cardTitle={dta.title}
                  id={dta._id}
                  link={dta.link}
                  about={dta.about}
                  type="Salary"
                  handleRoute={() => handleRoute(dta._id)}
                />
              ) : (
                <CardScholarship
                  key={dta._id}
                  award={dta.salary}
                  deadline={dta.deadline}
                  text="jobs"
                  type="Salary"
                  path="/jobs"
                />
              )
            )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default CombinedJobs;
