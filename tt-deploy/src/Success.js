import React from 'react';   
import { Timeline } from 'react-twitter-widgets';

class Success extends React.Component {
    constructor(props){
        super(props);
    }
   
    render() {
        const username = this.props.username;
        const timeline =   <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: "BarackObama"
            }}
            options={{
              username: "BarackObama",
              height: '300',
              width: '600'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />;
            
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
            {timeline}
            </div>
            <div className = "after-tweet-footer">
            <button type="link" onClick = {this.props.handleHome2}> post another </button> 
            </div>
            </div>
        );
    }
}

export default Success;