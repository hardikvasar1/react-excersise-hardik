import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
export default function demo10_1(props) {
  const BootstrapCard = () => {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a
            href="https://en.wikipedia.org/wiki/Bob_Dylan"
            className="btn btn-primary"
          >
            Go to wikipedia
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      <BootstrapCard />
    </>
  );
}
demo10_1.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
