import React from 'react';


class Fail extends React.Component {
    constructor(props){
        super(props);
       
    }
    
   
    render() {
        const reff = "https://twitter.com/" + this.props.username + "?ref_src=twsrc%5Etfw";
        const timeline = <a class="twitter-timeline" href={reff}>Tweets by {this.props.username}</a>;
        const timelinescript = <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>;
        
        console.log(this.props.username);
        return (
            <div className = "after-tweet">
            <div className = "after-tweet-header">
            <div className = "fail-1">
            Uh-oh!
            </div>
            <div className = "fail-2">
            Your thread failed to post, we tried to delete the incomplete thread, but one or more tweets may still be on your feed. Please check your feed for unfinished threads.
            </div>
            </div>
            <div className = "after-tweet-body">
            {this.props.response}
            
            {timeline}
            {timelinescript}
            
            </div>
            <div className = "after-tweet-footer">
            <button type="link" onClick = {this.props.handleHome2}> post another </button> 
            </div>
            <button type="button" className="notbutton" onClick = {this.props.handleHelp}>what happened?</button>
            </div>
        );
    }
}

export default Fail;