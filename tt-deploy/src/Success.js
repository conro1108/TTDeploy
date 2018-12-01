import React from 'react';       

class Success extends React.Component {
    constructor(props){
        super(props);
    }
   
    render() {
       
        return (
            <div className = "after-tweet">
            <div className = "after-tweet-header">
            <div className = "success-1">
            Success!
            </div>
            <div className = "success-2">
            Your thread of tweets was posted successfully.
            </div>
            </div>
            <div className = "after-tweet-body">
            {this.props.response.body}
            </div>
            <div className = "after-tweet-footer">
            <button type="link" onClick = {this.props.handleHome2}> post another </button> 
            </div>
            </div>
        );
    }
}

export default Success;