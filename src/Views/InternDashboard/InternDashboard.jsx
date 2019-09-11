import React, { Component } from 'react'
import Charts from '../Dashboard/Charts'
import { Grid, Paper, Button, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Calendar from 'react-calendar';
import '.././Styles.css'
import { connect } from 'react-redux';
import { API } from '../../Constants/costants';
import moment from 'moment';


class InternDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            taskList: [],
            loading:true,
            supervisor: ''
        }
    }

    handleDataChange = date => this.setState({ date })
    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }


    componentDidMount = () => {
        const { id } = this.props.userData;
        return fetch(`${API.URL + API.PATHS.OWNTASK}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json()
        })
            .then(responseData => {
               
                this.setState({ taskList: responseData.data,loading:false })
                console.log(this.state.taskList)
            })
    }


     
    render() {


      const renderTaskItems = this.state.taskList.length ? this.state.taskList.map((item, i) => {
            console.log(item)
            const currentDate = moment();
            const dd = moment(item.data.duedate);
           
                return (
                    <ListItem className="lists" key={item.data.id}>
                        <ListItemText
                            onChange={this.handleChange}
                            primary={item.data.title}
                            
                            secondary={`Duration: ${dd.diff(currentDate, 'days')} days`} />
                          <Typography variant="subtitle2">
                          Description: {item.data.description}
                          </Typography>
                    </ListItem>
                )
            
        }) : <p>Fetching....</p>
        return (
            <div>
                <Charts />
                <div className="center_element">
                    <Grid container xs={12} spacing={5}>
                        {!this.state.loading && <Grid item xl={6} sm={12} lg={6} >
                            <Paper>
                                <Typography className="paperTitle">
                                    Tasks Assign to you
                                 </Typography>
                                <Divider className="hrLine" />
                                <Typography
                                    onChange={this.handleChange}
                                    className="supervisorTitle"
                                    id="supervisorName"
                                >
                                    Supervisor:
                                    </Typography>

                                <List>
                                    {renderTaskItems}
                                </List>

                            </Paper>
                        </Grid>}
                        <Grid item xl={6} sm={12} lg={6} className="center_element">
                            <Paper>
                                <Typography className="paperTitle">
                                    CALENDAR
    </Typography>
                                <Divider className="hrLine" />
                                <div>
                                    <Calendar
                                        onChange={this.handleDataChange}
                                        value={this.state.date}
                                    />
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        tasksList: state.interns.taskList,
        userData: state.AuthState.data.user,
    }
}
export default connect(mapStateToProps)(InternDashboard)