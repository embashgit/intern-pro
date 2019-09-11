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
import { PersonAddDisabledOutlined, RestoreOutlined, Add, PersonAdd, Person, PersonOutline, PersonPinCircleSharp, ControlPointDuplicateOutlined, CalendarViewDayOutlined, LocalActivity, DescriptionOutlined, ClassOutlined } from '@material-ui/icons';
import { API } from '../../Constants/costants';

const supvsrid = 2;

class AddTask extends Component {

    state = { isShown: false,
         shifModal:false,
         left:50,
         top:50,
         AllStaff:[],
         isMobile: '',
         internInput:{
            status:'',
            title:'',
            supervisorid:'',
            duedate:'',
            description:'',
            staffid:'',
         }
         };

/**
 * change modal direction
 * use
 * */

getInterns() {
    return fetch(API.URL + API.PATHS.INTERN_LIST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      return response.json()
    })
      .then(({ data }) => {
          this.setState({ AllStaff: data });
          console.log(this.state.AllStaff)
        
      }).catch(err=>{
        console.log(err)
       return this.setState({showSnack:true,message:err.meta.message,success:false})
      })
  }
 

 componentDidMount= ()=>{
    this.getInterns()
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
    console.log(this.state.internInput);
    this.setState({internInput:{
        ...this.state.internInput,
        supervisorid:this.props.userData.id,
        status:"New",
    }},()=>this.props.handleAdd(this.state.internInput))
    
// this.props.handleAdd(this.state.internInput);
}
render() {
    const {classes}= this.props;
    const {isMobile}= this.state;
    const {paper,mobileWidth,width,} = classes;
    const triggerText = <span style={{color:Colors.base}}>Assign Task</span>;
    const Icon =<LocalActivity style={{color:Colors.base}}/>

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
            <Typography style={{textAlign:'left'}} variant="subtitle2">Assign Task</Typography>
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
                            name="title"
                            label="Title"
                            value={this.state.internInput.title}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <ClassOutlined />
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
                            name="description"
                            label="Description"
                            value={this.state.internInput.description}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <DescriptionOutlined />
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
                            name="staffid"
                            label="Assign To"
                            value={this.state.internInput.staffid}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                            }}
                        >
                             {this.state.AllStaff.map(spvr => (
                                <option className={classes.option} key={spvr.data.id} value={spvr.data.id}>
                                    {`${spvr.data.firstname} ${spvr.data.surname}`}
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

AddTask.propTypes = {
    classes: PropTypes.object.isRequired,
    closeModal:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,

  };

  const mapStateToProps = (state) => {
    return{
      userData: state.AuthState.data.user,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      getDelete:id =>dispatch(getDelete(id))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles,formstyle)(AddTask));
