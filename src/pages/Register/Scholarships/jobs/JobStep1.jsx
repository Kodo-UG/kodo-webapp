import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axiosInstance from "../../../../api/axiosInstance";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { updateJobData } from "../../../../toolkit/jobReducer";
import { useMediaQuery } from "@uidotdev/usehooks";
import FreeJobs from "../../../../components/card/FreeJobs";
import FreeJobsLarge from "../../../../components/card/FreeJobsLarge";
import axios from "axios";
import { BASE_URL, config } from "../../../../constants/api";
import truncateText from "../../../../utils/truncate";
import NavHeader from "../../../../components/Layout/NavHeader";

const JobStep1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const [active, setActive] = useState(2);
  const [apply, setApply] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [freeJobs, setFreeJobs] = useState([]);
  const dispatch = useDispatch();

  const userId = localStorage.getItem("refer");
  const fetchJobCategories = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/job/categories");
      setData(res.data.data);
    } catch (error) {
      // console.log(error, "====");
    } finally {
      setLoading(false);
    }
  };

  const getFreeJobs = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/scholarship/free/scholarships?page=${pageNumber}`,
        config
      );
      // console.log(res?.data.data, "==-----");
      console.log(res);

      setFreeJobs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(updateJobData({ field: "refer", value: userId }));
  }, []);

  useEffect(() => {
    getFreeJobs();
  }, []);

  const pickId = (id) => {
    dispatch(updateJobData({ field: "jobcategory", value: id }));

    // setActive(id)
    // try {
    // 	const res = await axiosInstance.post("");
    // } catch (error) {}
  };
  const handleStyle = (id) => {
    setActive(id);
  };

  useMemo(() => {
    fetchJobCategories();
  }, []);

  const handleRoute = () => {
    setApply(true);
  };

  return (
    <main
      className="voyager-main "
      role="main"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
      }}
    >
      <div
        id="voyager"
        data-basename="/voyager/experience"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <section id="voyager-blocks">
          <section>
            <section className="">
              
                <>
                  <div
                    data-testid="progress-bar"
                    className="_progressBar_63yfq_1"
                  >
                    <div
                      className="_progress_63yfq_1"
                      style={{ width: "16.6667%" }}
                    ></div>
                  </div>

                  {/* <Link to="/admissions">
								<button
									data-testid="button-previous"
									type="button"
									className="_buttonPrevious_pmptr_34"
								>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 320 512"
										className="_buttonChevron_pmptr_37"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
											fill="black"
										></path>
									</svg>
									<span className="_buttonText_pmptr_41">Back</span>
								</button>
							</Link> */}

                  <div className="_notAnimated_pmptr_10">
                    <span className="_headingContainer_1fpvz_1">
                      <p>To sign up choose!</p>
                      <h2 className="_soloHeading_1fpvz_8">
                        Choose a profession
                      </h2>
                    </span>

                    {loading ? (
                      <div style={{ textAlign: "center" }}>Loading...</div>
                    ) : (
                      <div className="">
                        <div className="_optionGroup_9bife_5 _optionGroupCols3_9bife_64">
                          {data.map((data) => (
                            <div
                              key={data._id}
                              className="_option_9bife_5"
                              onClick={() => pickId(data._id)}
                            >
                              <div
                                className={`_optionInner_9bife_23  ${
                                  active === data._id
                                    ? "border border-secondary"
                                    : ""
                                }`}
                                onClick={() => {
                                  handleStyle(data._id);
                                }}
                              >
                                <input
                                  id=""
                                  type="checkbox"
                                  className="_optionCheckmark_9bife_94"
                                  data-testid="starttime-0"
                                  value="0"
                                />
                                <label
                                  htmlFor=""
                                  className="_optionBody_9bife_90"
                                >
                                  <div>
                                    <span
                                      style={{
                                        color: "black",
                                        textAlign: "left",
                                      }}
                                      className="_optionLabel_9bife_106 _normal_9bife_137"
                                    >
                                      {data.name}
                                    </span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          ))}

                          {/* More options go here... */}
                        </div>
                      </div>
                    )}

                    <div className="_pageActions_pmptr_26">
                      <Link to="/JobStep2" style={{ marginBottom: "3rem" }}>
                        <button
                          type="button"
                          className="_buttonContinue_pmptr_46 _button_pmptr_30"
                          data-testid="continue"
                          style={{
                            backgroundColor: '#00d6dd',
                            color: '#1d2855'
                          }}
                        >
                          <span>Continue</span>
                          <svg
                            width="26"
                            height="16"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              color: '#1d2855'
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6774 0.468629C17.3023 -0.15621 18.3153 -0.15621 18.9402 0.468629L25.3402 6.86863C25.965 7.49347 25.965 8.50653 25.3402 9.13137L18.9402 15.5314C18.3153 16.1562 17.3023 16.1562 16.6774 15.5314C16.0526 14.9065 16.0526 13.8935 16.6774 13.2686L20.346 9.6H1.80879C0.925131 9.6 0.208786 8.88366 0.208786 8C0.208786 7.11634 0.925131 6.4 1.80879 6.4H20.346L16.6774 2.73137C16.0526 2.10653 16.0526 1.09347 16.6774 0.468629Z"
                              fill="#1d2855"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                    </div>

                    <p className="_disclaimer_icov9_1">
                      <svg
                        width="18"
                        height="20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.024 8.8V6.4a6 6 0 0 1 12 0v2.4a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-6a2.4 2.4 0 0 1 2.4-2.4Zm9.6-2.4v2.4h-7.2V6.4a3.6 3.6 0 0 1 7.2 0Z"
                          fill="#e22944"
                        ></path>
                      </svg>
                      We safeguard your information with 256-bit encryption, the
                      same method employed by most banks and one of the most
                      secure encryption solutions available.
                    </p>
                  </div>
                </>
            </section>
          </section>
        </section>
      </div>
    
    </main>
  );
};

export default JobStep1;
