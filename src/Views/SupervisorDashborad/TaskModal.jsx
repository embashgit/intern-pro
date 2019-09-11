import React, { Component } from 'react'
import TriggerButton from '../../components/Modal/TriggerButton';
import { Modal, Button, Typography, Grid, TextField, InputAdornment, IconButton, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { FetchDeleteSemester as getDelete } from '../../helpers/semester.helper';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/modal';
import { styles as formstyle} from '../../styles/scss/style';
import { Colors } from '../../styles/themes';
import { red, grey } from '@material-ui/core/colors';
import {   Visibility } from '@material-ui/icons';
import Media from 'react-media';
import moment from 'moment';


class TaskModal extends Component {

    state = { isShown: false,
         shifModal:false,
         left:50,
         top:50,
         AllStaff:[],
         isMobile: '',
         internInput:{
            status:'',
            institution:'',
            supervisorid:'',
            duedate:'',
            level:'',
            staffid:'',
            roleid:'',
         }
         };

/**
 * change modal direction
 * use
 * */


  showModal = () => {
    this.setState({ isShown: true }, () => {
    });
}
closeModal = ()=>{
    this.setState({isShown:false})
}
getModalStyle=()=> {
    const {top,left,shifModal}=this.state;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      transition:'0.3s',
      textAlign:'center',
      width:'30%',
      alignItems:'center',

    };
  }

render() {
    const {classes,staff}= this.props;
    const {isMobile}= this.state;
    const {paper,mobileWidth,width,} = classes;
    const triggerText = <span style={{color:Colors.base}}>View</span>;
    const Icon =<Visibility style={{color:Colors.base}}/>


    const formInputProps = {
        InputLabelProps: {
            classes: {
                root: classes.label,
            }
        },
        InputProps: {
            classes: {
                input: classes.resize,
            },
        }
    }


    const TaskShow =()=>{
        const {task} = this.props;
        const currentDate = moment();
        const dd =moment(task.duedate);
        return(
        <div>
            <div style={this.getModalStyle()} className={classNames(paper,isMobile? mobileWidth:width)}>
                <Typography variant="h5">{task.title}</Typography>
                <Divider></Divider>
                <div className={classes.closeModal}>
                    
                    <Button onClick={this.closeModal}>
                    &#x2715;
                    </Button>
                   
                    </div>
                <Typography style={{textAlign:'center'}} variant="subtitle2">{task.description}</Typography>
                <Typography style={{textAlign:'right',marginTop:30,color:grey[600]}} variant="p">Duration  :{currentDate.diff(dd,'days')} days left</Typography>
                <Typography variant="subtitle2" >Status: {task.status}</Typography>
               
            </div>   
        </div>
    )}
    return (
      < React.Fragment>
       <Media query="(max-width: 992px)" onChange={matches => this.setState({isMobile: matches})}/>
        <TriggerButton 
        showModal={this.showModal}
        style={{width:'100%',color:Colors.danger,justifyContent:'space-around'}}
        triggerText={triggerText}
        buttonRef={(n) => (this.TriggerButton = n)}
        outlined={this.props.outlined}
        Icon={Icon}
        />

          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.isShown}
          onClose={this.closeModal}
          >
         <TaskShow/>
          </Modal> 
      </ React.Fragment>
    )
  }
}

TaskModal.propTypes = {
    classes: PropTypes.object.isRequired,
    closeModal:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,

  };

  const mapStateToProps = (state) => {
    return {
     
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      getDelete:id =>dispatch(getDelete(id))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles,formstyle)(TaskModal));
