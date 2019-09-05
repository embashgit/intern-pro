import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            open : true, 
            setOpen : true,
        }
    }

    handleClickOpen = () => {
        this.setState({setOpen:true, open: true});
  }

    handleClose = () => {
        this.setState({setOpen:false, open: false});
  }

    render(){
        return (
            <div>
            <Dialog open={this.state.setOpen} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
            <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
            </DialogContentText>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                Subscribe
                </Button>
            </DialogActions>
            </Dialog>
            </div>
          );
    }  
}
