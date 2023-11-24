import styled from 'styled-components';

export const CommentContainer = styled.div`
  width: 30%;
  height: 100vh;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const SingleComment = styled.div`
  padding: 10px;
  border: 1px solid #5B5B5B;
  border-radius: 10px
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const Writer = styled.div`
    font-weight:bold;
    font-size: 16px;
  `
  ;

  export const Date = styled.div`
  color:#5B5B5B;
`
;
