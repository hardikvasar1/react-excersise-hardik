import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
export default function Demo13(props) {
  return <h1>{props.title}</h1>;
}
Demo13.propTypes = {
  color: PropTypes.any,
};
