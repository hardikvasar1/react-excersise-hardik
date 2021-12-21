import React from 'react';
import './style.css';

export default function App() {
  const name = {
    first_name: 'hardik',
    last_name: 'vasar',
  };
  return (
    <div>
      <h1>
        Hello my name is {name.first_name} and my age is {name.last_name}
      </h1>
    </div>
  );
}
