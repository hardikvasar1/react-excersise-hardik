import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
export default function Demo13(props) {
  const colorClasses = {
    red: 'alert-danger',
    orange: 'alert-warning',
  };
  return (
    <div className={`alert ${colorClasses[props.color]}`} role="alert">
      This is a primary alert-check it out!
    </div>
  );
}
Demo13.propTypes = {
  color: PropTypes.string,
};
