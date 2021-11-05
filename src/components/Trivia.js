import React, { Component } from "react";
import Finish from "./Finish";
import Quiz from "./Quiz";
class Trivia extends Component {
  constructor(props) {
    super(props);
    this.props = {};
    this.state = {
      isComplete: false,
      answer: "",
      title: "",
      wrong: null,
      canView: false,
      coRRect: null,
      correct: null,
      answers: [],
      total: 1000,
      displayButton: false,
      score: 0,
      timeIsUp: false,
      count: 0,
    };
    this.startTrivia = this.startTrivia.bind(this);
    this.addScore = this.addScore.bind(this);
    this.main = this.main.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.finishTrivia = this.finishTrivia.bind(this);
    this.answeringTimeLimit = this.answeringTimeLimit.bind(this);
  }
  currentQuestion(count) {
    this.setState({
      question: Quiz[count].question,
      answers: [
        Quiz[count].answers[0],
        Quiz[count].answers[1],
        Quiz[count].answers[2],
      ],
      correct: Quiz[count].corectAnswer,
      displayButton: true,
    });
  }
  startTrivia() {
    if (this.state.count <= 0) {
      let count = this.state.count;
      this.setState({
        count: 1,
        displayButton: true,
      });
      this.currentQuestion(count);
    }
    return;
  }
  main() {
    if (this.state.answer == this.state.correct) {
      this.addScore();
    }
  }
  answeringTimeLimit() {
    const start = new Date().getSeconds();
    const timer = setInterval(() => {
      let now = new Date().getSeconds();
      let rem = Math.round(30 - (now - start));
      document.getElementById("time").innerText = rem;
      if (rem === 0) {
        this.setState({
          displayButton: false,
        });
        clearInterval(timer);
        this.finishTrivia();
      }
    }, 1000);
  }
  updateCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  updateAnswer(event) {
    this.setState({
      answer: event.target.value,
    });
  }
  addScore() {
    this.setState({
      score: this.state.score + 100,
    });
  }
  nextQuestion(event) {
    event.preventDefault();
    this.main();
    this.clearMemory();
    if (this.state.count >= 10) {
      this.finishTrivia();
    } else {
      this.updateCount();
      this.currentQuestion(this.state.count);
      this.updateCount();
    }
  }
  clearMemory() {
    this.setState({
      answer: "",
      correct: null,
      answers: [],
      timeIsUp: false,
      displayButton: false,
    });
  }
  finishTrivia() {
    const x = document.getElementById("oup");
    x.style.display = "none";
    if (this.state.score > 250 && this.state.score <= 500) {
      this.state.title = "Fair Enough !";
    } else if (this.state.score >= 0 && this.state.score <= 200) {
      this.state.title = "Try harder!";
    } else if (this.state.score >= 750) {
      this.state.canView = true;
      this.state.title = "Congratulations !";
    } else {
      this.state.title = "Well Done !";
    }
    this.setState({
      isComplete: true,
      canView: this.state.canView,
      title: this.state.title,
      coRRect: this.state.score / 100,
      wrong: 10 - this.state.score / 100,
    });
  }

  render() {
    let {
      displayButton,
      score,
      answers,
      title,
      wrong,
      coRRect,
      canView,
      question,
      total,
      answer,
      isComplete,
      count,
    } = this.state;

    return (
      <div className="container">
        <div className="triviaContainer" id="oup">
          {(window.ondevicemotion = this.startTrivia)}
          <span>
            <li id="score" className="left">
              Score : &nbsp;{score}
            </li>
            <li id="count" className="right">
              Question : {count} / 10
            </li>
          </span>
          <div className="triviaInner">
            <p className="triv">{question}</p>
            <form onSubmit={this.nextQuestion}>
              <input
                type="radio"
                value="0"
                key="gfggvhbh"
                checked={answer === "0"}
                onChange={this.updateAnswer}
              />{" "}
              &nbsp;
              {answers[0]}
              <br />
              <input
                type="radio"
                value="1"
                checked={answer === "1"}
                onChange={this.updateAnswer}
              />{" "}
              &nbsp;
              {answers[1]}
              <br />
              <input
                type="radio"
                value="2"
                checked={answer === "2"}
                onChange={this.updateAnswer}
              />{" "}
              &nbsp;
              {answers[2]}
              <br />
              {displayButton ? (
                <button className="btn" value="submit">
                  submit
                </button>
              ) : (
                ""
              )}
              <div className="right">
                Time left : <i id="time" style={{ fontStyle: "normal" }}></i>
              </div>
              {(window.ondeviceorientation = this.answeringTimeLimit)}
            </form>
          </div>
        </div>
        {isComplete ? (
          <Finish
            score={score}
            total={total}
            canViewResults={canView}
            attempted={count}
            title={title}
            correctQuestions={coRRect}
            wrongAnswers={wrong}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Trivia;
