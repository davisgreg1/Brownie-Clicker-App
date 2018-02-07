import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch } from "react-router-dom";
import Players from "./players/Players"


import "./App.css";

class App extends React.Component {
  homepage = () => {
    return <h1> Homepage </h1>;
  };

render() {
    return (
      <div className="App">
        <nav>
          <Link to="/player/new">Register</Link> {" . "}
          <Link to="/player/login">Log In</Link> {" . "}
          <Link to="/player/logout">Log Out</Link> {" . "}
        </nav>
        <Switch>
          <Route exact path="/" render={this.homepage} />
          <Route path="/player" component={ Players } />
        </Switch>
      </div>
    );
  }
}

export default App;