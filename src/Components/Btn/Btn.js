import React from "react";
import "./Btn.scss";
const Btn = ({ handle }) => {
  return (
    <div className="btnreuse">
      <a className="aa">
        <span onClick={handle}>Join Us</span>
        <div className="liquid" />
      </a>
    </div>
  );
};

export default Btn;

