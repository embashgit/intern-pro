import React, { Component } from 'react'
import TriggerButton from '../../../components/Modal/TriggerButton';
import { Modal, Button, Typography, Grid, TextField, InputAdornment, IconButton, Divider } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { FetchDeleteSemester as getDelete } from '../../../helpers/semester.helper';
import { connect } from 'react-redux';
import Media from "react-media";
import { handleInputChange } from '../../../helpers/eventHandling';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../../styles/modal';
import { styles as formstyle} from '../../../styles/scss/style';
import { Colors } from '../../../styles/themes';
import { red } from '@material-ui/core/colors';
import { PersonAddDisabledOutlined, RestoreOutlined, Add, PersonAdd, Person, PersonOutline, PersonPinCircleSharp, ControlPointDuplicateOutlined, CalendarViewDayOutlined } from '@material-ui/icons';
import { API } from '../../../Constants/costants';

const supvsrid = 2;
class InternAdd extends Component {

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

 getSupervisorsDropdown=()=>{
     return fetch(API.URL + API.PATHS.STAFF,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        return response.json()
    })
        .then(({data}) => {
            this.setState({internInput:{
                ...this.state.internInput,
                roleid:3,
                staffid:this.props.staff.data.id
            }})
            
            let nonIntern = data.filter(staff=> staff.roleid ===supvsrid)
            return this.setState({AllStaff:nonIntern})
            ;
        })
 }

 componentDidMount= ()=>{
    this.getSupervisorsDropdown()
 }
   componentDidUpdate =(prevProps,prevState)=>{
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
    const internInput = handleInputChange(event, this.state.internInput);
    this.setState({ internInput });
}

handleOnSubmit=()=>{
    console.log(this.props.staff.data.id)
    console.log(this.state.internInput);
    // this.setState({internInput:{
    //     ...this.state.internInput,
    //     staffid:this.props.staff.data.id,
    //     roleid:3,
    // }})
    
this.props.handleAdd(this.state.internInput);
}
render() {
    const {classes,staff}= this.props;
    const {isMobile}= this.state;
    const {paper,mobileWidth,width,} = classes;
    const triggerText = <span style={{color:Colors.base}}>Register</span>;
    const Icon =<PersonAdd style={{color:Colors.base}}/>


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
            <Typography style={{textAlign:'left'}} variant="subtitle2">Register Intern</Typography>
                <Divider style={{ marginBottom: '10px' }}></Divider>
                <div className={classes.closeModal}>
                    
            <Button onClick={this.closeModal}>
            &#x2715;
            </Button>
           
            </div>
            <Grid container xs={12}>
                    <Grid item xs={12} >
                        <TextField
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="institution"
                            label="Institution"
                            value={this.state.internInput.institution}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <Person />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="level"
                            label="Level"
                            value={this.state.internInput.level}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <PersonOutline />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="status"
                            label="Status"
                            value={this.state.internInput.status}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <ControlPointDuplicateOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        select
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="supervisorid"
                            label="Supervisor"
                            value={this.state.internInput.supervisorid}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                // endAdornment: (
                                //     <InputAdornment position="end">
                                //         <IconButton aria-label="">
                                //             <PersonPinCircleSharp />
                                //         </IconButton>
                                //     </InputAdornment>
                                // )
                            }}
                        >
                             {this.state.AllStaff.map(spvr => (
                                <option className={classes.option} key={spvr.id} value={spvr.id}>
                                    {`${spvr.firstname} ${spvr.surname}`}
                                </option>
                            ))}
                            </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="date"
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                           label="Due date"
                           InputLabelProps={{
                            shrink: true
                         }}
                            fullWidth
                            name="duedate"
                            value={this.state.internInput.duedate}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <CalendarViewDayOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        >
                           
                            </TextField>
                    </Grid>
            </Grid>
            <Button variant="contained"
    //   disabled={departmentData['formLoading']}
       style={{marginTop:10,color:Colors.light,background:Colors.base}}
        onClick={this.handleOnSubmit} fullWidth variant="outlined"><Add/> 
       Register Intern
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

InternAdd.propTypes = {
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles,formstyle)(InternAdd));
