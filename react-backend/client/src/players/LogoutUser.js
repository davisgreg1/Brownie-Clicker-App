import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

class LogoutUser extends React.Component {

    render(){
        return(
            <div>
                You are now logged out.
            </div>
        )
    }
}
export default LogoutUser;