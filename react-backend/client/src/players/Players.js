import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import NewPlayer from "./NewPlayer";
import LoginUser from "./LoginUser";
// import LogoutUser from "./LogoutUser";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // fetch('/player')
    //   .then(res => res.json())
    //   .then((player) => {
    //     let data = player.data;
    //     this.setState({ users: data })}
    //   );
  }
  setUser = user => {
    this.setState({ user: user });
  };

  renderLogin = () => {
    return <LoginUser setUser={this.setUser} />;
  };

//   renderLogout = () => {
//       return <LogoutUser />;
//   }


  render() {
    console.log("users: ", this.state);
    const { user } = this.state;
    return (
      <div className="App">
        {user ? `welcome, ${user.username}` : ""}
        <Route path="/player/new" component={NewPlayer} />
        <Route path="/player/login" render={this.renderLogin} />
        {/* <Route path="/player/logout" render={this.renderLogout} /> */}
      </div>
    );
  }
}

export default Players;
