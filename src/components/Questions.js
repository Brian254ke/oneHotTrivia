import Quiz from "./Quiz";
const Questions = () => {
  return (
    <div id="Quiz" className=" Quiz">
      <h3 className="sectionHeader"> Questions and Answers</h3>
      {Quiz.map((q, ...index) => {
        if (q.corectAnswer == q.answers) {
          var isCorrect = "Correct";
        } else {
          var isCorrect = "Wrong ";
        }
        return (
          <div className="quizBox">
            <p key={q.id}>
              {q.id}. &nbsp; {q.question}
            </p>
            <li id="0" className="que">
              {q.corectAnswer == 0 ? (
                <i className="correct">{(isCorrect = "correct")}</i>
              ) : (
                <i className="wrong">{(isCorrect = "wrong")}</i>
              )}{" "}
              &nbsp; A. {q.answers[0]}
            </li>
            <li id="1" className="que">
              {q.corectAnswer == 1 ? (
                <i className="correct">{(isCorrect = "correct")}</i>
              ) : (
                <i className="wrong">{(isCorrect = "wrong")}</i>
              )}{" "}
              &nbsp; B. {q.answers[1]}
            </li>
            <li id="2" className="que">
              {" "}
              {q.corectAnswer == 2 ? (
                <i className="correct">{(isCorrect = "correct")}</i>
              ) : (
                <i className="wrong">{(isCorrect = "wrong")}</i>
              )}{" "}
              &nbsp; C. {q.answers[2]}
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default Questions;
