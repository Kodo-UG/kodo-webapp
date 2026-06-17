import axios from "axios";

const token = localStorage.getItem("token");

const baseURL = "https://kodo-backend.onrender.com/api/v1";

const axiosInstance = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
});

export default axiosInstance;
