import * as S from './Post.style';
import React, { useState } from 'react';
import QuillEditor from './QuilEditor';

export default function Post() {
    const [title, setTitle] = useState('');
    const handleSave = () => {
      // Add your save logic here (server)
      console.log('Title:', title);
     
  };


  return (
    <S.PostContainer>
        <S.TitleContainer>
            <S.InputTitle 
            placeholder="제목을 입력하세요."
            onChange={(event) => setTitle(event.target.value)}
            />
            <S.Button onClick={handleSave}>저장하기</S.Button>
        </S.TitleContainer>    
            <QuillEditor/>
    </S.PostContainer>
  )
}
