import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import LogoutUser from "./LogoutUser";

class LoginUser extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    message: "",
    loggedIn: false
  };

 
  handleUsernameChange = e => {
    this.setState({
      usernameInput: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      passwordInput: e.target.value
    });
  };

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
        console.log("response data in the login:", res.data)
        this.props.setUser(res.data);
        this.setState({
          loggedIn: true
        });
      })
      .catch(err => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "usernameInput/passwordInput not found"
        });
      });
  };

  render() {
    const { usernameInput, passwordInput, message, loggedIn } = this.state;
    console.log("logged in?", loggedIn)
    console.log("usernameInput?", usernameInput)
    console.log("passwordInput?", passwordInput)

    if (loggedIn) {
      return <Redirect to="/player" />;
    }

    return (
     <div>
      <div>
        <h1> Login</h1>

        <form onSubmit={this.submitForm}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={usernameInput}
              onChange={this.handleUsernameChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="username"
              value={passwordInput}
              onChange={this.handlePasswordChange}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <p>{message}</p>
      </div>
     </div>
    );
  }
}

export default LoginUser;