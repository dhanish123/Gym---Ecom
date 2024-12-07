import React from "react";
import "./Btn2.scss";
const Btn2 = ({handle2}) => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Glassmorphism button</title>
      <div className="container">
        <div className="btnaaa">
          <a className="Aabout" onClick={handle2}>Read more </a>
        </div>
      </div>
    </div>
  );
};

export default Btn2;
