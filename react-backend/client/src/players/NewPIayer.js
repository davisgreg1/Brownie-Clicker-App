import React from "react";
import axios from "axios";

class NewPlayer extends React.Component {
  state = { usernameInput: "", passwordInput: "", message: "" };

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
    const { usernameInput, passwordInput } = this.state;

    if (usernameInput.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }

    axios
      .post("/player/new", {
        username: usernameInput,
        password: passwordInput
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Inserted User"
        });
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Error inserting user"
        });
      });
  };

  render() {
    const { usernameInput, passwordInput, message } = this.state;
    return (
      <div>
        <h1> New Player </h1>

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
    );
  }
}

export default NewUser;
