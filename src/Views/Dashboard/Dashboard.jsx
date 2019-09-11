import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from './Charts';
import { withStyles, Button, Grid, TextField, Typography, Divider, InputAdornment, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { styles } from '../../styles/scss/style';
import DisplayDrawer from '../../components/DisplayDrawer';
import { handleInputChange } from '../../helpers/eventHandling';
import { Person, PersonOutline, EmailOutlined, Folder, HighQuality, VisibilitySharp } from '@material-ui/icons';
import { Colors } from '../../styles/themes';
import InternsTable from '../Staff/InternsTable';
import { API } from '../../Constants/costants';
import StaffTable from '../Staff/staffTable';
import { validateInputs } from '../../helpers/ValidationHelper';
import Snackbars from '../../components/Snackbars';
import { Visibility, VisibilityOff } from '../../mui';



const customDrawerStyle = {
    width: 400
}
export const staffType = [
    { id: 1, name: 'Admin' },
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

const emptyProfileForm = {
    staffid: '',
    username: '',
    password: '',
}

const emptyStaffForm = {
    firstname: '',
    surname: '',
    roleid: 2,
    middlename: '',
    gender: '',
    jobtitle: 3,
    email: '',
    age: '',
}
class Dashboard extends Component {
    state = {
        isOpen: false,
        formType: '',
        allProfile: [],
        showPassword: false,
        nonProfileArr: [],
        staff: {
            firstname: '',
            surname: '',
            roleid: 2,
            middlename: '',
            gender: '',
            jobtitle: 3,
            email: '',
            age: '',
        },
        profile: {
            staffid: '',
            username: '',
            password: '',
        },
        showSnack: false,
        message: '',
        key: '',
    }


    getInterns = () => {
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
        this.getAllProfile();
        this.getnNonProfiledStaff();
    }



    handleCloseServerError = () => {
        this.setState({
            showSnack: false,
            message: '',
        })

    }
    getAllProfile = () => {
        return fetch(API.URL + API.PATHS.PROFILES, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json()
        }).then(({ data }) => {
            this.setState({ allProfile: data })
            let profileID = [];
            for (let item of this.state.allProfile) {
                profileID.push(item.staffid);
            }
            this.setState({ allProfile: profileID })

        }
        )
    }

    getnNonProfiledStaff = () => {
        return fetch(API.URL + API.PATHS.STAFF, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json()
        })
            .then(({ data }) => {
                let nonProfiledStaff = data.filter(staff => !this.state.allProfile.includes(staff.id))
                this.setState({ nonProfileArr: nonProfiledStaff })
                console.log(this.state.nonProfileArr)

            })
    }
    handleAddStaff = (payload) => {
        return fetch(API.URL + API.PATHS.ADD_STAFF, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(({ data, meta }) => {
            console.log(data)
            this.setState({ showSnack: true, message: 'New Staff added', key: 'success', staff: emptyStaffForm })
            return this.getInterns();
        }).catch(err => {
            console.log(err);
            return this.setState({ showSnack: true, message: 'Staff not Added', key: 'error' })
        })
    }

    handleCreateProfile = (payload) => {
        return fetch(API.URL + API.PATHS.PROFILE_ADD, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(({ data, meta }) => {
            console.log(data)
            this.setState({ showSnack: true, message: 'Profile Created', key: 'success', profile: emptyProfileForm })
            this.getAllProfile();
            return this.getnNonProfiledStaff();
        }).catch(err => {
            console.log(err);
            return this.setState({ showSnack: true, message: 'Profile not Created', key: 'error' })
        })
    }

    handleOnSubmit = () => {
        console.log(this.state.staff)
        if (validateInputs(this.state.staff, '')) {
            this.setState({ key: 'warning', message: 'One or more field(s) is required', showSnack: true })

        } else {
            this.handleAddStaff(this.state.staff);
        }
    }

    handleProfileForm = (event) => {
        const profile = handleInputChange(event, this.state.profile);
        this.setState({ profile })

    }

    handleProfileCreate = () => {
        if (validateInputs(this.state.profile, '')) {
            this.setState({ key: 'warning', message: 'One or more field(s) is required', showSnack: true })
        } else {
            this.handleCreateProfile(this.state.profile)
        }
    }

    handleFormInputChange = (event) => {
        const staff = handleInputChange(event, this.state.staff);
        this.setState({ staff });
    }
    renderCreateForm = (type) => {
        if (type) {
            if(type === 'profile') {
                this.getAllProfile();
                this.getnNonProfiledStaff();
            }
        }
        this.setState({ formType: type })
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
        const staff_form = (
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
                                <option disabled={type.id === 1} className={classes.option} key={type.name} value={type.id}>
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
                              <Button
                            style={{marginTop:20, borderColor: Colors.base, color: Colors.base }}
                            onClick={() => {this.setState({ formType: 'profile' });this.getAllProfile();
                            this.getnNonProfiledStaff();}}
                            fullWidth
                            variant="outlined">Create profile</Button>
                    </Grid>
                </Grid>
            </div>
        )

        const profile_form = (
            <div>
                <Typography variant="subtitle2">Create profile</Typography>
                <Divider style={{ marginBottom: '10px' }}></Divider>
                <Grid container xs={12}>
                    <Grid item xs={12} >
                        <TextField
                            {...formInputProps}
                            id="staffid"
                            name="staffid"
                            select
                            label="Staff"
                            className={classes.selectField}
                            value={this.state.profile.staffid}
                            onChange={this.handleProfileForm}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.selectMenu,
                                },
                            }}

                            margin="dense"
                            variant="outlined"
                        >
                            {this.state.nonProfileArr.map(staff => (
                                <option className={classes.option} key={staff.name} value={staff.id}>
                                    {`${staff.firstname} ${staff.surname}`}
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
                            name="username"
                            label="Username"
                            value={this.state.profile.username}
                            onChange={this.handleProfileForm}
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
                            type={this.state.showPassword ? 'text' : 'password'}
                            name="password"
                            label="password"
                            value={this.state.profile.password}
                            onChange={this.handleProfileForm}
                            InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => this.setState({ showPassword: !this.state.showPassword })
                                        } aria-label="">
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>
                <div style={{ marginTop: 20 }}>
                    <Button variant="raised" onClick={this.handleProfileCreate} style={{ background: Colors.base, color: Colors.light }} fullWidth>Create Profile</Button>
                </div>
            </div>
        )

        return (
            <div >
                <div >
                    <Charts />
                    <div style={{ width: '100%' }}>
                        <Button onClick={() => this.renderCreateForm('staff')} className={classes.addButton} variant="contained">Add Staff</Button>
                        <Button onClick={() => this.renderCreateForm('profile')} style={{ marginLeft: '60%' }} className={classes.addButton} variant="contained">Create Profile</Button>
                    </div>
                    <div style={{ width: '100%' }}>
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
                            <Grid item style={{ marginTop: 20 }} xs={12}>
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
                        {this.state.formType === 'staff' ? staff_form : profile_form}
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
        taskList: state.interns.taskList,
        userData: state.AuthState.data.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))
