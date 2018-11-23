import React, { Component } from 'react';
import Tweet from 'Tweet';
import OurModal from 'OurModal';


const sendtweet = <div className="b-3">
    <button type="submit2">submit</button></div>;



const customStyles = {
    content : {
        top                   : '30%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : '0px'      
    }
};



class Body extends React.Component {
    constructor(props){
        super(props);
        
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCancel =        this.handleCancel.bind(this);
        
        const boxnum = {index: 1};
        const boxes = [];
        boxes.push({boxnum});
        this.state = {boxes,
                      Bsplitting: false,
                      splitting: "off",
                      showModal: false};        
    }
    
    handleaddbox(){
        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length});
        this.setState({boxes : newBoxes});
        console.log("handleaddbox " + this.state.boxes.length);
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
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }


    render() {
        const boxes = this.state.boxes;
        const boxnum = boxes.length;
        let button;
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
        let split;
        const splitstate = this.state.splitting;
        if(splitstate === "off"){ split =
            <div className="b-1">
                Auto splitting: off
                    </div>;
                                 console.log("splitting displays off");
                                }
        else{ split =
            <div className="b-1">
                Auto splitting: on
                    </div>;
             console.log("splitting displays on");
            }
        return (
            <div className = "main-body">
            <div className = "sub-body">
            <div className = "sub-body1">
            {split}
            
            <OurModal showModal={this.state.showModal} handleOpenModal = {this.handleOpenModal.bind(this)} handleCloseModal = {this.handleCloseModal.bind(this)}/>
            
            </div>
            
            <Tweets boxes={boxes}/>             
            {button}
            {sendtweet}

            </div>
            </div>
        );
    }
}

const Tweets = ({boxes}) => (
    <div>
    {boxes.map( box =>(
    <div key = {box.index}>
    <Tweet />
    </div>))}
    </div>
)

export default Body;