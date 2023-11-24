import React, { useState } from 'react';
import * as S from './search.style';
import searchIcon from '../images/search.png';
import Post from '../components/post/Post';
import Map from '../components/map/Map';
import styled from 'styled-components';
import postArticle from '../apis/api/article';

export default function PostPage() {
  const [articleData, setArticleData] = useState({
    RouteCreateRequests: [
      {
        introId: 123456789,
        address: '', // Will be updated by the Map component
        content: '', // Will be updated by the Post component
        transportation: '', // Will be updated by the Post component
        expense: 0, // Will be updated by the Post component
      },
    ],
  });

  // Function to update address in articleData
  const updateAddress = (newAddress) => {
    setArticleData((prevData) => ({
      ...prevData,
      RouteCreateRequests: [
        ...prevData,
        {
          ...prevData.RouteCreateRequests[0],
          address: newAddress,
        },
      ],
    }));
  };
  const updatePostData = (newContent, newTransportation, newExpense) => {
    setArticleData((prevData) => ({
      ...prevData,
      RouteCreateRequests: [
        {
          ...prevData.RouteCreateRequests[0],
          content: newContent,
          transportation: newTransportation,
          expense: newExpense,
        },
      ],
    }));
  };

  const handlePostArticle = async () => {
    try {
      const response = await postArticle(articleData);
      console.log('Article posted successfully:', response);
      // Add any additional logic or feedback for successful post
    } catch (error) {
      console.error('Error posting article:', error);
      // Add error handling logic or provide user feedback
    }
  };

  return (
    <PostBox>
      <Wrapper>
        <Map updateAddress={updateAddress} />
      </Wrapper>

      <Container>
        <Post updatePostData={updatePostData} />
        <button onClick={handlePostArticle}>Post Article</button>
      </Container>
    </PostBox>
  );
}

const PostBox = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  z-index: 1;
`;
