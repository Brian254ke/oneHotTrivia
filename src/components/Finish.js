import { useState } from "react";
import Questions from "./Questions";
const Finish = ({
  title,
  score,
  total,
  attempted,
  canViewResults,
  correctQuestions,
  hide,
  wrongAnswers,
}) => {
  const [showAnswers, viewAnswers] = useState(true);
  const viewAnswer = () => {
    viewAnswers(!showAnswers);
  };
  return (
    <div className="finish" style={hide}>
      <div className="finishInner">
        <h2 style={{ color: "green" }}> {title} </h2>
        <p className="score">
          Your score is : {score} /&nbsp; {total}
        </p>
        <p>Total questions attempted : {attempted} out of 10 </p>
        <p> You answered : {correctQuestions} questions correctly </p>
        <p>Questions failed and not attempted : {wrongAnswers}</p>
        {canViewResults ? (
          <button
            className="btn"
            id="ResButton"
            onClick={() => {
              viewAnswer();
              var stat = document.getElementById("Quiz");
              showAnswers
                ? (stat.style.display = "block")
                : (stat.style.display = "none");
            }}
          >
            {showAnswers ? "view more " : "close"}
          </button>
        ) : (
          ""
        )}
      </div>
      <Questions />
    </div>
  );
};

Finish.defaultProps = {
  title: "Congratulations !",
  score: 0,
  attempted: 0,
  correctQuestions: 0,
  canViewResults: false,
  wrongAnswers: 0,
};
export default Finish;
