import React from 'react';
import './style.css';

export default function Demo15() {
  const color = {
    background: 'yellow',
    width: '30%',
    borderRadius: '10px',
    textAlign: 'left',
  };
  const color1 = {
    color: 'white',
    background: 'red',
    borderRadius: '20px',
  };
  return (
    <>
      <div style={color}>
        <p>
          Hello Hardik <span style={color1}>2</span>
        </p>
      </div>
    </>
  );
}
