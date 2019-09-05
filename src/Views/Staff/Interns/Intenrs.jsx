import React, { Component } from 'react'
// import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import { styles } from '../../../styles/payment.styles';
import { withStyles, Slide, createMuiTheme, MuiThemeProvider } from '@material-ui/core'; 
import MUIDataTable from "mui-datatables";
import Spinner from '../../../components/Spinner';
import AssignTasks from './AssignTasks'
import AssignSupervisor from '../../Staff/Interns/AssignSupervisor'
import RemoveInterns from '../../Staff/Interns/RemoveInterns'
// import { styleProps } from '../Settings/Institution/Institution';
// import { fetchRefreshRequest } from '../../actions/payment.action';
import { styleProps } from '../../../container/routes';
//Updates
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import '../Styles.css'
class InternList extends Component {

state={
  rowsPerPage:5,
  isLoading:true,
  tasks: [],
}

//Updates Tasks
handleChange = (event) => {
  let tasks = this.state.tasks
  tasks.forEach(tasks => {
    if (tasks.value === event.target.value)
      tasks.isChecked =  event.target.checked
    })
  this.setState({tasks: tasks})
}

handleCloseServerError=()=>{
  return this.props.fetchRefresh();
}
componentDidMount(){
    setTimeout(()=>{
this.setState({isLoading:false})
    },1000)

}
getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "transparent",
          boxShadow:'none'
        },
        paper:{
            boxShadow: 'none',
        }
      }
    }
  })
  render() {
      const {isLoading}=this.state;
      const data = this.props.internList && this.props.internList.constructor === Array ? this.props.internList.map((row, i) => {
        return {
          
            ...row,
            action: 
            
            //Updates
            <Checkbox
            // checked={this.state.checkedB}
            // onChange={this.handleChange('checkedB')}
            handleChange={this.handleChange} {...this.state.tasks}
            id="selected"
            value="checkedB"
            color="default"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          
            // TopAction ={'Edit'}
            // TopAction={<UpdateSemester Icon={<Edit style={{marginLeft:8}}/>}
            // triggerText="Edit" 
            // style={{width:150,color:Colors.blueSecondary,justifyContent:'space-around'}}
            // semester={row} />}
            />
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
          name: "firstname",
          label: "First name",
          options: {
            sort: true,
        }
      },
      {
          name: "surname",
          label: "Surname",
          options: {
            sort: true,
        }
      },
      {
        name: "jobtype",
        label: "Job Type",
        options: {
          sort: true,
      }
    },
     
    {
        name: "startdate",
        label: "Start Date",
        options: {
          sort: true,
      }
    },
    {
        name: "enddate",
        label: "Start Date",
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
      rowsPerPageOptions: [5,10, 20, 50, 100],
      }

  const renderDataTable = (
    <Slide direction="left" in={!isLoading}>
      <div>
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
         title="Interns"
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
     <div className="dialogs">
     <AssignTasks/>
     <AssignSupervisor/>
     <RemoveInterns/>
     </div>
     </Grid>
     <Grid item xs={12}>
        {isLoading? <Spinner {...styleProps}/>:renderDataTable}
        {/* <Snackbars
          variant="error"
          handleClose={this.handleCloseServerError}
          message={this.props.paymentData.dataErrorMessage}
          isOpen={this.props.paymentData.dataError}
        /> */}
        </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    internList:state.interns.internList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InternList))