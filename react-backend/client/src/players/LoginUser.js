import React from "react";
import axios from "axios";
import { Redirect } from "react-router";


class LoginUser extends React.Component {

render() {
  console.log("THE LoginUser Props", this.props)
  const { username, password,handleUserNameChange, handlePasswordChange, submitForm, bool, message } = this.props
  
  if (bool) {
      return <Redirect to="/player" />;
    }

    return (
     <div>
      <div>
        <h1> Login</h1>

        <form onSubmit={submitForm}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.props.handleUsernameChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="username"
              value={password}
              onChange={this.props.handlePasswordChange}
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