import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { FaShare } from "react-icons/fa";
import KodoImageLoader from "../../components/KodoImageLoader";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "./blog.css";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { displaySuccessNotification } from "../../utils/Toast";

const BlogDetails = () => {
    // Access the id parameter from the URL.
    const { id } = useParams();

    const [blog, setBlog] = useState("");

    const [comments, setComments] = useState([]);

    const isSm = useMediaQuery("only screen and (max-width : 700px)");

    const isMd = useMediaQuery(
        "only screen and (min-width : 700px) and (max-width : 1250px)"
    );

    const isLg = useMediaQuery(
        "only screen and (min-width : 1250px) and (max-width : 1300px)"
    );
    const history = useHistory();

    const getBlog = async () => {
        try {
            const res = await axiosInstance.get(`/blogs/${id}`);
            setComments(res.data.data.comments);
            setBlog(res.data.data);
        } catch (error) { }
    };

    const handleShareClick = () => {
        const blogUrl = window.location.href;
        navigator.clipboard.writeText(blogUrl);
        displaySuccessNotification("Blog URL copied to clipboard!");
    };

    const handleCommentSubmit = async () => {
        try {
            const res = await axiosInstance.get(`/blogs/${id}`);

            setComments(res.data.data.comments);

            // setComments("");
        } catch (error) { }
    };

    // console.log("BLOG:", comments);

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <>
            {blog?.title ? (
                <div
                    style={{
                        // height: "100vh",
                        marginTop: isSm ? "0rem" : "5rem",
                        paddingLeft: isSm ? "2rem" : "5rem",
                        paddingRight: isSm ? "2rem" : "5rem",
                        // fontFamily: "montserrat, san-serif"
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                        className="p-3 p-md-4  d-flex flex-column flex-md-row"
                    >
                        <div
                            // style={{
                            //   overflow: "scroll",
                            //   overflowX: "hidden",
                            // }}
                            className=""
                        >
                            <div
                                style={{
                                    overflow: "hidden",
                                    marginBottom: "1rem",
                                }}
                                className=""
                            >
                                <p
                                    style={{
                                        fontSize: isSm
                                            ? "1.4rem"
                                            : "" || isMd
                                                ? "2.1rem"
                                                : "" || isLg
                                                    ? "2.4rem"
                                                    : "2.4rem",
                                    }}
                                    className="font-weight-bold"
                                >
                                    {" "}
                                    {blog?.title}
                                </p>

                                {/* <div
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        maxHeight: "27rem",
                                    }}
                                >
                                    <KodoImageLoader
                                        src={blog?.image}
                                        alt="blogImage"
                                    />
                                </div> */}
                            </div>

                            <div
                                style={{
                                    backgroundColor: "#1c2755",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    borderRadius: 6,
                                }}
                                className={`w-100 d-flex flex-row p-2 ${isLg ? "px-4" : ""
                                    }`}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: isSm
                                            ? "100%"
                                            : "" || isMd
                                                ? "50%"
                                                : "",
                                    }}
                                    className=""
                                >
                                    <div
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "18px",
                                            overflow: "hidden",
                                            border: "2px solid #00d6dd",
                                        }}
                                        className="me-4"
                                    >
                                        <KodoImageLoader
                                            src={blog?.image}
                                            alt="blogImage"
                                        />
                                    </div>

                                    <button
                                        style={{
                                            textAlign: "left",
                                            marginRight: "1rem",
                                            fontSize: "10px",
                                        }}
                                        className=" text-white"
                                    >
                                        <span style={{ fontWeight: "bold" }}>
                                            Posted By
                                        </span>

                                        <br />
                                        <span
                                            style={{
                                                opacity: "0.7",
                                            }}
                                        >
                                            {blog?.creator?.fname}
                                        </span>
                                    </button>

                                    <button
                                        style={{
                                            textAlign: "left",
                                            fontSize: "10px",
                                        }}
                                        className="text-white"
                                    >
                                        <span style={{ fontWeight: "bold" }}>
                                            Posted On
                                        </span>

                                        <br />
                                        <span
                                            style={{
                                                opacity: "0.7",
                                            }}
                                        >
                                             {new Date(blog.createdAt).toLocaleDateString()}
                                        </span>
                                    </button>
                                </div>

                                <button
                                    style={{
                                        // display: isSm && "none",
                                        backgroundColor: "#00d6dd",
                                        color: "white",
                                        fontWeight: "normal",
                                        cursor: "pointer",
                                        paddingRight: ".5rem",
                                        paddingLeft: ".5rem",
                                        paddingTop: ".1rem",
                                        paddingBottom: ".1rem",
                                        borderRadius: 20,
                                    }}
                                    onClick={handleShareClick}
                                // className="mr-6"
                                >
                                    <span
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {" "}
                                        <span
                                            style={{
                                                marginRight: isSm
                                                    ? "2px"
                                                    : "3px",
                                            }}
                                        >
                                            {" "}
                                            <FaShare size={15} />
                                        </span>
                                        <span>share</span>
                                    </span>
                                </button>
                            </div>

                            <div
                                style={{
                                    textAlign: "justify",
                                    lineHeight: isSm ? "1.6rem" : "2rem",
                                }}
                                className="mt-5"
                            >
                                {blog?.description}
                            </div>

                            <div
                                style={{
                                    width: "100%",
                                }}
                                className="mt-5"
                            >
                                <p
                                    style={{
                                        fontSize: isSm
                                            ? "1rem"
                                            : "" || isMd
                                                ? "2rem"
                                                : "" || isLg
                                                    ? "2.3rem"
                                                    : "2.3rem",
                                    }}
                                    className="font-weight-bold"
                                >
                                    Comments
                                </p>

                                <CommentForm
                                    onCommentSubmit={handleCommentSubmit}
                                />
                                <CommentsList comments={comments} />
                            </div>
                        </div>

                        <div
                            style={{
                                marginLeft: "3rem",
                                display: isSm
                                    ? "none"
                                    : "" || isMd
                                        ? "none"
                                        : "flex",
                                width: "2000px",
                                height: "700px",
                            }}
                        >
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
                                    Resources
                                </h3>
                                <div
                                    style={{
                                        height: "70%",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <img
                                        src="/images/interracial.jpg"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        alt="resource"
                                    />
                                </div>
                                <p>
                                    You can checkout more details about kodo
                                    scholarship from our blog site .
                                </p>
                                <button
                                    className="shadow-sm"
                                    style={{
                                        border: "2px solid #1c2755",
                                        borderRadius: "5px",
                                        padding: "0.6rem",
                                        fontWeight: "bold",
                                        color: "#1c2755",
                                    }}
                                    onClick={() => {
                                        history.push("/blog");
                                    }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div
                        style={{
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            style={{
                                width: "7rem ",
                                height: "7rem",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            src="/images/loader.gif"
                            alt="middle"
                        />{" "}
                    </div>
                </>
            )}
        </>
    );
};

export default BlogDetails;
