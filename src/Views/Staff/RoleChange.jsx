import React, { Component } from 'react'
import TriggerButton from '../../components/Modal/TriggerButton';
import { Modal, Button, Typography, Grid, TextField, InputAdornment, IconButton, Divider } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { FetchDeleteSemester as getDelete } from '../../helpers/semester.helper';
import { connect } from 'react-redux';
import Media from "react-media";
import { handleInputChange } from '../../helpers/eventHandling';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/modal';
import { styles as formstyle} from '../../styles/scss/style';
import { Colors } from '../../styles/themes';
import { red } from '@material-ui/core/colors';
import { PersonAddDisabledOutlined, RestoreOutlined, Add, PersonAdd, Person, PersonOutline, PersonPinCircleSharp, ControlPointDuplicateOutlined, CalendarViewDayOutlined } from '@material-ui/icons';
import { API } from '../../Constants/costants';
import { staffType } from '../Dashboard/Dashboard';


class RoleChange extends Component {

    state = { isShown: false,
        roleChange:{
            staffid:'',
            roleid:'',
        }
         }

/**
 * change modal direction
 * use
 * */


 componentDidMount= ()=>{
   this.setState({roleChange:{
       ...this.state.roleChange,
       roleid:this.props.staff.roleid,
       staffid:this.props.staff.id
   }})
   
 }

     
  showModal = () => {
    this.setState({ isShown: true }, () => {
    });
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

onSubmit=()=>{}

closeModal = ()=>{
    this.setState({isShown:false})
}

handleFormInputChange = (event) => {
    const roleChange = handleInputChange(event, this.state.roleChange);
    this.setState({ roleChange });
}

handleOnSubmit=()=>{

this.props.handleRoleChange(this.state.roleChange);
}
render() {
    const {classes,staff}= this.props;
    const {isMobile}= this.state;
    const {paper,mobileWidth,width,} = classes;
    const triggerText = <span style={{color:Colors.base}}>Change Role</span>;
    const Icon =<PersonPinCircleSharp style={{color:Colors.base}}/>


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


    const form =(
        <div>
            <form onSubmit={this.onSubmit}>
            
            <div style={this.getModalStyle()} className={classNames(paper,isMobile? mobileWidth:width)}>
            <Typography style={{textAlign:'left'}} variant="subtitle2">Change Role</Typography>
                <Divider style={{ marginBottom: '10px' }}></Divider>
                <div className={classes.closeModal}>
                    
            <Button onClick={this.closeModal}>
            &#x2715;
            </Button>
           
            </div>
            <Grid container xs={12}>
            <Grid item xs={12}>
                <Typography variant="subtitle2">
                    {`Name : ${this.props.staff.firstname} ${this.props.staff.surname}`}
                </Typography>
                </Grid>
                    <Grid item xs={12}>
                        <TextField
                        select
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="roleid"
                            label="New Role"
                            value={this.state.roleChange.roleid}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                }
                            }}
                        >
                             {staffType.map(spvr => (
                                <option className={classes.option} key={spvr.id} value={spvr.id}>
                                    {spvr.name}
                                </option>
                            ))}
                            </TextField>
                    </Grid>
                    
            </Grid>
            <Button variant="contained"
    //   disabled={departmentData['formLoading']}
       style={{marginTop:10,color:Colors.light,background:Colors.base}}
        onClick={this.handleOnSubmit} fullWidth variant="outlined"><Add/> 
       Change Role
              </Button>
            </div>
            </form>
        </div>
    )
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
          {form}
          </Modal> 
      </ React.Fragment>
    )
  }
}

RoleChange.propTypes = {
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles,formstyle)(RoleChange));
