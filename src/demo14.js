import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function Demo14() {
  const colorClasses = {
    red: 'alert-danger',
    orange: 'alert-warning',
    green: 'alert-success',
  };
  return (
    <>
      <div className={`alert ${colorClasses.red}`} role="alert">
        OMG! Something really bad has happended!
      </div>
      <div className={`alert ${colorClasses.orange}`} role="alert">
        Well, it is not that bad after all!
      </div>
      <div className={`alert ${colorClasses.green}`} role="alert">
        I am supposed to be green
      </div>
    </>
  );
}
