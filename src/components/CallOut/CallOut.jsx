import React, { Component } from 'react'
import { SettingsIcon } from '../../mui';
import { Colors } from '../../styles/themes';
import { withStyles } from '@material-ui/core';
import { styles } from '../../styles/callout.styles';
import UsersIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux'
import {
   Button, Icon,  Menu, MenuItem, Divider
} from '../../mui';


class CallOut extends Component {
state={
    anchorEl: null,
}


handleFirstActionProps =() =>{
  // this.props.fecondAction(id)
  // this.setState({anchorEl:!this.state.anchorEl})
}

handleSecondActionProps =() =>{
  // this.props.secondAction(id)
  // this.setState({anchorEl:!this.state.anchorEl})
}
    CalloutOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
      };

  render() {
      const {
        classes, 
        TopAction,
        BottomAction,
        id,
      } = this.props;
      console.log()
      const {  anchorEl } = this.state
    return (
      <div key={this.props.key} className={classes.callout}>
         <Button  onClick={this.CalloutOpen} color="inherit" className={classes.callOutButton}>
           <SettingsIcon/>
        </Button>
        <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  transformOrigin={{ vertical: "top"}}
                  open={Boolean(anchorEl)}
                  onClose={() => this.setState({ anchorEl: null })}
                  style={{ marginTop: -30 }} classes={{ paper: classes.menu }}
                >
                 {TopAction && <MenuItem  onClick={()=>this.handleFirstActionProps()} 
                  color={Colors.danger}
                   style={{paddingLeft:0,paddingRight:0}} 
                   onMouseEnter={(e) => e.target.style.color =Colors.blueSecondary} 
                  onMouseLeave={(e)=>e.target.style.color =Colors.grey}>{TopAction}
                  <Divider />
                  </MenuItem>
                  }
                {BottomAction && <MenuItem  onClick={()=>this.handleSecondActionProps()} 
                style={{color:Colors.danger,paddingLeft:0,paddingRight:0}}
                //  onMouseEnter={(e) => e.target.style.color =Colors.blueSecondary} 
                  // onMouseLeave={(e)=>e.target.style.color =Colors.danger}
                  >{BottomAction}</MenuItem>}
                </Menu>
                
      </div>
    )
  }
}

export default withStyles(styles)(CallOut)


