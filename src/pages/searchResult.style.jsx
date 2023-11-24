import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top:100px;
`;

export const ImageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchResultText = styled.div`
  text-align: center;
  font-size: 16px;
`;
