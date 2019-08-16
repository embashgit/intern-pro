import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from './Charts';
import { withStyles, Button, Grid, TextField, Typography, Divider, InputAdornment, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { styles } from '../../styles/scss/style';
import DisplayDrawer from '../../components/DisplayDrawer';
import { handleInputChange } from '../../helpers/eventHandling';
import { Person, PersonOutline, EmailOutlined, Folder } from '@material-ui/icons';
import { Colors } from '../../styles/themes';
import InternsTable from '../Staff/InternsTable';




const customDrawerStyle = {
    width: 400
}
export const staffType = [
    { id: 1, name: 'Staff' },
    { id: 2, name: 'Intern' },
    { id: 3, name: 'Admin' }
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
            type: 2,
            firstname: '',
            surname: '',
            gender: 1,
            jobtitle: 3,
            email: '',

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
                            id="type"
                            name="type"
                            select
                            label="Staff type"
                            className={classes.selectField}
                            value={this.state.staff.type}
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
                                <option className={classes.option} key={type.name} value={type.id}>
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
                                <option className={classes.option} key={type.name} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </TextField>
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
                                <option className={classes.option} key={type.name} value={type.id}>
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
                    <div style={{ width: '100%', marginTop: 20 }}>
                        <Grid container spacing={12}>
                            <Grid item xs={8}>
                                <InternsTable />
                            </Grid>
                            <Grid item xs={4}>
                                <List className={classes.listroot}>
                                    {this.props.taskList? this.props.taskList.map((task)=>(<ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Folder />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={task.title} secondary={`start date:${task.startdate}`} />
                                    </ListItem>)):<ListItemText >No Project Found</ListItemText>}
                                </List>
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
                </div>
                )
            }
        }
        
        const mapStateToProps = (state) => {
            return {
                taskList:state.interns.taskList
            }
          }
          const mapDispatchToProps = (dispatch) => {
            return {
              
            }
          }
        export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))
