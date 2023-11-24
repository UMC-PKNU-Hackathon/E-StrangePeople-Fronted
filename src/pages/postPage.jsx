import React, { useState } from 'react';
import * as S from './search.style';
import searchIcon from '../images/search.png';
import { useNavigate } from 'react-router-dom';
import Post from '../components/post/Post';
import TravelLoad from '../components/map/TravelLoad';
import Map from '../components/map/Map';
import styled from 'styled-components';

export default function PostPage() {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const handleCoordinatesUpdate = (newCoordinates) => {
    console.log('좌표값이 업데이트되었습니다:', newCoordinates);
    setCoordinates(newCoordinates);
    
  };

  return (
    <PostBox>
      <Wrapper>
        <Map onCoordinatesUpdate={handleCoordinatesUpdate} />
      </Wrapper>
      
      <Container>
         <Post></Post>
      </Container>
    </PostBox>
   
  );
}

const PostBox = styled.div `
display : flex;


`
const Container = styled.div `
    width :50%;
    position : absolute;
    right :0;
    z-index:1;
`
const Wrapper = styled.div `
    width :50%;
    position : absolute;
    left :0;
    z-index:1;
`