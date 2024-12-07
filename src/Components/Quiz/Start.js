import React, { useContext } from "react";
import DataContext from "../Quiz/Context/dataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Start.scss";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="start"
      style={{
        display: `${showStart ? "block" : "none"}`,
      }}
    >
      <div className="container">
        <div className="start-outer">
          <div>
            <h1 className="start-head">50% off for getting above 75% for quiz</h1>

            <button onClick={startQuiz} className="start-btn">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
