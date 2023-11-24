import React, { useState } from 'react';
import * as S from './Post.style';
import adressIcon from '../../images/pin.png';
import costIcon from '../../images/wallet.png';

export default function ReadPost() {
  const [title, setTitle] = useState('제목입니다.');
  const [author, setAuthor] = useState('John Doe'); // 작성자
  const [date, setDate] = useState('2023-11-07'); // 작성날짜
  const [adress, setAdress] = useState('부산광역시');
  const [cost, setCost] = useState('4000');
  const [content, setContent] = useState('내용입니드어 즐거웟십니더');

  return (
    <S.PostContainer>
      <S.MetaContainer>
        <S.Title>{title}</S.Title>
        <S.Author>{`${author}`}</S.Author>
        <S.Date>{`${date}`}</S.Date>
      </S.MetaContainer>
      <S.ContentContainer>
        <div>
        <S.Icon src={adressIcon} alt="Adress Icon" />
        <S.Detail>{`${adress}`}</S.Detail>
        </div>
        <div>
        <S.Icon src={costIcon} alt="Cost Icon" />
        <S.Detail>{`${cost}원`}</S.Detail>
        </div>
        <S.Divider />
        <S.Content>{content}</S.Content>
      </S.ContentContainer>
      <input/>
    </S.PostContainer>
  );
}
