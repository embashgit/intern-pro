import React, { Component } from 'react'
import { Modal as MuiModal} from '@material-ui/core';
import Media from 'react-media';
class Modal extends Component {

    state={
        isMobile:'',
    }
  render() {
    return (
      <div>
        < React.Fragment>
       <Media query="(max-width: 992px)" onChange={matches => this.setState({isMobile: matches})}/>
      
          <MuiModal
        //   onEscapeKeyDown={this.props.closeModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.isShown}
          onClose={this.props.closeModal}
          style={{alignItems:'center',justifyContent:'center'}}
          >
        {this.props.children}
          </MuiModal>
      </ React.Fragment>
      </div>
    )
  }
}

export default Modal
