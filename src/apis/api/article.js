import axiosInstance from "../utils";

const getArticles = async (parameter) => {
  try {
    const { data } = await axiosInstance.get(`/articles/${parameter.location}/${parameter.season}/${parameter.period}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
