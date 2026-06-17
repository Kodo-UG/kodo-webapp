import React, { useEffect, useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";
import {
  displayErrorNotification,
  displaySuccessNotification,
} from "../../../utils/Toast";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { useHistory } from "react-router-dom";
import truncateText from "../../../utils/truncate";

const MapCardData = () => {
  const [data, setData] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const history = useHistory();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const getScholarship = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/scholarship?page=${pageNumber}`,
        config
      );
      // console.log(res?.data, "==");
      setData(res?.data?.data);
      setSubscription(res.data.subscription);

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (fav) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/user/favourites`,
        {
          id: fav,
        },
        config
      );

      displaySuccessNotification(`${res.data.message}`);
    } catch (error) {
      displayErrorNotification(`${error.response.data.message}`);
    }
  };

  const fetchData = async () => {
    setPageNumber(pageNumber + 1);
    try {
      const res = await axios.get(
        `${BASE_URL}/scholarship?page=${pageNumber}`,
        config
      );

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
    const data = {
      getJobs: false,
    };
    history.push(`/details/${id}`, data);
  };

  useEffect(() => {
   getScholarship();
  }, []);
  
  return (
    <div style={{ width: "100%", marginBottom: "20rem"}}>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <h4 style={{ textAlign: "center", padding: "1rem" }}>
            {data.length < 1 ? " " : "Loading..."}
          </h4>
        }
        endMessage={
          <h4 style={{ textAlign: "center", padding: "1rem" }}>
            <b>Thats all we have for you</b>
          </h4>
        }
      >
        {subscription
          ? data.map((dta) => (
              <LargeCard
                key={dta._id}
                title={dta.title}
                formatDate={dta.deadline}
                award={dta.award}
                subText={truncateText(dta.about, 6)}
                about={dta.about}
                id={dta._id}
                link={dta.link}
                onClick={() => handleClick(dta._id)}
                handleRoute={() => handleRoute(dta._id)}
              />
            ))
          : data.map((dta) => (
              <LargeCardNotPaid
                key={dta._id}
                text="scholarships"
                title={dta.title}
                formatDate={dta.deadline}
                award={dta.award}
                subText={truncateText(dta.about, 7)}
                about={dta.about}
                link={dta.link}
                type="Award"
              />
            ))}
      </InfiniteScroll>
    </div>
  );
};

export default MapCardData;

// handleClick(dta._id)
