import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";

import NewPlayer from "./NewPlayer";
import LoginUser from "./LoginUser";
import LogoutUser from "./LogoutUser";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
        user: null,
        usernameInput: "",
        passwordInput: "",
        message: "",
        loggedIn: false
      };
  }
/** This function is for the LogIn feature */
  handleUsernameChange = e => {
    this.setState({
      usernameInput: e.target.value
    });
  };

  /** This function is for the LogIn feature */
  handlePasswordChange = e => {
    this.setState({
      passwordInput: e.target.value
    });
  };

  /** This function is for the LogIn feature */
  submitForm = e => {
    e.preventDefault();
    const { usernameInput, passwordInput, message } = this.state;

    if (usernameInput.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }
    axios
      .post("/player/login", {
        username: usernameInput,
        password: passwordInput
      })
      .then(res => {
        // this.props.setUser(res.data);
        this.setState({
          loggedIn: true,
          user: res.data
        });
      })
      .catch(err => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "user not found"
        });
      });
  };


  renderLogin = () => {
      const { user, usernameInput, passwordInput, message, loggedIn } = this.state;

        return <LoginUser  username={usernameInput} password={passwordInput} handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} submitForm={this.submitForm} bool={loggedIn} message={message} />
  };


  renderLogout = () => {
    const { user, usernameInput, passwordInput, message, loggedIn } = this.state

//fetch the backend route
        axios
        .get("/player/logout")
        .then(res => {
         this.setState({
        user: null,
        loggedIn: false,
        usernameInput: "",
        passwordInput: ""
      });
    })

//user from the state is used as a boolean to successfully log a user out.
    return <LogoutUser bool={user}/>
  }


  render() {

    const { user } = this.state;
    return (
      <div className="App">
        {user ? `welcome, ${user.username}` : ""}
        <Route path="/player/new" component={NewPlayer} />
        <Route path="/player/login" render={this.renderLogin} />
        <Route path="/player/logout" render={this.renderLogout} />
      </div>
    );
  }
}

export default Players;
