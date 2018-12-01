import React from 'react';
import Tweet from './Tweet';
import OurModal from './OurModal';
import axios from "axios";
import Success from './Success';
import Fail from './Fail';

class Body extends React.Component {
    constructor(props){
        super(props);
        
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTweetChange = this.handleTweetChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleCancel =       this.handleCancel.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        const boxnum = {index: 0};
        const boxes = [];
        boxes.push(boxnum);
        this.state = {boxes,
                      Bsplitting: false,
                      splitting: "off",
                      tweetsent: "no",
                      showModal: false,
                      response: "ERR"};        
    }
    
    handleSubmit(){
        let numTweets = this.state.boxes.length;
        let tweets = [];
        for(let i = 0; i < numTweets; i++) {
            tweets.push({
                "STATUS": this.state[i],
                "MEDIA": []
            })
        }
        let thread = {"TWEETS" : tweets};
        console.log(JSON.stringify(thread));
        let xhttp = new XMLHttpRequest(); 
        xhttp.open("POST", "https://api.threadedtweeter.com/v2/post-thread", false); 
        xhttp.withCredentials=true;
        xhttp.send(JSON.stringify(thread));
        let response = xhttp.response;
        console.log(response);
        //console.log(response[1]);
        const parsedResponse = JSON.parse(response);
        console.log(parsedResponse);
        console.log(parsedResponse.errorMessage);
        console.log(response.body);
        if (!(parsedResponse.errorMessage === undefined)){
            this.setState({tweetsent: "fail", response: parsedResponse.errorMessage})
        }
        else{
            this.setState({tweetsent: "success", response: response})
        }
    }
    
    handleHome2(){
        this.setState({tweetsent: "no"});
    }

    handleaddbox(){
        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length});
        this.setState({boxes : newBoxes});
        console.log("handleaddbox " + this.state.boxes.length);
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
        console.log("Open Modal");
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        console.log("Close Modal");
    }
    
    handleremovebox(){
        const newBoxes = this.state.boxes;
        newBoxes.splice((newBoxes.length-1),1);
        this.setState({boxes : newBoxes});
        console.log("handleremovebox " + this.state.boxes.length);
    }
    
    handleCancel () {
        this.setState({ Bsplitting: false, splitting:"off" });   
        console.log("cancel: set splitting state " + this.state.splitting);
        console.log("cancel: set Bsplitting state " + this.state.Bsplitting);
        this.setState({ showModal: false });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
        
        if(this.state.Bsplitting === true){
            this.setState({splitting: "off"});
            console.log("set splitting state off");
        }
        else{
            this.setState({splitting: "on"});
            console.log("set splitting state on");
        }
    }

    handleTweetChange(tweetId, value) {
        this.setState({[tweetId]: value});
    }

    render() {
        console.log(this.state.tweetsent);
        const Tweets = this.state.boxes.map(box => (
            <Tweet 
                key={box.index}
                id={box.index}
                onChange={this.handleTweetChange}
                value={this.state[box]}    
            />
        ));

        const boxes = this.state.boxes;
        const boxnum = boxes.length;
        let button;
        let content;
        if(boxnum === 1){
            button = <div className = "centeronebutton">
                <button className = "circlebutton" onClick = {this.handleaddbox}>
                    +
                    </button>
            </div>
        } else{
            button = <div className = "centeronebutton">
                <button className = "circlebutton" onClick = {this.handleremovebox}>
                    -
                    </button>
            <button className = "circlebutton" onClick = {this.handleaddbox}>
                +
                </button>
            </div>
        }

        const sendtweet = <div className="b-3"><button type="submit2" onClick = {this.handleSubmit}>submit</button></div>;

        
         if(this.state.tweetsent === "success"){
                        content = <Success handleHome= {this.props.handleHome2} response = {this.state.response}/>
                }
                else if(this.state.tweetsent === "fail"){
                        content =  <Fail handleHome= {this.props.handleHome2 }handleHelp = {this.props.handleHelp} response = {this.state.response}/>

                }
                else{
                        content = 
                                    <div className = "main-body">
                                    <div className = "sub-body">

                                    <OurModal showModal={this.state.showModal}  Bsplitting={this.state.Bsplitting}  splitting={this.state.splitting}  handleInputChange = {this.handleInputChange} handleCancel = {this.handleCancel} handleOpenModal = {this.handleOpenModal} handleCloseModal = {this.handleCloseModal}/>

                                    {Tweets}             
                                    {button}
                                    {sendtweet}

                                    </div>
                                    </div>
                }
        
        
        return (
                <div>
                {content}
                </div>
        );
    }
}

/*const Tweets = ({boxes}) => (
    <div>
    {boxes.map( box =>(
    <Tweet 
        key={box}
        id={box}
        onChange
    />))}
    </div>
)*/

export default Body;