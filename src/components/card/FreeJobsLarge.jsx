import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "antd";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";

const FreeJobsLarge = ({
  cardTitle,
  award,
  about,
  onClick,
  handleRoute,
  deadline,
}) => {
  const date = new Date(deadline);
  const formattedDate = date.toLocaleDateString();
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const timeDifference = deadlineDate.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const isMd = useMediaQuery(
    "only screen and (min-width : 700px) and (max-width : 1250px)"
  );

  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
            cursor: "pointer",
            padding: "8px",
            width: isMd ? "80%" : "65%",
            // marginLeft: isMd ? "6rem" : "17rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* left div */}
          <div
            style={{
              height: "100%",
              width: "70%",
              borderRadius: "5px 0px  0px",
            }}
          >
            <div
              style={{
                paddingTop: ".4rem",
                marginLeft: "1rem",
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: isMd ? "1" : "1.46rem",
                  color: "#125875",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  fontFamily: "poppins",
                  whiteSpace: "break-spaces",
                  letterSpacing: "2px",
                  textAlign: "left",
                }}
              >
                {cardTitle}
              </h2>
              <p
                style={{
                  letterSpacing: "1.3px",
                  textAlign: "left",
                  fontFamily: "Poppins,san-serif",
                  marginLeft: ".1rem",
                  color: "#4e4b66",
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 500,
                }}
              >
                {about}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                height: "5rem",
              }}
            >
              {/* left child div */}
              <div
                style={{
                  display: "flex",
                  padding: ".1rem",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    paddingLeft: ".1rem",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaAward
                    style={{
                      width: "1.7rem",
                      height: "1.7rem",
                      color: "#D8D8D8",
                    }}
                  />
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                    marginTop: "1.52rem",
                    marginLeft: ".8rem",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      marginBottom: "-1px",
                      marginLeft: ".1rem",
                      color: "#4e4b66",
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: "400px",
                    }}
                  >
                    Award
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      fontWeight: "bold",
                      color: "#125875",
                      fontSize: isMd ? "1.1" : "1.2rem",
                      fontFamily: "Poppins",
                      letterSpacing: "2px",
                    }}
                  >
                    {award}
                  </p>
                </div>
              </div>
              {/* middle child */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  height: "5rem",
                }}
              >
                <div
                  style={{
                    paddingLeft: ".1rem",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaRegCalendarAlt
                    style={{
                      width: "1.7rem",
                      height: "1.7rem",
                      color: "#D8D8D8",
                    }}
                  />
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                    marginTop: "1.52rem",
                    marginLeft: ".8rem",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      marginBottom: "-1px",
                      marginLeft: ".1rem",
                      color: "#4e4b66",
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: "400px",
                    }}
                  >
                    Deadline
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      fontWeight: "bold",
                      color: "#125875",
                      lineHeight: "20px",
                      fontSize: "1.3rem",
                      fontFamily: "Poppins",
                      letterSpacing: "2px",
                    }}
                  >
                    {formattedDate}
                  </p>
                </div>
              </div>
              {/* right child */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  height: "5rem",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                    marginTop: "1.52rem",
                    marginLeft: ".8rem",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      marginBottom: "-1px",
                      marginLeft: ".1rem",
                      color: "#4e4b66",
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: "400px",
                    }}
                  >
                    Effort
                  </p>
                  <div
                    style={{
                      marginTop: "0px",
                      fontWeight: "bold",
                      color: "#125875",
                      fontSize: "18px",
                      lineHeight: "20px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="17"
                      fill="none"
                    >
                      <path
                        d="M29.961 13.783a16.45 16.45 0 0 0-1.52-4.985 16.05 16.05 0 0 0-4.38-5.482C17.505-1.992 7.604-.834 2.694 6.118a14.45 14.45 0 0 0-2.31 5.105c-.43 1.84-.499 3.749-.202 5.616-.21-3.603 1.06-7.31 3.444-9.954 4.753-5.419 13.292-5.827 18.264-.562a11.999 11.999 0 0 1 3.298 7.91v.008c-.006.325.051.649.17.952.118.302.294.578.518.81a2.371 2.371 0 0 0 3.437 0A2.483 2.483 0 0 0 30 14.24a2.531 2.531 0 0 0-.039-.458"
                        fill="#125875"
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
                        marginLeft: "12px",
                        marginTop: "-12px",
                        transform: "rotate(-90deg)",
                        height: "22px",
                      }}
                    >
                      <path
                        d="M2.416.288S.992 11.25.993 11.753c.002.394.156.772.43 1.05a1.442 1.442 0 0 0 2.068-.003 1.49 1.49 0 0 0 .427-1.053c0-.52-1.502-11.459-1.502-11.459Z"
                        fill="#125875"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right div */}
          <div
            style={{
              width: "1px",
              backgroundColor: "rgba(128, 128, 128, 0.3)",
              margin: "2rem 0",
              height: "8rem",
              alignContent: "center",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "30%",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "5rem",
                marginTop: "1rem",
                marginRight: "2rem",
                color: "#4e4b66",
              }}
            >
              <div
                style={{
                  width: "70%",
                  padding: "2px",
                  marginRight: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {daysDifference === -1 ? (
                  <div
                    style={{
                      background: "#F79720",
                      paddingLeft: "0.3rem",
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: "bold",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    expired
                  </div>
                ) : daysDifference === 1 ? (
                  <div
                    style={{
                      background: "#F79720",
                      paddingLeft: "0.3rem",
                      color: "white",
                      borderRadius: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Deadline Today
                  </div>
                ) : daysDifference === 2 ? (
                  <div
                    style={{
                      background: "#F79720",
                      paddingLeft: "0.3rem",
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ marginLeft: "2rem" }}>
                      {daysDifference} days left
                    </div>
                  </div>
                ) : null}
              </div>
              <BsBookmark
                onClick={onClick}
                style={{
                  height: "20px",
                  width: "20px",
                  fontWeight: "bolder",
                }}
              />
              <BsThreeDotsVertical
                style={{
                  height: "20px",
                  width: "20px",
                  fontWeight: "bolder",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleRoute}
                style={{
                  backgroundColor: "#EC1D64",
                  width: "80%",
                }}
                type="primary"
                block
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeJobsLarge;
