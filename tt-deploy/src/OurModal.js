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
           isOpen={this.state.showModal}
           contentLabel="Inline Styles Modal Example"
           style={{
              overlay: {
                backgroundColor: 'papayawhip'
              },
              content: {
                color: 'lightsteelblue'
              }
            }}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}



export default OurModal;