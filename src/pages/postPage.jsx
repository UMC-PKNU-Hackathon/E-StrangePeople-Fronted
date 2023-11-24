import React, { useState } from 'react';
import * as S from './search.style';
import searchIcon from '../images/search.png';
import Post from '../components/post/Post';
import Map from '../components/map/Map';
import styled from 'styled-components';
import postArticle from '../apis/api/article';

export default function PostPage() {
<<<<<<< HEAD
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
=======
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const handleCoordinatesUpdate = (newCoordinates) => {
    console.log('좌표값이 업데이트되었습니다:', newCoordinates);
    setCoordinates(newCoordinates);
    
>>>>>>> 33af846f7e9f0b7b2946c36ebcb51dae4a2cb56a
  };

  return (
    <PostBox>
      <Wrapper>
<<<<<<< HEAD
        <Map updateAddress={updateAddress} />
=======
        <Map onCoordinatesUpdate={handleCoordinatesUpdate} />
>>>>>>> 33af846f7e9f0b7b2946c36ebcb51dae4a2cb56a
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
