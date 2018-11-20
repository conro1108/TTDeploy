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
            isLoggedIn: false,
            username: null
        }
              
    }

    checkLoginStatus() {
        let temp = Object.assign({}, this.state);

        return axios.get("https://api.threadedtweeter.com/v2/login/status", {withCredentials: true}).then(
            response => {
                temp.isLoggedIn = response.data.Status;
                temp.username = response.data.username;
                this.setState(temp);
            },
            error => {
                temp.isLoggedIn = error.data.Status;
                this.setState(temp);
            }
        );
    }
    componentDidMount() {
        this.checkLoginStatus().then(
            response => {
                if (!this.state.isLoggedIn) {
                    console.log('not logged in part 2')
                    axios.get('https://api.threadedtweeter.com/v2/login?mode=webapp').then(
                        response => {
                            this.setState({
                                loginUrl : response.data.url,
                                resourceOwnerKeyCookie : cookies.get('resource_owner_key'),
                                resourceOwnerSecretCookie : cookies.get('resource_owner_secret'),
                                isLoggedIn : false,
                                username : null
                            })
                            
                            let keyCookie = this.state.resourceOwnerKeyCookie;
                            let secretCookie = this.state.resourceOwnerSecretCookie;
            
                            cookies.set('resource_owner_key', keyCookie, {path : '/', expires : new Date('2020-1-1')});
                            cookies.set('resource_owner_secret', secretCookie, {path : '/', expires : new Date('2020-1-1')});
                        } 
                    ); 
                }
            }
        )

    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let login_state;
        console.log(this.state);
        if (!isLoggedIn) {
            login_state = "Loading...";
            
            login_state = <a className="button" href={this.state.loginUrl}>Login with Twitter</a>;

        } else {
            login_state = `Hello ${this.state.username}!`
        }

        return (
            <div className="login_component">
                {login_state}
            </div>
        )
    }
}

export default Login;