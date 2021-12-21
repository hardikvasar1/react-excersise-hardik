import React from 'react';
import './style.css';

export default function demo7() {
  const animals = [
    { label: 'Monkey' },
    { label: 'Cow' },
    { label: 'Sparrow' },
    { label: 'Tiger' },
  ];
  const listItems = animals.map((data, index) => {
    return <li key={index}>{data.label}</li>;
  });
  return <>{listItems}</>;
}
