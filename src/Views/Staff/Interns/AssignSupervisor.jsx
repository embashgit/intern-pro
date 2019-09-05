import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AssignSupervisor extends Component {
    constructor(props){
        super(props);
        this.state={
          open: false,
          setOpen: false
        }
    }

  handleClickOpen = () => {
    this.setState({setOpen:true, open:true});
  }

  handleClose = () => {
    this.setState({setOpen:false, open:false});
  }

  render(){
      const {classes} = this.props;
    return (
        <div>
          <Button 
          className="buttons"
          variant="contained" 
          onClick={this.handleClickOpen}>
              Assign Supervisor
          </Button>
          <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Assign Supervisor</DialogTitle>
            <DialogContent>
             
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Send
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}
}
