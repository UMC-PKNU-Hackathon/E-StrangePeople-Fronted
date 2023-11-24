import axiosInstance from "../utils";

import axios from 'axios';

const getArticleDetail = async (articleId) => {
  try {
    const response = await axios.get(`/article/detail?id=${articleId}`);
    
    // 응답 구조가 예상 형식과 일치한다고 가정합니다.
    const postDetail = response.data.PostDetailResponse;
    
    // postDetail 객체를 필요에 따라 처리하세요
    console.log(postDetail);
    
    return postDetail; // 필요한 경우 데이터를 반환하여 추가로 사용할 수 있습니다
  } catch (error) {
    // 에러 처리
    console.error('게시글 상세 정보를 가져오는 중 에러 발생:', error);
    throw error; // 호출자가 처리할 수 있도록 에러 전파
  }
};

// 사용 예시
const articleId = 1; // 실제 게시글 ID로 교체하세요
getArticleDetail(articleId);


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

  
