import React from 'react';
import './style.css';

export default function demo3() {
  const name = {
    first_name: 'hardik',
    age: '21',
  };
  return (
    <div>
      <h1>
        Hello my name is {name.first_name} and my age is {name.age}
      </h1>
    </div>
  );
}
