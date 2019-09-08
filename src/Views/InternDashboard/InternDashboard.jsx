import React, { Component } from 'react'
import Charts from '../Dashboard/Charts'
import { Grid, Paper, Button, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Calendar from 'react-calendar';
import '.././Styles.css'
import {connect} from 'react-redux';
import { API } from '../../Constants/costants';


 class InternDashboard extends Component {
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
      
 return fetch(API.URL+API.PATHS.STAFF,{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
      }
  }).then(response=>{
      return response.json()
  })
  .then(responseData=>{
  console.log(responseData)
  return responseData;
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
    Tasks Assign to you
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
    {this.props.tasksList && this.props.tasksList.length?this.props.tasksList.map((item,i) => {
    if(i<this.props.tasksList.length - 2){
return(
            <ListItem className="lists" key = {item.id}>
                <ListItemText 
                onChange={this.handleChange}
                 primary={item.title} 
                 secondary={item.startdate} />
                <Typography
                onChange={this.handleChange}
                >{item.userId}
                </Typography>
            </ListItem>
)
    }}):<p>Fetching....</p>
        }
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

const mapStateToProps = (state) => {
    return {
        tasksList:state.interns.taskList
    }
  }
export default connect(mapStateToProps)(InternDashboard)