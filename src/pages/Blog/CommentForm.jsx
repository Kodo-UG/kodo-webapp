import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { displaySuccessNotification } from "../../utils/Toast";
import "./CommentForm.css"; // import the external stylesheet

const CommentForm = ({ onCommentSubmit }) => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	const handleInputChange = (event) => {
		setText(event.target.value);
	};

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	};

	const postComment = async () => {
		if (!text.trim()) return;
		setLoading(true);
		try {
			const res = await axios.post(
				`${BASE_URL}/user/add/comment`,
				{ id, comment: text },
				config
			);
			if (res.status === 200) {
				displaySuccessNotification(res.data.message);
			}
			setText("");
			onCommentSubmit();
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="comment-container">
			{/* Optional user image */}
			{/* <img src="/images.png" alt="User" className="user-image" /> */}

			<div className="comment-box">
				<h3 className="comment-title">Add a Comment</h3>
				<textarea
					className="comment-textarea"
					placeholder="Your Comment"
					value={text}
					onChange={handleInputChange}
				/>
				<button className="comment-button" onClick={postComment}>
					{loading ? "Loading..." : "Comment"}
				</button>
			</div>
		</div>
	);
};

export default CommentForm;
