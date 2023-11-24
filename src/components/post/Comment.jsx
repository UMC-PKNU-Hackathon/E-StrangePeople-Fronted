import React, { useState, Component } from 'react';
import SingleComment from './SingleComment';
import * as S from './Comment.style';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          uuid: 1,
          writer: 'aong13',
          date: '2020-10-10',
          content: '댓글입니다',
        },
      ],
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    let value = document.querySelector('#new-tweet-content').value;
    this.setState({
      comments: [
        ...this.state.comments,
        {
          uuid: this.state.comments.length + 1, // Assign a unique id
          writer: '본인',
          date: new Date().toISOString().slice(0, 10),
          content: value,
        },
      ],
    });
  }

  render() {
    return (
        <S.CommentContainer>
          <ul id="comments">
            {this.state.comments.map((comment) => (
              <SingleComment key={comment.uuid} comment={comment} />
            ))}
          </ul>
        </S.CommentContainer>
    );
  }
}

export default Comment;
