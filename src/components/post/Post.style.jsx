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

export const ContentContainer = styled.div`
  align-items: center;
  margin:20px;
`;

export const InputTitle = styled.input`
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

export const Title = styled.h1`
  flex: 1;
  width: 80%;
  font-size: 30px;
  font-weight: bold;
`;

export const Content = styled.div`
  width: 90%;
  height: 80vh;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: none;
`;

export const MetaContainer = styled.div`
  margin:20px;
`;

export const Author = styled.span`
  font-weight:bold;
  margin-right:20px;
`;

export const Date = styled.span`
color: #68A1C5;`

export const Detail = styled.span`
margin-left:10px
`

export const Icon = styled.img`
height: 25px;
`;

export const Divider = styled.hr`
  width: 95%;
  margin-top: 10px;
  border: 0.5px solid #ccc;
`;
