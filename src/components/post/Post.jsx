import * as S from './Post.style';
import React, { useState } from 'react';
import QuillEditor from './QuilEditor'; 

export default function Post() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleContentChange = (htmlContent) => {
        setContent(htmlContent);
    };

    const handleSave = () => {
        console.log('Title:', title);
        console.log('Content:', content);
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
            <QuillEditor onContentChange={handleContentChange} />
        </S.PostContainer>
    );
}
