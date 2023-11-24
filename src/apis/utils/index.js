import axios from 'axios';

const axiosInstance = axios.create({
	headers: {
	},
	baseURL: "url",
});

export default axiosInstance;