import React, { Component } from 'react';


class Help extends Component {
    render() {
        return (
            <div className = "help">
                <div className = "help-header">
            Help
            </div>
                <div className = "help-body">
            <div className = "help-subheader">
                General information:
            </div>
Threaded Tweeter is a web application that can help you make threaded tweets on twitter. You have full control of what content goes in each tweet, including pictures, but we can format you tweets for you as well.

            <div className = "help-subheader">
How to create a thread:
            </div>
Users must first login with twitter and authorize our app to post tweets on their page. Threaded tweeter will only post threads you create, and delete unfinished threads if there was a fatal error.
Type or paste your tweet into the textbox. Use the “+” button to add a new tweet to your thread. Tweets appear on the page in order, first to last. Click the “-” button to remove a tweet from your thread. 
You can attach a picture to any tweet by clicking the button to the bottom left of each tweet box. Click the button again is you want to replace the picture with a different one. Each tweet can have one picture attached. If the tweet has an attached picture you do not have to write anything in the box for it to post.
Tweets are constrained by Twitter’s 280 character count. Threaded Tweeter shows an indicator of your current character count for each tweet at the bottom right of the textbox.
Our app can automatically split and format your tweets for you. Click “splitting options” above the text box to access these. Basic splitting will split at the word-level. 
Click “send” to publish your tweet.
After publishing a tweet, you should see a “Success” message and a window showing your thread.

            <div className = "help-subheader">
Tweet splitting options:
            </div>
Splitting can be done at the end of the next word. 

            <div className = "help-subheader">
Errors:
            </div>
If you received an error notice it may have been caused by some of these common errors:
Attempting to post a tweet with out a valid login.
Attempting to post a tweet over the character limit.
Attempting to attatch an invalid file/picture to your tweet.
Making a tweet that is the exact same as an another tweet; the first tweet in every thread must be something unique you have never posted before.
Authentication or authorization failures.
Connection/Internet failures.
            
If a failure occurs after some of the thread has already been posted, Threaded Tweeter will attempt to delete them for you. Certain errors, such as a dropped connection, may make it impossible to delete the unfinished thread. Threaded Tweeter will show you your timeline after a failure occurs, so you can check for partial threads and delete them manually. If you cannot see the timeline, try disabling adblocker and relead the page.
<div className = "help-subheader">
            </div>
            </div>
            </div>

        );
    }
}

export default Help;