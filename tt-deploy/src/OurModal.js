import React, { Component } from 'react';
import ReactModal, {Modal} from 'react-modal';

ReactModal.setAppElement('#main');

class OurModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button type="button" className="notbutton" onClick={this.handleOpenModal}>Splitting options</button>
        <ReactModal 
           isOpen={this.state.showModal} class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title" id="exampleModalLabel">
                            Tweet splitting allows us to formate your thread for you.
                        </div>
                        <button  onClick={this.handleCloseModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div class="modal-body">
                        ...
                    </div>

                    <div class="modal-footer">

                        <form>
                            <div class="b-7" data-dismiss="modal"><input type="submit2" value="cancel"/></div>

                            <div class="b-6">
                                <input type="submit2" value="submit"/>
                            </div>
                        </form> 

                    </div>
        </ReactModal>
      </div>
    );
  }
}



export default OurModal;