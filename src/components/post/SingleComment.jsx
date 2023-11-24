import * as S from './Comment.style';
export default function SingleComment({comment}) {

  return (
    <S.SingleComment>
        <S.Writer>{comment.writer}</S.Writer>
        <S.Date>{comment.date}</S.Date>
        <div className='content'>{comment.content}</div>
    </S.SingleComment>
  )
}
