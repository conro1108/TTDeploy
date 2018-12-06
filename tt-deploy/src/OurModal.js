import React from 'react';
import ReactModal from 'react-modal';


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

class OurModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {                                               Bsplitting: props.Bsplitting,
                      splitting: props.splitting,
                      showModal: props.showModal};   
    }

    
    

    render() {
                let split;
        const splitstate = this.props.splitting;
        if(splitstate === "off"){ split =
            <div className="b-1">
                Auto splitting: off
                    </div>;
                    //console.log("splitting displays off");
        }
        else{ split =
            <div className="b-1">
                Auto splitting: on
                    </div>;
             //console.log("splitting displays on");
            }
        return (
            <div className = "sub-body1">
            {split}
            <div className="b-2">
            <button type="button" className="notbutton" onClick={this.props.handleOpenModal}>Splitting options</button>
            <ReactModal 
            isOpen={this.props.showModal} style={customStyles}>
            <div className="modal-header">
            <div className="modal-title" id="exampleModalLabel">
            Tweet splitting allows us to formate your thread for you.
            </div>
            <button  onClick={this.props.handleCloseModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
            <div>
            Basic splitting: 
            <input
            name="Bsplitting"
            type="checkbox"
            checked={this.props.Bsplitting}
            onChange={this.props.handleInputChange} />
            </div>
            </div>

            <div className="modal-footer">
            <div className="b-7" data-dismiss="modal"><button type="submit2"onClick={this.props.handleCancel}>cancel</button></div>
            <div className="b-6">
            <button type="submit2" onClick={this.props.handleSplitting}> submit </button>
            </div>
            </div>
            </ReactModal>
            </div>
            </div>
        );
    }
}



export default OurModal;