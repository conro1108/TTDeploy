import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Splash from './Splash';
import Contact from './Contact';
import Help from './Help';
import Success from './Success';
import Fail from './Fail';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false,
                     help: false,
                     contact: false,
                     tweetsent: "no"}; 
    this.handleHelp = this.handleHelp.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleHome = this.handleHome.bind(this);
    }
    handleHelp(){
        this.setState({help: true, contact: false});
        console.log("help");
    }
    handleContact(){
        this.setState({help: false, contact: true});
        console.log("contact us");
    }
    handleHome(){
        this.setState({help: false, contact: false, tweetsent: "no"});
    }
    
    logout() {
        const cookies = this.state.cookies;
        console.log('logging out')
        cookies.remove('access_token_key',  { path: '/', domain : '.threadedtweeter.com' });
        cookies.remove('access_token_secret',  { path: '/', domain : '.threadedtweeter.com' }); 
        window.location.reload();
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
        let content;
            if(this.state.help === true){//help page
                content = <div className = "bodystyle">
            <Header handleHome= {this.handleHome} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout}/>
            <Help />
            <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
            </div>
            }
            else if(this.state.contact === true){// contact page
                content = <div className = "bodystyle">
            <Header handleHome= {this.handleHome} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout}/>
            <Contact />
            <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
            </div>
            }
            else if(this.state.loggedin === true){//normal tweet page

                if(this.state.tweetsent === "success"){
                        content = 
                    <div className = "bodystyle">
                    <Header handleHome= {this.handleHome} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout}/>
                    <Success handleHome= {this.handleHome}/>
                    <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
                    </div>
                }
                else if(this.state.tweetsent === "fail"){
                        content = 
                    <div className = "bodystyle">
                    <Header handleHome= {this.handleHome} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout}/>
                    <Fail handleHome= {this.handleHome }handleHelp = {this.handleHelp}/>
                    <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
                    </div>
                }
                else{
                                            content = 
                    <div className = "bodystyle">
                    <Header handleHome= {this.handleHome} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout}/>
                    <Body />
                    <Footer handleHelp = {this.handleHelp} handleContact = {this.handleContact}/>
                    </div>
                }
            }
        else{//splash
            content = <Splash handleHelp = {this.handleHelp} handleContact = {this.handleContact} checkLoginStatus = {this.checkLoginStatus} componentDidMount = {this.componentDidMount} logout = {this.logout}/>;
        }
        
        return (
            <div>
            {content}
            </div>
        );
    }
}

export default Page;