import React from 'react';
import './style.css';

export default function demo7() {
  const animals = [
    { label: 'Horse' },
    { label: 'Turtle' },
    { label: 'Elephant' },
    { label: 'Monkey' },
  ];
  const listItems = animals.map((data, index) => {
    return <li key={index}>{data.label}</li>;
  });
  return <>{listItems}</>;
}
