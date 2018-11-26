import React, { Component } from 'react';


class Footer extends Component {
    constructor(props){
        super(props);}
    render() {
        return (

            <div className = "main-footer">
            <div className = "h-1">
            <button type="link" onClick = {this.props.handleHelp}> help </button>
            </div>
            <div className = "h-2">
            <img width = "55px"
            src={require('./logo2.JPG')}
            alt='logo2' />
            </div>
            <div className = "h-5">  
            <button type="link" onClick = {this.props.handleContact}> contact us </button>
            </div>
            </div> 
        );
    }
}

export default Footer;