import axios from 'axios';

const axiosInstance = axios.create({
	headers: {
	},
	baseURL: "http://localhos8080",
});

export default axiosInstance;