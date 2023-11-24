import React, { useState } from 'react';
import * as S from './search.style';
import searchIcon from '../images/search.png';
import { useNavigate } from 'react-router-dom';
import Post from '../components/post/Post';
import TravelLoad from '../components/map/TravelLoad';
import Map from '../components/map/Map';
import styled from 'styled-components';

export default function PostPage() {

  return (
    <PostBox> 
            <Wrapper>
            <Map></Map>
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