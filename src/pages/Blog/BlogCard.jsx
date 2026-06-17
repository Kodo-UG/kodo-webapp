import React from "react";
import { Link } from "react-router-dom";
import KodoImageLoader from "../../components/KodoImageLoader";
import truncateText from "../../utils/truncate";

function BlogCard({ image, blogType, tittle, text, id, data }) {
    return (
        <div class="">
            <div
                class="courses-item mb-30 hover-zoomin "
                style={{ height: "38rem" }}
            >
                <div class="thumb fix">
                    <KodoImageLoader src={image} alt="blogImage" />
                </div>
                <div
                    class="courses-content bg-red-600"
                    style={{ height: "45rem" }}
                >
                    <div class="cat">
                        <i class="fal fa-graduation-cap"></i> {blogType}
                    </div>
                    <h3>
                        <a href="#">{truncateText(tittle, 8)}</a>
                    </h3>
                    <p>{truncateText(text, 25)}</p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "10vh",
                        }}
                    >
                        <Link to={`/blog/${id}`} class="readmore">
                            Read More <i class="fal fa-long-arrow-right"></i>
                        </Link>

                        <div
                            style={{
                                marginTop: ".5rem",
                                heigh: 50,
                                width: 50
                            }}
                            className="icon"
                        >
                            <KodoImageLoader

                                src="/book.png"
                                alt="blookImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
