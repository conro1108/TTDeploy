import React, { Component } from 'react';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';


class Splash extends Component {
    constructor(props){
    super(props);}
    render() {
                //console.log(this.props.username + ", " + this.props.resourceOwnerSecretCookie + ", " + this.props.resourceOwnerKeyCookie + ", " + this.props.loginUrl + ", " + this.props.isLoggedIn);
        return (
            <div className = "splash-footer">
                <div className = "splash-header">

                    <div className = "splash-1">Threaded Tweeter</div>
                    </div>
                    <div className = "splash-body">
                    <div className = "splash-2">    
                        <button type="link" onClick = {this.props.handleContact}> contact us </button>
                    </div>
                    <div className = "splash-3">    
                    <Login checkLoginStatus = {this.props.checkLoginStatus} componentDidMount = {this.props.componentDidMount} logout = {this.props.logout} loginUrl = {this.props.loginUrl} resourceOwnerKeyCookie = {this.props.resourceOwnerKeyCookie} resourceOwnerSecretCookie = {this.props.resourceOwnerSecretCookie} username = {this.props.username} isLoggedIn = {this.props.isLoggedIn}/>
                    </div>
                    <div className = "splash-4" >    
                        <button type="link" onClick = {this.props.handleHelp}> help </button>
                    </div>

                </div>
            <div className = "splash-subfooter">
            <div className = "splash-5">
            An innovative tool for quick and easy threaded tweets
            </div>
            <img width = "100px"
            src={require('./logo2.JPG')}
            alt='logo2' />
             <div className = "splash-5">
                 By logging in you consent to our use of cookies. 
            </div> 
</div>
</div>

        );
    }
}

export default Splash;