import React from 'react';
import './style.css';

export default function Demo17() {
  function handleClick() {
    console.log('I was Clicked!');
  }
  return (
    <>
      <button onClick={handleClick()}>Clickme</button>
    </>
  );
}
