import axiosInstance from "../utils";

const getArticleDetail = async (articleId) => {
  try {
    const response = await axiosInstance.get(`/article/detail?introId=${articleId}`);
    
    const postDetail = response.data.PostDetailResponse;
    console.log("받은 데이터:" ,postDetail);
    return postDetail; // 필요한 경우 데이터를 반환하여 추가로 사용할 수 있습니다
  } catch (error) {
    // 에러 처리
    console.error('게시글 상세 정보를 가져오는 중 에러 발생:', error);
    throw error; // 호출자가 처리할 수 있도록 에러 전파
  }
};

const postArticle = async (articleData) => {
	try {
	  const response = await axiosInstance.post('/article', articleData);
	  return response.data;
	} catch (error) {
	  console.error('Error posting article:', error);
	  throw error;
	}
  };
  export default postArticle;

  
