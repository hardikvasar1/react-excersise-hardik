import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
export default function demo8() {
  const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
  const listItems = planets.map((planets) => {
    return (
      <ListGroup>
        <ListGroup.Item key={Math.random()}>{planets}</ListGroup.Item>
      </ListGroup>
    );
  });

  return <>{listItems}</>;
}
