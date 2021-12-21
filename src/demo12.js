import React from 'react';
import './style.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
export default function Demo12(props) {
  if (props.show === false) {
    return null;
  } else {
    return (
      <Alert>
        <Alert.Heading>{props.text}</Alert.Heading>
      </Alert>
    );
  }
}
Demo12.propTypes = {
  text: PropTypes.string,
};
