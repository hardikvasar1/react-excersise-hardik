import React from 'react';
import './style.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
export default function demo11() {
  const Jumbotrons = () => {
    return (
      <Jumbotron>
        <div class="jumbotron m-5">
          <h1 class="display-4">Welcome to react</h1>
          <p class="lead">
            React is the most popular rendering library in the world
          </p>
          <a
            class="btn btn-primary btn-lg"
            href="https://reactjs.org/"
            role="button"
          >
            Go to the official website
          </a>
        </div>
      </Jumbotron>
    );
  };
  return (
    <>
      <Jumbotrons />
    </>
  );
}
