import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://kodo-backend.onrender.com/api/v1",
	// baseURL: "https://api.kodoscholarship.com/api/v1",
});

apiClient.defaults.headers.post["Content-Type"] = "application/json";
apiClient.interceptors.request.use(
	(config) => {
		// const token = state.accessToken;
		// const auth = token ? `Bearer ${token}` : '';
		// config.headers.common['Authorization'] = auth;
		return config;
	},
	(error) => Promise.reject(error)
);

export default apiClient;
