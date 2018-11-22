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
You can attach a picture to any tweet by clicking the “Add picture” button or dragging a picture onto the tweet from your desktop.
Tweets are constrained by Twitter’s 280 character count. Threaded Tweeter shows an indicator of your current character count for each tweet at the bottom right of the textbox.
Our app can automatically split and format your tweets for you. Click “splitting options” above the text box to access these. 
Click “send” to publish your tweet.
After publishing a tweet, you should see a “Success” message and a window showing your thread.

            <div className = "help-subheader">
Tweet splitting options:
            </div>
Splitting can be done at the end of the next word, after punctuation such as periods, commas and semicolons, or at punctuation and emoji. We can also number the tweets in your thread for you. You can put custom text at the start and or end of each tweet. This text will not appear at the start of your first tweet or the end of your last tweet. You can use this option to put in ellipses, for example. 

            <div className = "help-subheader">
Errors:
            </div>
If you received an error notice it may have been caused by some of these common errors:
Attempting to post a tweet while not logged in.
Attempting to post a tweet over the character limit.
Authentication or authorization failures.
Connection/Internet failures.
If a failure occurs after some of the thread has already been posted, Threaded Tweeter will attempt to delete them for you. Certain errors, such as a dropped connection, may make it impossible to delete the unfinished thread. Threaded Tweeter will show you your timeline after a failure occurs, so you can check for partial threads and delete them manually.
<div className = "help-subheader">
            </div>
            </div>
            </div>

        );
    }
}

export default Help;