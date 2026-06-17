import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateFormData } from "../../toolkit/formReducer";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { useMediaQuery } from "@uidotdev/usehooks";
import FreeScholarshipLarge from "../../components/card/FreeScholarshipLarge";
import FreeScholarship from "../../components/card/FreeScholarship";
import truncateText from "../../utils/truncate";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const FindScholarship = () => {
  const history = useHistory();
  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const dispatch = useDispatch();
  const [freeScholarships, setFreeScholarships] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getFreeScholarships = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/scholarship/free/scholarships?page=${pageNumber}`,
        config
      );
      // console.log(res?.data.data, "==-----");

      setFreeScholarships(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const params = useParams();
  const userId = params.userId;

  // const object = [
  //   {
  //     id: 1,
  //     title: "Scholarships",
  //     text: "We’ve helped students win more than $10 million dollars in scholarships.",
  //     link: "/stepper",
  //     Button: "Sign Up",
  //   },
  //   {
  //     id: 2,
  //     title: "Jobs",
  //     text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
  //     link: "/JobStep1",
  //     Button: "Sign Up",
  //   },
  //   // {
  //   // 	id: 3,
  //   // 	title: "Sports",
  //   // 	text: "Sign up for sports scholarship",
  //   // 	link: "/player",
  //   // 	Button: "Sign Up"
  //   // }
  // ];

  useEffect(() => {
    dispatch(updateFormData({ field: "refer", value: userId }));
  }, []);

  useEffect(() => {
    getFreeScholarships();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");

    if (action) {
      changeButtons(action);
    }
  }, []);

  const changeButtons = (action) => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    button1.textContent = "Sign Up";
    button1.href = "/signin";
    button2.textContent = "Sign Up";
    button2.href = "/signin";
  };

  const handleRoute = () => {
    history.push("/stepper");
  };

  return (
    <div
      style={{
        paddingTop: isSm ? "100px" : "60px",
        paddingBottom: isSm ? "0px" : "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: isSm ? "2rem" : "", width: "100%" }}>
        {isSm
          ? freeScholarships?.map((dta) => (
              <FreeScholarship
                key={dta._id}
                award={dta.award}
                deadline={dta.deadline}
                cardTitle={dta.title}
                id={dta._id}
                link={dta.link}
                about={truncateText(dta.about, 7)}
                type="Award"
                handleRoute={handleRoute}
              />
            ))
          : freeScholarships?.map((dta) => (
              <FreeScholarshipLarge
                key={dta._id}
                award={dta.award}
                deadline={dta.deadline}
                cardTitle={dta.title}
                id={dta._id}
                link={dta.link}
                about={truncateText(dta.about, 7)}
                type="Award"
                handleRoute={handleRoute}
              />
            ))}
      </div>
    </div>
  );
};

export default FindScholarship;
