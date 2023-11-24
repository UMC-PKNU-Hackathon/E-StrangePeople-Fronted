import React, { useState, useEffect } from 'react';
import * as S from './search.style';
import searchIcon from '../images/search.png';
import ReadPost from '../components/post/ReadPost';
import Map from '../components/map/Map';
import styled from 'styled-components';
import postArticle from '../apis/api/article';
import TravelLoad from '../components/map/TravelLoad';
import getArticleDetail from '../apis/api/article'


export default function ReadPage() {
  const [articleDetail, setArticleDetail] = useState(null);

  useEffect(() => {
    const articleId = 1;

    getArticleDetail(articleId)
      .then((response) => {
        setArticleDetail(response);
      })
      .catch((error) => {
        console.error('Error fetching article detail:', error);
      });
  }, []); // Empty dependency array to run the effect only once on mount
  return (
    <PostBox>
      <Wrapper>
        <TravelLoad></TravelLoad>
      </Wrapper>

      <Container>
        <ReadPost/>
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
