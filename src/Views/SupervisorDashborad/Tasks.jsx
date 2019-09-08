

import React, { Component } from 'react'
// import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import { styles } from '../../styles/payment.styles';
import { withStyles, Slide, createMuiTheme, MuiThemeProvider, Typography, Divider, Card } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import Spinner from '../../components/Spinner';
import { styleProps } from '../../container/routes';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import '../Styles.css'
import { WorkOutlineOutlined, SettingsApplicationsOutlined } from '@material-ui/icons';
import { Colors } from '../../styles/themes';
import { API } from '../../Constants/costants';
import moment from 'moment';


class Tasks extends Component {

  state = {
    rowsPerPage: 5,
    isLoading: true,
    tasks: [],
    taskList: [],
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
  handleCloseServerError = () => {
    return this.props.fetchRefresh();
  }
  componentDidMount() {
    this.getAllTask()
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)

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
      return {

        id:id,
        duedate:`${row.data.duedate ? moment(row.data.duedate).format('LL'): 'No duration'}`,
        title:row.data.title,
        supervisor:row.supervisor? row.supervisor: 'General Task',
        status:row.data.status,
        action:<SettingsApplicationsOutlined/>

          //Updates
          // <Checkbox
            // checked={this.state.checkedB}
            // onChange={this.handleChange('checkedB')}
            // handleChange={this.handleChange} {...this.state.tasks}
            // id="selected"
            // value="checkedB"
            // color="default"
            // inputProps={{
            //   'aria-label': 'secondary checkbox',
            // }}

          // TopAction ={'Edit'}
          // TopAction={<UpdateSemester Icon={<Edit style={{marginLeft:8}}/>}
          // triggerText="Edit" 
          // style={{width:150,color:Colors.blueSecondary,justifyContent:'space-around'}}
          // semester={row} />}
          // />
      }
    }) : [];
    const columns = [
      //   {
      //       name: "id",
      //       label: "#",
      //       options: {
      //           sort: true,
      //           filter:true,
      //       }
      //   },

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
          </Grid>

          <Grid item xs={12}>
            {isLoading ? <Spinner {...styleProps} /> : renderDataTable}

          </Grid>
        </Grid>
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