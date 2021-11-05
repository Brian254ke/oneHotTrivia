import { Link } from "react-router-dom";
const Starter = ({ show, confirmed }) => {
  return (
    <div className="container">
      <div className="outer">
        <div className="welcome">
          <p>Coded by Brian </p>
          <p>Start the trivia now</p>
          <Link to="/Trivia">
            <button style={{ show }} className="btn" onClick={confirmed}>
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Starter;
