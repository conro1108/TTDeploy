import React from 'react';
import Tweet from './Tweet';
import OurModal from './OurModal';


const sendtweet = <div className="b-3">
    <button type="submit2">submit</button></div>;


class Body extends React.Component {
    constructor(props){
        super(props);
        
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCancel =       this.handleCancel.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        const boxnum = {index: 0};
        const boxes = [];
        boxes.push(boxnum);
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

        return (
            <div className = "main-body">
            <div className = "sub-body">

            
            <OurModal showModal={this.state.showModal}  Bsplitting={this.state.Bsplitting}  splitting={this.state.splitting}  handleInputChange = {this.handleInputChange} handleCancel = {this.handleCancel} handleOpenModal = {this.handleOpenModal} handleCloseModal = {this.handleCloseModal}/>
            
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