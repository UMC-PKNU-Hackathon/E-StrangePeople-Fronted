import React, { useEffect, useState } from 'react';
import * as S from './searchResult.style';
import { useLocation } from 'react-router-dom';
import searchIcon from '../images/search.png';
import { useNavigate } from 'react-router-dom';

export default function SearchResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [editableSearch, setEditableSearch] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query') || '';
    setEditableSearch(decodeURIComponent(queryParam));
  }, [location.search]);

  const onClickBtn = () => {
    if (editableSearch.trim() !== '') {
      navigate(`/search/${encodeURIComponent(editableSearch)}`);
    }
  };

  return (
    <S.AppContainer>
      <div>
        <S.Input
          type="text"
          value={editableSearch}
          onChange={(e) => setEditableSearch(e.target.value)}
        />
        <S.ImageButton>
          <S.IconImage src={searchIcon} alt="Search" onClick={onClickBtn} />
        </S.ImageButton>
      </div>
      <S.SearchResultText>
        "{decodeURIComponent(location.pathname.split('/').pop())}"에 대한 검색결과입니다
      </S.SearchResultText>
    </S.AppContainer>
  );
}
