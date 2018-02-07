import React from "react";
import axios from "axios";
import { Redirect } from "react-router";


class NewPlayer extends React.Component {
  constructor(){
    super()
    this.state = { 
              username: "", 
              password: "", 
               message: "" 
            };
  }


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }
/** fetch the backend route to enter a new user into db */
    axios
      .post("/player/new", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          username: "",
          password: "",
          message: `Thank you for registering.`
        });
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          username: "",
          password: "",
          message: "Error inserting user"
        });
      });
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <div>
        <h1> New Player </h1>

        <form onSubmit={this.submitForm}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.handleInput}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <p>{message}</p>
      </div>
    );
  }
}


export default NewPlayer;
