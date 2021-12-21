import React from 'react';
import './style.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';
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
