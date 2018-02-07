import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

class LogoutUser extends React.Component {

    render(){
        const { bool } = this.props
            return(
                <div>
                    You are currently logged out.
                </div>
            )
        } 
    }
export default LogoutUser;