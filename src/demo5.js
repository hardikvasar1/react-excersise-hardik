import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function demo5() {
  const List = [
    <li>
      <a href="https://www.google.co.in/">Google</a>
    </li>,
    <li>
      <a href="https://www.amazon.in/">Amazon</a>
    </li>,
    <li>
      <a href="https://www.wikipedia.org/"> Wikipedia</a>
    </li>,
  ];
  return (
    <div>
      <ul key={Math.random()}>{List}</ul>
    </div>
  );
}
