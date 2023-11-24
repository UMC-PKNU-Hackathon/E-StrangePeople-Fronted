import axios from 'axios';

const axiosInstance = axios.create({
	headers: {
	},
	baseURL: "http://43.200.230.191:8080",
});

export default axiosInstance;