import React, { Component } from 'react';

class Login extends Component {
    constructor () {
        super()
              
    }


    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let login_state;
        console.log("usr: "+ this.props.username + ",  Scookie: " + this.props.resourceOwnerSecretCookie + ", Kcookie: " + this.props.resourceOwnerKeyCookie + ", Url: " + this.props.loginUrl + ", isLoggedIn: " + this.props.isLoggedIn);
        if (!isLoggedIn) {
            if (!this.props.loginUrl) {//!this.props.loginUrl
                login_state = "Loading...";
            } else {
                login_state = <a className="button" href={this.props.loginUrl}>Login with Twitter</a>;
            }
            
        } else {
            login_state = <> <span> Hello {this.props.username} </span> <a className="button" onClick={this.props.logout}>Logout</a> </>

        }

        return (
            <div className="login_component">
                {login_state}
            </div>
        )
    }
}

export default Login;