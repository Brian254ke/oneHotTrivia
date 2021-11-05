import { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Starter from "./components/Starter";
import Trivia from "./components/Trivia";
import Footer from "./components/Footer";

function App() {
  const [is_Authenticated, counte] = useState(false);
  const checkAuthentication = () => {
    counte(!is_Authenticated);
  };
  function confirmed() {
    checkAuthentication();
  }
  const show = {
    display: "block",
  };
  const display = {
    backgroundColor: "white",
  };
  return (
    <Router>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "block",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
          }}
        />
        <Header />

        <div>
          {is_Authenticated ? (
            <Route path="/Trivia" component={Trivia}>
              <Trivia display={display} />
            </Route>
          ) : (
            <Route path="/" exact component={Starter}>
              <Starter show={show} confirmed={confirmed} />
            </Route>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
