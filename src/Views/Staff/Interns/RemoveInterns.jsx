import React, {Component} from 'react';
import {Button,Typography, Dialog, DialogActions, DialogContent} from '@material-ui/core';
import '../Styles.css'

export default class AssignTasks extends Component {
    constructor(props){
        super(props);
        this.state={
          open: false,
          setOpen: false,
        }
    }
 
     handleClick = (e) => {
         e.preventDefault();
         const isValid = this.validate();
         if (isValid){
         window.location = "/Interns" 
         this.setState({title: '', description : '', email: ''})
         }  
     }

    handleClickOpen = () => {
    this.setState({setOpen:true, open:true});
    }

    handleClose = () => {
    this.setState({setOpen:false, open:false});
    }

  render(){
     
    return (
        <div>
          <Button 
          className="buttons"
          variant="contained" 
          onClick={this.handleClickOpen}>
              Remove Interns
          </Button>
          <Dialog  open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogContent className="DialogBody">
            <Typography className="removes">Are you sure?</Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      );
}
}
