import React from 'react';       

class Success extends React.Component {
    constructor(props){
        super(props);
        this.state = {//tweet       
    }
    }
   
    render() {
       
        return (
            <div className = "after-tweet">
            <div className = "after-tweet-header">
            <div className = "success-1">
            Success!
            </div>
            <div className = "success-2">
            Your thread of X tweets was posted sucessfully.
            </div>
            </div>
            <div className = "after-tweet-body">
            TODO:PUTTWEET
            </div>
            <div className = "after-tweet-footer">
            <button type="link" onClick = {this.props.handleHome}> post another </button> 
            </div>
            </div>
        );
    }
}

export default Success;