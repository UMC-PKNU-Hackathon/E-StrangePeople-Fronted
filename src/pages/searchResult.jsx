// import React, { useEffect, useState } from 'react';
// import * as S from './searchResult.style';
// import { useLocation } from 'react-router-dom';
// import searchIcon from '../images/search.png';
// import { useNavigate } from 'react-router-dom';
// import Posts from './Posts';

// export default function SearchResult() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [editableSearch, setEditableSearch] = useState('');

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const queryParam = params.get('query') || '';
//     setEditableSearch(decodeURIComponent(queryParam));
//   }, [location.search]);

//   const onClickBtn = () => {
//     if (editableSearch.trim() !== '') {
//       navigate(`/search/${encodeURIComponent(editableSearch)}`);
//     }
//   };

//   return (
//     <S.AppContainer>
//       <div>
//         <S.Input
//           type="text"
//           value={editableSearch}
//           onChange={(e) => setEditableSearch(e.target.value)}
//         />
//         <S.ImageButton>
//           <S.IconImage src={searchIcon} alt="Search" onClick={onClickBtn} />
//         </S.ImageButton>
//       </div>
//       <S.SearchResultText>"{location.search}"에 대한 검색결과입니다</S.SearchResultText>
//     </S.AppContainer>
//     <Posts />
//   );
// }

import React, { useEffect, useState } from 'react';
import * as S from './searchResult.style';
import { useLocation } from 'react-router-dom';
import searchIcon from '../images/search.png';
import { useNavigate } from 'react-router-dom';
import Posts from './Posts'; 

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
<<<<<<< HEAD
      <S.SearchResultText>"{location.search}"에 대한 검색결과입니다</S.SearchResultText>
      
      {/* 검색 결과를 표시하기 위해 Posts 컴포넌트를 렌더링 */}
      <Posts searchQuery={editableSearch} />
=======
      <S.SearchResultText>
        "{decodeURIComponent(location.pathname.split('/').pop())}"에 대한 검색결과입니다
      </S.SearchResultText>
>>>>>>> forMerge1
    </S.AppContainer>
  );
}
