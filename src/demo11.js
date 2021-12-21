import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
export default function demo11(props) {
  const Jumbotrons = () => {
    return (
      <>
        <div className="jumbotron m-5">
          <h1 className="display-4">{props.title}</h1>
          <p className="lead">
            React is the most popular rendering library in the world
          </p>
          <a
            className="btn btn-primary btn-lg"
            href="https://reactjs.org/"
            role="button"
          >
            Go to the official website
          </a>
        </div>
      </>
    );
  };
  return (
    <>
      <Jumbotrons />
    </>
  );
}
demo11.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.any,
};
