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
        axios.get('https://api.threadedtweeter.com/v2/login?mode=webapp').then(
            response => {
                this.setState({
                    loginUrl : response.data.url,
                    resourceOwnerKeyCookie : cookies.get('resource_owner_key'),
                    resourceOwnerSecretCookie : cookies.get('resource_owner_secret')
                })

                let keyCookie = this.state.resourceOwnerKeyCookie;
                let secretCookie = this.state.resourceOwnerSecretCookie;
                console.log(keyCookie);
                console.log(secretCookie);

                cookies.remove('resource_owner_key');
                cookies.remove('resource_owner_secret');

                cookies.set('resource_owner_key', keyCookie, {path : '/', expires : new Date('2020-1-1'), domain : '.threadedtweeter.com'});
                cookies.set('resource_owner_secret', secretCookie, {path : '/', expires : new Date('2020-1-1'), domain : '.threadedtweeter.com'});
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