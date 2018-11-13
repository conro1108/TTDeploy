import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LoginButton extends Component {
    constructor () {
        super()
        this.state = {
            loginUrl: '',
            resourceOwnerKeyCookie: '',
            resourceOwnerSecretCookie: ''
        }

              
    }

    componentDidMount() {
        axios.get('https://api.threadedtweeter.com/login?mode=webapp').then(
            response => {
                this.setState({
                    loginUrl : response.data.url,
                    resourceOwnerKeyCookie : response.data.cookie_1,
                    resourceOwnerSecretCookie : response.data.cookie_2
                })

                let keyCookie = this.state.resourceOwnerKeyCookie.split(";")[0].split("=")[1];
                let secretCookie = this.state.resourceOwnerSecretCookie.split(";")[0].split("=")[1];

                cookies.set('resource_owner_key', keyCookie, {path : '/', expires : new Date('2020-1-1')});
                cookies.set('resource_owner_secret', secretCookie, {path : '/', expires : new Date('2020-1-1')});
            } 
        ); 
    }

    render() {
        return (
            <div className="login_button">
                <a className="button" href={this.state.loginUrl}>Login with Twitter</a>
            </div>
        )
    }
}

export default LoginButton;