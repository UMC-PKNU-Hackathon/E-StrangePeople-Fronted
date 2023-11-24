import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function Posting(props) {
  const [좋아요, set좋아요] = useState(0);

  function like() {
    set좋아요(좋아요 + 1);
  }

  return (
    <div>
      <Card style={{ margin:"20px",marginTop: '10px', width: '18rem' }}>
        <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={props.thumbnail} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{whiteSpace: "nowrap",textOverflow:"ellipsis",overflow:"hidden"}}>{props.introduction}</Card.Text>
          <Card.Footer>
            <small className="date">
              {props.createdAt} <span onClick={like}>❤️</span> {좋아요}
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

