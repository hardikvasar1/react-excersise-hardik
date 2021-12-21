import React from 'react';
import './style.css';

export default function demo7() {
  const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];
  const listItems = animals.map((animals) => {
    return <li>{animals}</li>;
  });
  return <>{listItems}</>;
}
