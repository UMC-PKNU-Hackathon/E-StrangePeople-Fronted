import * as S from './Post.style';
import React, { useState } from 'react';
import QuillEditor from './QuilEditor';

export default function Post() {
    const [title, setTitle] = useState('');

  return (
    <S.PostContainer>
        <S.TitleContainer>
            <S.Title 
            placeholder="제목을 입력하세요."
            onChange={(event) => setTitle(event.target.value)}
            />
            <S.Button>저장하기</S.Button>
        </S.TitleContainer>    
            {/* <InnerPost/> */}
            <QuillEditor/>
    </S.PostContainer>
  )
}
