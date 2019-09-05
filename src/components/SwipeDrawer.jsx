import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


const styles = {
  list: {
    flex:1,
    margin:'auto',
    padding:20,
    justifyContent:'center',
  },
  fullList: {
    width: 'auto',
  },
  BackdropProps: {
    backgroundColor: 'transparent'
  },
drawerWidth:{
  width: 350,
 
},

};

class DisplayDrawer extends React.Component {

  
  render() {
    const { classes,isOpen,toggleDrawer,position,children,drawerStyles} = this.props;

    

    return (
      <div>
        <SwipeableDrawer
        classes={{paper:classes.BackdropProps}}
          anchor={position}
          open={isOpen}
          onClose={toggleDrawer}
          style={{background:"transparent"}}
          SwipeAreaProps={{
              classes:{
                root:classes.BackdropProps,
              }
            
          }}
          onOpen={toggleDrawer}
        >
          <div
          
            tabIndex={0}
            role="button"
            // onClick={toggleDrawer}
            // onKeyDown={toggleDrawer }
          >
          <div className={classes.list} style={{...styles.drawerWidth,...drawerStyles}}>
            {children}
          </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

DisplayDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(DisplayDrawer);
