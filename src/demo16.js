import React from 'react';
import './style.css';

export default function Demo15() {
  const color = {
    background: 'yellow',
    width: '38%',
    borderRadius: '10px',
    textAlign: 'left',
  };
  const color1 = {
    color: 'white',
    display: 'inline',
    width: '8%',
    background: 'red',
    borderRadius: '50px',
  };
  return (
    <>
      <div style={color}>
        <p>Hello Hardik</p>
        <p style={color1}>2</p>
      </div>
    </>
  );
}
