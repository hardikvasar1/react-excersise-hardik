import React from 'react';
import './style.css';

export default function Demo17() {
  onclick = () => {
    console.log('I was Clicked!');
  };
  return (
    <>
      <button onclick={onclick()}>Clickme</button>
    </>
  );
}
