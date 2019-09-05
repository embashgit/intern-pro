import React, { Component } from 'react'
import Charts from '../Dashboard/Charts'
import { Grid, Paper, Button, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Calendar from 'react-calendar';
import '.././Styles.css'
import axios from 'axios'

export default class InternDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date(),
            taskList:[]
        }
    }

    handleDataChange = date => this.setState({ date })
    handleChange = (e) =>{
        this.setState({
        [e.target.name] : [e.target.value]
        })
    }

    componentDidMount = () =>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            const taskList = res.data.slice(0, 3);
            this.setState({
                taskList
            });
        })
    }

    render() {
    return (
    <div>
    <Charts/>
    <div className="center_element">
    <Grid container xs={12} spacing={5}>
    <Grid item xl={6} sm={12} lg={6} >
    <Paper>
    <Typography className="paperTitle">
    TASK LIST
    </Typography>
    <Divider className="hrLine"/>
        <Typography 
        onChange={this.handleChange}
        className="supervisorTitle"
        id="supervisorName"
        >
        Supervisor : Muhammad Ishaq Ahmad
        </Typography>

    <List>
    {this.state.taskList.map(item => (
    <ListItem className="lists" key = {item.id}>
        <ListItemText 
        onChange={this.handleChange}
         primary={item.title} 
         secondary="Jan 1, 2019" />
        <Typography
        onChange={this.handleChange}
        >{item.userId}
        </Typography>
    </ListItem>
    ))}
    </List>

    </Paper>
    </Grid>
    <Grid item xl={6} sm={12} lg={6} className="center_element">
    <Paper>
    <Typography className="paperTitle">
    CALENDAR
    </Typography>
    <Divider className="hrLine"/>
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