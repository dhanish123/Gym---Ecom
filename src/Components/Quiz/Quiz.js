import React, { useContext } from "react";
import DataContext from "../Quiz/Context/dataContext";
import "./Quiz.scss";

const Quiz = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(DataContext);

  return (
    <section
      className="Quiz"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="Quiz-outer">
          <div className="col-lg-8">
            <div className="Quiz-cards">
              <div className="Quiz-cards-card">
                <h5 className="Quiz-cards-card-qtn">{question?.question}</h5>
                <h5 className="Quiz-cards-card-indexqtn">
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </h5>
              </div>
              <div className="tt">
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`Quiz-cards-card-option ${
                      correctAnswer === item && "bg-success"
                    }`}
                    onClick={(event) => checkAnswer(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="Quiz-cards-nextqtn"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="Quiz-cards-show"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
