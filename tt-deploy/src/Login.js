import React, { Component } from 'react';

class Login extends Component {
    constructor () {
        super()
              
    }


    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let login_state;
        console.log(this.props.username + ", " + this.props.resourceOwnerSecretCookie + ", " + this.props.resourceOwnerKeyCookie + ", " + this.props.loginUrl + ", " + isLoggedIn);
        if (!isLoggedIn) {
            if (!this.props.loginUrl) {
                login_state = "Loading...";
            } else {
                login_state = <a className="button" href={this.props.loginUrl}>Login with Twitter</a>;
            }
            
        } else {
            login_state = <> <span> Hello {this.props.username} </span> <a className="button" onClick={this.logout}>Logout</a> </>

        }

        return (
            <div className="login_component">
                {login_state}
            </div>
        )
    }
}

export default Login;