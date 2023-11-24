import React, { useState } from 'react';
import * as S from './search.style';
import searchIcon from '../images/search.png';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClickBtn = () => {
    if (search.trim() !== '') {
      navigate(`/search/${encodeURIComponent(search)}`);
    }
  };

  return (
    <S.AppContainer>
      <div>
        <S.Input
          type="text"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={onChangeSearch}
        />
        <S.ImageButton>
          <S.IconImage src={searchIcon} alt="Search" onClick={onClickBtn} />
        </S.ImageButton>
      </div>
    </S.AppContainer>
  );
}
