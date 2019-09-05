import React, {Component} from 'react';
import { Button,
        Typography, 
        Dialog, DialogTitle, DialogActions, DialogContent, 
        TextField} from '@material-ui/core';
import Interns from './Intenrs'
import '../Styles.css'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default class AssignTasks extends Component {
    constructor(props){
        super(props);
        this.state={
          open: false,
          setOpen: false,
          title: '',
          description: '',
          email: '',
          emailError: ''
        }
    }

    handleChange = e => {
      const isCheckbox = e.target.type === "checkbox";
      this.setState({ 
          [e.target.id]: isCheckbox
          ? e.target.checked
          : e.target.value
      })
      }

      validate = () => {
        let emailError = "";
        
        if((this.state.title && this.state.description && this.state.email) === ''){
          emailError = 'please fill in the correct details';
        }
        if(!emailRegex.test(this.state.email)){
         emailError = 'please fill in the correct details';
        }
 
        if(emailError){
            this.setState({ emailError});
            return false;
        }
            return true;
     };
 
     handleClick = (e) => {
         e.preventDefault();
         const isValid = this.validate();
         if (isValid){
        //  this.props.selected.push()
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
              Assign Task
          </Button>
          <Dialog  open={this.state.open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Tasks</DialogTitle>
            <DialogContent className="DialogBody">
              <TextField
                autoFocus
                className="textFields"
                onChange={this.handleChange}
                margin="dense"
                id="title"
                label="Task Title"
                type="text"
              
              />
              <TextField
                className="textFields"
                onChange={this.handleChange}
                margin="dense"
                id="description"
                label="Task Description"
                type="text"
              />
              <TextField
                className="textFields"
                onChange={this.handleChange}
                margin="dense"
                id="email"
                label="Interns Email"
                type="email"
              />
              {this.state.emailError}
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={this.handleClick}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      );
}
}
