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
                temp.isLoggedIn = false;
                this.setState(temp);
            }
        );
    }

    logout() {
        console.log('logging out')
        cookies.remove('access_token_key',  { path: '/' });
        cookies.remove('access_token_secret',  { path: '/' });
        window.location.reload();
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
                                resourceOwnerKeyCookie : response.data.cookie_1,
                                resourceOwnerSecretCookie : response.data.cookie_2,
                                isLoggedIn : false,
                                username : null
                            })
                            
                            let keyCookie = this.state.resourceOwnerKeyCookie.split(";")[0].split("=")[1];
                            let secretCookie = this.state.resourceOwnerSecretCookie.split(";")[0].split("=")[1];
            
                            cookies.set('resource_owner_key', keyCookie, {path : '/', expires : new Date('2020-1-1'), domain : '.threadedtweeter.com'});
                            cookies.set('resource_owner_secret', secretCookie, {path : '/', expires : new Date('2020-1-1'), domain : '.threadedtweeter.com'});
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