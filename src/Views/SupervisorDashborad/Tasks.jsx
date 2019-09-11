

import React, { Component } from 'react'
// import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import { styles } from '../../styles/payment.styles';
import { withStyles, Slide, createMuiTheme, MuiThemeProvider, Typography, Divider, Card, Button, IconButton } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import Spinner from '../../components/Spinner';
import { styleProps } from '../../container/routes';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import '../Styles.css'
import { WorkOutlineOutlined, SettingsApplicationsOutlined, DeleteForeverOutlined } from '@material-ui/icons';
import { Colors } from '../../styles/themes';
import { API } from '../../Constants/costants';
import moment from 'moment';
import Snackbars from '../../components/Snackbars';
import TaskModal from './TaskModal';
import CallOut from '../../components/CallOut/CallOut';
import AddTask from './AddTask';
import { validateInputs } from '../../helpers/ValidationHelper';


class Tasks extends Component {

  state = {
    rowsPerPage: 5,
    isLoading: true,
    tasks: [],
    taskList: [],
    key:'',
    message:'',
    showSnack:false,
  }

  //Updates Tasks
  handleChange = (event) => {
    let tasks = this.state.tasks
    tasks.forEach(tasks => {
      if (tasks.value === event.target.value)
        tasks.isChecked = event.target.checked
    })
    this.setState({ tasks: tasks })
  }

  handleCloseServerError=()=>{
    this.setState({message:'',showSnack:false})
  }

  getAllTask = () => {
    return fetch(API.URL + API.PATHS.TASKLIST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      return response.json()
    }).then(({ data }) => { this.setState({ taskList: data }) })
  }

  handleOnSubmit = (payload) => {
    console.log(payload)
    if (validateInputs(payload, '')) {
        this.setState({ key: 'warning', message: 'One or more field(s) is required', showSnack: true })

    } else {
        this.handleAddTask(payload);
    }
}
  handleAddTask=(payload)=>{
    return fetch(API.URL + API.PATHS.TASK_ADD, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)

  }).then(res=>res.json())
  .then(({ data, meta }) => {
      console.log(data)
      this.setState({ showSnack: true, message: 'New Task assigned', key: 'success' })
      return this.getAllTask();
  }).catch(err => {
      console.log(err);
      return this.setState({ showSnack: true, message: 'Task Fail to be assigned', key: 'error' })
  })
  }
  componentDidMount() {
    this.getAllTask()
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)

  }
  handleRemoveTask=(id)=>{
    return fetch(`${API.URL + API.PATHS.TASK_DELETE}${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response=>response.json())
    .then(res=>{
      this.setState({ message:'Task Deleted',
      showSnack:true,key:'success'})
      this.getAllTask();
    })
    .catch(err=>{
      console.log(err)
      this.setState({ message:'Task was\'nt deleted',
      showSnack:true,key:'error'});
    })

  }
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "transparent",
          boxShadow: 'none'
        },
        paper: {
          boxShadow: 'none',
        }
      }
    }
  })
  render() {
    console.log(this.props.tasksList);
    const { isLoading } = this.state;
    const data = this.state.taskList && this.state.taskList.constructor === Array ? this.state.taskList.map((row, i) => {
      let id = ++i;
      const currentDate = moment();
      const dd =moment(row.data.duedate);
      return {

        id:id,
        duedate:`${row.data.duedate ? `${dd.diff(currentDate,'days')} days left`: 'No duration'}`,
        title:row.data.title,
        supervisor:row.supervisor? row.supervisor: 'General Task',
        status:row.data.status,
        action:( <CallOut
          BottomAction={row.data &&  <TaskModal  task={row.data} />}
          TopAction ={row.data && <Button fullWidth onClick={()=>this.handleRemoveTask(row.data.id)}>Remove Task</Button>}
          />
        )

      }
    }) : [];
    const columns = [
   

      {
        name: "id",
        label: "#",
        options: {
          sort: true,
        }
      },
      {
        name: "title",
        label: "Title",
        options: {
          sort: true,
        }
      },
      {
        name: "status",
        label: "Status",
        options: {
          sort: true,
        }
      },

      {
        name: "duedate",
        label: "Due Date",
        options: {
          sort: true,
        }
      },
      {
        name: "supervisor",
        label: "supervisor",
        options: {
          sort: true,
        }
      },
      {
        name: "action",
        label: "Actions",
      },

    ];
    const options = {
      filterType: 'checkbox',
      pagination: true,
      rowsPerPage: this.state.rowsPerPage,
      // serverSide: true,
      search: true,
      selectableRows: 'none',
      rowsPerPageOptions: [5, 10, 20, 50, 100],
    }

    const renderDataTable = (
      <Slide direction="left" in={!isLoading}>
        <div>
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title="Task List"
              data={data}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>
      </Slide>
    )
    return (
      <div >
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <Typography variant="subtitle1">Recent task Project</Typography>
            <div className="headerCards" >
              {this.state.taskList.map((item, i) => {
                if (i < 3) {
                  return (
                    <Card className="cards">
                      <WorkOutlineOutlined />
                      <p>{item.data.title}</p>
                      {`${item.data.duedate? moment(item.data.duedate).format('LL'): 'No Duration'}`}
                    </Card>
                  )
                }
              })

              }
            </div>
            <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
            <Card><AddTask handleAdd={(payload)=>this.handleAddTask(payload)}/></Card>
            
            </div>
          </Grid>

          <Grid item xs={12}>
            {isLoading ? <Spinner {...styleProps} /> : renderDataTable}

          </Grid>
        </Grid>
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
    tasksList: state.interns.taskList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Tasks))