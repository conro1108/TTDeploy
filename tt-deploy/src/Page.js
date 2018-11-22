import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Splash from './Splash';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {loggedin: false,
                     help: false,
                     contact: false}; 
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
            <Body />
            <Footer />
            </div>
            }
            if(this.state.contact === true){// contact page
                content = <div className = "bodystyle">
            <Header />
            <Body />
            <Footer />
            </div>
            }
            if(this.state.contact === false && this.state.help ===false){//normal tweet page
                content = 
            <div className = "bodystyle">
            <Header />
            <Body />
            <Footer />
            </div>
            }
        }
        
        return (
            <div className = "bodystyle">
            {content}
            </div>
        );
    }
}

export default Page;