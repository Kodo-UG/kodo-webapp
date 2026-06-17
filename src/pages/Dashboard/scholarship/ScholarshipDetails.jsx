import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsBookmark } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useParams, useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { BASE_URL } from "../../../constants/api";
import {
  displayErrorNotification,
  displaySuccessNotification,
} from "../../../utils/Toast";
import truncateText from "../../../utils/truncate";
import './detail.css';

const ScholarshipDetails = () => {
  const location = useLocation();
  const { getJobs } = location?.state || {};
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ads, setAds] = useState([]);
  const [newWindow, setNewWindow] = useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const isSm = useMediaQuery("only screen and (max-width : 1000px)");

  const getScholarship = async () => {
    try {
      if (getJobs) {
        const res = await axios.get(`${BASE_URL}/job/${id}`, config);
        setData(res.data.data);
      } else {
        const res = await axios.get(`${BASE_URL}/scholarship/${id}`, config);
        setData(res.data.data);
      }
    } catch (error) {
     console.log(`${error.response.data.message}`);
    }
  };

  const getAds = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/ads`);
  
      const updatedAds = res.data.data.map(ad => {
        const rawWebsite = ad?.company?.website || '';
  
        const formattedWebsite = rawWebsite.startsWith('http')
          ? rawWebsite
          : `https://${rawWebsite}`;
  
        return {
          ...ad,
          company: {
            ...ad.company,
            website: formattedWebsite
          }
        };
      });
  
      setAds(updatedAds);
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


  useEffect(() => {
    getScholarship();
    getAds();
  }, []);

  const date = new Date(data?.deadline);
  const deadline = date.toLocaleDateString();
  return (
    <div
      style={{
        width: isSm ? "100%" : "80%",
        marginTop: "4rem",
        height: "auto",
        marginBottom: "8rem",
        padding: "1rem",
        fontFamily: "Archivo, sans-serif",
        color: "#1c2755",
      }}
      className=" shadow-md "
    >
      <div
        className={`${isSm ? "" : "row"}`}
        style={{
          display: isSm ? "flex" : "",
          flexDirection: isSm ? "column" : "",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`${isSm ? "w-100" : "col-12  col-md-8"}`}
          style={{ marginBottom: isSm ? "" : "1rem" }}
        >
          <div
            style={{
              height: "8rem",
              color: "#1c2755",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              marginBottom: isSm ? null : "4rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5
                  style={{
                    marginTop: "0px",
                    fontWeight: "bold",
                    fontSize: isSm ? "1.3rem" : "1.9rem",
                  }}
                >
                  {data?.title}
                </h5>
              </div>
              {isSm ? null : (
                <div onClick={() => handleClick(data?._id)}>
                  <BsBookmark
                    style={{
                      height: "20px",
                      width: "20px",
                      fontWeight: "bolder",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "yellow",
              justifyContent: "center",
              background: "white",
              borderRadius: isSm ? "" : "5px",
              padding: "2rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="card-body" style={{ height: "6rem" }}>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  borderBottom: isSm ? "2px solid gray" : "",
                }}
              >
                <div className="d-flex flex-column align-items-center">
                  <p className="mb-1">Award</p>
                  <p
                    style={{
                      marginTop: "0px",
                      fontWeight: "bold",
                      color: "#1c2755",
                      fontSize: isSm ? "1.1rem" : "1.5rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {getJobs ? data?.salary : data?.award}
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p className="mb-1">Deadline</p>
                  <p
                    style={{
                      marginTop: "0px",
                      fontWeight: "bold",
                      color: "#1c2755",
                      lineHeight: "20px",
                      fontSize: isSm ? "1.1rem" : "1.5rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {deadline}
                  </p>
                </div>
                <div
                  style={{ marginTop: "-1rem" }}
                  className="d-flex flex-column align-items-center"
                >
                  <p className="mb-1">Effort</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    fill="none"
                  >
                    <path
                      d="M29.961 13.783a16.45 16.45 0 0 0-1.52-4.985 16.05 16.05 0 0 0-4.38-5.482C17.505-1.992 7.604-.834 2.694 6.118a14.45 14.45 0 0 0-2.31 5.105c-.43 1.84-.499 3.749-.202 5.616-.21-3.603 1.06-7.31 3.444-9.954 4.753-5.419 13.292-5.827 18.264-.562a11.999 11.999 0 0 1 3.298 7.91v.008c-.006.325.051.649.17.952.118.302.294.578.518.81a2.371 2.371 0 0 0 3.437 0A2.483 2.483 0 0 0 30 14.24a2.531 2.531 0 0 0-.039-.458"
                      fill="#1c2755"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="14"
                    fill="none"
                    deg="-90"
                    style={{
                      position: "absolute",
                      marginLeft: "2px",
                      marginTop: "27px",
                      transform: "rotate(-90deg)",
                      height: "19px",
                    }}
                  >
                    <path
                      d="M2.416.288S.992 11.25.993 11.753c.002.394.156.772.43 1.05a1.442 a 1.442 0 0 0 2.068-.003 1.49 1.49 0 0 0 .427-1.053c0-.52-1.502-11.459-1.502-11.459Z"
                      fill="#1c2755"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            {isSm ? null : (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  width: "100%",
                  height: "4rem",
                  color: "white",
                  fontWeight: "bolder",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                <a
                  href={`${data?.link}`}
                  style={{
                    backgroundColor: "#00d6dd",
                    border: "none",
                    color: "white",
                    padding: "1rem",
                    width: "100%",
                    borderRadius: "5px",
                    fontWeight: "bolder",
                    fontSize: "16px",
                  }}
                >
                  Apply
                </a>
              </div>
            )}

            <div>
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: isSm ? "1.7rem" : "2rem",
                  letterSpacing: "1px",
                  textAlign: "left",
                  color: "#1c2755",
                  marginTop: "1rem",
                  fontFamily: 'Archivo'
                }}
              >
                About
              </h4>
              <div
                className="scrollable-container"
                style={{
                  paddingBottom: "1rem",
                  borderBottom: isSm ? "2px solid gray" : "",
                }}
              >
                <p
                  style={{
                    color: "#4e4b66",
                    textAlign: "justify",
                    letterSpacing: "0px",
                    fontSize: isSm ? "1rem" : "1.3rem",
                    fontFamily: 'Archivo'
                  }}
                >
                  {data?.about}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isSm ? "w-100" : "col-12 col-md-4"}`}
          style={{
            padding: isSm ? "" : "4rem",
          }}
        >
          <div
            style={{
              height: "25%",
              marginBottom: "2rem",
              background: "white",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderRadius: isSm ? "" : "5px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                paddingBottom: "2rem",
                borderBottom: isSm ? "2px solid gray" : "",
                width: "100%",
                marginBottom: "1rem",
                color: "#1c2755",
              }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: isSm ? "1rem" : "1.3rem",
                  color: "#1c2755",
                }}
              >
                Status
              </h3>
              <button
                style={{
                  background: "white",
                  height: isSm ? "1rem" : "3rem",
                  borderRadius: "5px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Have you Applied or Won?
                <IoIosArrowDown />
              </button>
            </div>
          </div>
          {isSm ? null : (
            <Carousel interval={3500} slide={true}>
              {ads.map((data) => (
                <Carousel.Item>
                  <div
                    style={{
                      height: "70%",
                      background: "white",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      borderRadius: "5px",
                      padding: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      color: "#1c2755",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: isSm ? "1rem" : "1.3rem",
                      }}
                    >
                      {data.title}
                    </h3>
                    <div
                      style={{
                        height: "70%",
                        marginBottom: "2rem",
                      }}
                    >
                      <img
                        src={`${data.visuals}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        alt="resource"
                      />
                    </div>
                    <p>{truncateText(data.description, 9)}</p>
                    <button
                      className="shadow-sm"
                      style={{
                        border: "2px solid #1c2755",
                        borderRadius: "5px",
                        padding: "0.6rem",
                        fontWeight: "bold",
                        color: "#1c2755",

                      }}

                      // onClick={()=>history.push()}
                    >
                    <a
                      href={
                        data?.company?.website?.startsWith("http")
                          ? data.company.website
                          : `https://${data?.company?.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                    </button>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
        {isSm && (
          <div
            className="fixed-bottom"
            style={{
              background: "white",
              height: "15vh",
              borderRadius: "9px 9px 0px 0px",
              boxShadow: "4px 0px 4px 4px rgba(0, 0, 0, 0.01)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bottom: 0,
              zIndex: 3434154154231652,
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                width: "70%",
                height: "4rem",
                color: "white",
                fontWeight: "bolder",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <a
                href={`${data?.link}`}
                style={{
                  backgroundColor: "#00d6dd",
                  border: "none",
                  color: "white",
                  padding: ".8rem",
                  width: "70%",
                  borderRadius: "5px",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                Apply
              </a>
            </div>
            <div
              style={{
                width: "14%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: ".9rem",
              }}
              onClick={() => handleClick(data?._id)}
            >
              <BsBookmark
                style={{
                  height: "28px",
                  width: "28px",
                  fontWeight: "bolder",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipDetails;
