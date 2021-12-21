import React from 'react';
import './style.css';

export default function Demo15() {
  const mySuperStyles = {
    background: 'red',
    color: 'blue',
    fontSize: '14px',
    border: '1px solid black',
  };
  return (
    <>
      <div style={mySuperStyles}>Hello Hardik</div>
    </>
  );
}
