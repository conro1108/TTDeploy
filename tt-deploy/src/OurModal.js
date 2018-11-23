import React, { Component } from 'react';
import ReactModal, {Modal} from 'react-modal';

class OurModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {showModal: false};        
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

    render() {
        return (
            <div className = "sub-body1">
            {split}
            <div className="b-2">

            <button type="button" className="notbutton" onClick={this.handleOpenModal}>Splitting options</button>
            <ReactModal 
            isOpen={this.state.showModal} style={customStyles}>
            <div className="modal-header">
            <div className="modal-title" id="exampleModalLabel">
            Tweet splitting allows us to formate your thread for you.
            </div>
            <button  onClick={this.handleCloseModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
            <div>
            Basic splitting: 
            <input
            name="Bsplitting"
            type="checkbox"
            checked={this.state.Bsplitting}
            onChange={this.handleInputChange} />
            </div>
            </div>

            <div className="modal-footer">
            <div className="b-7" data-dismiss="modal"><button type="submit2"onClick={this.handleCancel}>cancel</button></div>
            <div className="b-6">
            <button type="submit2" onClick={this.handleCloseModal}> submit </button>
            </div>
            </div>
            </ReactModal>
            </div>
            </div>
        );
    }
}



export default OurModal;