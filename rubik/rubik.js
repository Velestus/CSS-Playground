import React from 'react';
import './rubik.css';

const Rubik = (props) => {
  return (
    <div className="Rubik">
      <div className="Rubik-shape">
        <div className="front"></div>
        <div className="back"></div>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Rubik;