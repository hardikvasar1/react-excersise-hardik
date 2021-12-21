import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Demo7 from './demo7';
import Demo8 from './demo8';
import Demo9 from './demo9';
import Demo10 from './demo10';
import Demo10_1 from './demo10_1';
import Demo11_1 from './demo11_1';
import Demo11 from './demo11';

ReactDOM.render(
  <Demo11
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
  />,
  document.getElementById('root')
);
