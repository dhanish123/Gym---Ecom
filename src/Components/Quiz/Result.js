import React, { useContext } from "react";
import DataContext from "../Quiz/Context/dataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Result.scss";

const Result = () => {
  const { showResult, quizs, marks, startOver } = useContext(DataContext);
  return (
    <section
      className="result"
      style={{ display: `${showResult ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="result-row">
          <div className="col-lg-6">
            <div
              className={`text-light text-center p-5 rounded ${
                marks > (quizs.length * 5) / 2 ? "bg-success" : "bg-danger"
              }`}
            >
              <h1 className="mb-2 fw-bold">
                {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}
              </h1>
              <h3 className="mb-3 fw-bold">
                Your score is {marks} out of {quizs.length * 5}
              </h3>

              <button
                onClick={startOver}
                className="btn py-2 px-4 btn-light fw-bold d-inline"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
