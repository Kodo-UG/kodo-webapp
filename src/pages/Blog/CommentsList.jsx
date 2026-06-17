import React from "react";
import Comment from "./Comment";
import moment from "moment";

const CommentsList = ({ comments }) => {
  return (
    <div className="mt-5">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.user.fname + " " + comment.user.lname}
          timestamp={moment(comment.commentedAt)
            .startOf("milliseconds")
            .fromNow()}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default CommentsList;
