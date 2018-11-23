import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Splash from './Splash';
import Contact from './Contact';
import Help from './Help';
import Success from './Success';
import Fail from './Fail';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {loggedin: true,
                     help: false,
                     contact: false,
                     tweetsent: "success"}; 
    }
    render() {
        let content;
        if( this.state.loggedin === false){//landing page
            content = <Splash/>;
        }
        else{
            if(this.state.help === true){//help page
                content = <div className = "bodystyle">
            <Header />
            <Help />
            <Footer />
            </div>
            }
            if(this.state.contact === true){// contact page
                content = <div className = "bodystyle">
            <Header />
            <Contact />
            <Footer />
            </div>
            }
            if(this.state.contact === false && this.state.help ===false){//normal tweet page

                if(this.state.tweetsent === "success"){
                        content = 
                    <div className = "bodystyle">
                    <Header />
                    <Success />
                    <Footer />
                    </div>
                }
                else if(this.state.tweetsent === "fail"){
                        content = 
                    <div className = "bodystyle">
                    <Header />
                    <Fail />
                    <Footer />
                    </div>
                }
                else{
                                            content = 
                    <div className = "bodystyle">
                    <Header />
                    <Body />
                    <Footer />
                    </div>
                }
            }
        }
        
        return (
            <div>
            {content}
            </div>
        );
    }
}

export default Page;