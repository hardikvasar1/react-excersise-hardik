import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
export default function demo12(props) {
  const Alert = () => {
    return (
      <>
        <Alert text={props.text} />
      </>
    );
  };
  return (
    <>
      <Alert />
    </>
  );
}
demo12.propTypes = {
  text: PropTypes.string,
};
