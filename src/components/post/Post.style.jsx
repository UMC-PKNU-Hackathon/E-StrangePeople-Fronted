import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.input`
  flex: 1;
  width: 80%;
  padding: 10px;
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  border: none;
`;

export const Button = styled.button`
  background-color: #88C1E5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: #68A1C5;
  }
`;

export const Content = styled.input`
  width: 90%;
  height: 80vh;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: none;
`;
