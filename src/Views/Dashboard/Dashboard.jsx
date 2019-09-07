import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from './Charts';
import { withStyles, Button, Grid, TextField, Typography, Divider, InputAdornment, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { styles } from '../../styles/scss/style';
import DisplayDrawer from '../../components/DisplayDrawer';
import { handleInputChange } from '../../helpers/eventHandling';
import { Person, PersonOutline, EmailOutlined, Folder, HighQuality } from '@material-ui/icons';
import { Colors } from '../../styles/themes';
import InternsTable from '../Staff/InternsTable';
import { API } from '../../Constants/costants';
import StaffTable from '../Staff/staffTable';
import { validateInputs } from '../../helpers/ValidationHelper';
import Snackbars from '../../components/Snackbars';



const customDrawerStyle = {
    width: 400
}
export const staffType = [
    {id:1,name:'Admin'},
    { id: 2, name: 'Supervisor' },
    { id: 3, name: 'Intern' },
    { id: 4, name: 'others' }
];

export const genderList = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' }
];
export const jobType = [
    { id: 1, name: 'Administration' },
    { id: 2, name: 'Management' },
    { id: 3, name: 'Development' },
    { id: 4, name: 'Marketing' },

];
class Dashboard extends Component {
    state = {
        isOpen: false,
        staff: {
            firstname: '',
            surname: '',
            roleid:2,
            middlename:'',
            gender: '',
            jobtitle: 3,
            email: '',
            age:'',

        },
        showSnack:false,
        message:'',
        key:'',
    }


    getInterns=()=>{
        return fetch(API.URL + API.PATHS.INTERN_LIST, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json()
        })
            .then(responseData => {
                console.log(responseData)
                return responseData;
            })
    }
    componentDidMount = () => {
        this.getInterns();      
    }



    handleCloseServerError=()=>{
        this.setState({ showSnack:false,
            message:'',
            })
        
    }


    handleAddStaff = (payload) => {
        return fetch(API.URL + API.PATHS.ADD_STAFF, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }).then(({data,meta}) => {
          console.log(data)
          this.setState({showSnack:true,message:'Success',key:'success'})
          return this.getInterns();
        }).catch(err=>{
            console.log(err);
          return this.setState({showSnack:true,message:'Error',key:'error'})
        })
      } 


      handleOnSubmit=()=>{
          console.log(this.state.staff)
          if(validateInputs(this.state.staff, '')){
            this.setState({key:'warning',message:'One or more field(s) is required',showSnack:true})
            
          }else{
              this.handleAddStaff(this.state.staff);
          }
      }

    handleFormInputChange = (event) => {
        const staff = handleInputChange(event, this.state.staff);
        this.setState({ staff });
    }
    renderCreateForm = () => {
        return this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        const { classes } = this.props;
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
        const form = (
            <div style={{ width: '100%' }}>
                <Typography variant="subtitle2">Add Staff</Typography>
                <Divider style={{ marginBottom: '10px' }}></Divider>
                <Grid container xs={12}>
                    <Grid item xs={12} >
                        <TextField
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="firstname"
                            label="First Name"
                            value={this.state.staff.firstname}
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
                    <Grid item xs={12} >
                        <TextField
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="middlename"
                            label="Middle Name"
                            value={this.state.staff.middlename}
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
                            name="surname"
                            label="Surname Name"
                            value={this.state.staff.surname}
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
                    <Grid item xs={6} style={{ paddingRight: 5 }}>
                        <TextField
                            {...formInputProps}
                            id="roleid"
                            name="roleid"
                            select
                            label="Staff type"
                            className={classes.selectField}
                            value={this.state.staff.roleid}
                            onChange={this.handleFormInputChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.selectMenu,
                                },
                            }}

                            margin="dense"
                            variant="outlined"
                        >
                            {staffType.map(type => (
                                <option disabled={type.id===1} className={classes.option} key={type.name} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            {...formInputProps}
                            id="jobtitle"
                            name="jobtitle"
                            select
                            label="Job Tittle"
                            className={classes.selectField}
                            value={this.state.staff.jobtitle}
                            onChange={this.handleFormInputChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.selectMenu,
                                },
                            }}

                            margin="dense"
                            variant="outlined"
                        >
                            {jobType.map(type => (
                                <option className={classes.option} key={type.name} value={type.name}>
                                    {type.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                        type="number"
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="age"
                            label="Age"
                            value={this.state.staff.age}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <HighQuality />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid xs={12} >
                        <TextField
                            {...formInputProps}
                            id="gender"
                            name="gender"
                            select
                            label="Staff Gender"
                            className={classes.selectField}
                            value={this.state.staff.gender}
                            onChange={this.handleFormInputChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.selectMenu,
                                },
                            }}

                            margin="dense"
                            variant="outlined"
                        >
                            {genderList.map(type => (
                                <option className={classes.option} key={type.name} value={type.name}>
                                    {type.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            {...formInputProps}
                            classNames={classes.textfield}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="email"
                            label="email"
                            value={this.state.staff.email}
                            onChange={this.handleFormInputChange}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="">
                                            <EmailOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 10 }}>
                        <Button

                            style={{ backgroundColor: Colors.base, color: Colors.light }}
                            onClick={this.handleOnSubmit}
                            fullWidth
                            variant="outlined">Add Staff</Button>
                    </Grid>

                </Grid>
            </div>
        )

        return (
            <div >
                <div >
                    <Charts />
                    <div>
                        <Button onClick={this.renderCreateForm} className={classes.addButton} variant="contained">Add Staff</Button>
                    </div>
                    <div style={{ width: '100%'}}>
                        <Grid container spacing={12}>
                            {/* <Grid item xs={12}>
                                <List style={{ width: '100%',marginTop:20 }} className={classes.listroot}>
                                    {this.props.taskList ? this.props.taskList.map((task) => (<ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Folder />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={task.title} secondary={`start date:${task.startdate}`} />
                                    </ListItem>)) : <ListItemText >No Project Found</ListItemText>}
                                </List>
                            </Grid> */}
                            <Grid item style={{marginTop:20}} xs={12}>
                                <InternsTable />
                            </Grid>
                        <Grid item xs={12}>
                            <StaffTable />
                        </Grid>
                        </Grid>
                    </div>
                </div>
                <DisplayDrawer
                    position="right"
                    drawerStyles={customDrawerStyle}
                    isOpen={this.state.isOpen}
                    toggleDrawer={this.renderCreateForm}
                >
                    <div style={{ padding: 15 }}>
                        {form}
                    </div>
                </DisplayDrawer>
                <Snackbars
          variant={this.state.key}
          handleClose={this.handleCloseServerError}
          message={this.state.message}
          isOpen={this.state.showSnack}
        />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.interns.taskList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))
