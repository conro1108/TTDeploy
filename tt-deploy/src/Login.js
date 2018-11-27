import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
    constructor () {
        super()
        this.state = {
            loginUrl: '',
            resourceOwnerKeyCookie: '',
            resourceOwnerSecretCookie: '',
            username: null
        }
              
    }


    logout() {
        console.log('logging out')
        cookies.remove('access_token_key',  { path: '/', domain : '.threadedtweeter.com' });
        cookies.remove('access_token_secret',  { path: '/', domain : '.threadedtweeter.com' }); 
        window.location.reload();
    }


    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let login_state;
        console.log(this.state);
        if (!isLoggedIn) {
            if (!this.state.loginUrl) {
                login_state = "Loading...";
            } else {
                login_state = <a className="button" href={this.state.loginUrl}>Login with Twitter</a>;
            }
            
        } else {
            login_state = <> <span> Hello {this.state.username} </span> <a className="button" onClick={this.logout}>Logout</a> </>

        }

        return (
            <div className="login_component">
                {login_state}
            </div>
        )
    }
}

export default Login;