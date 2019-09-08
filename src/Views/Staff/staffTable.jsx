import React, { Component } from 'react'
// import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import { styles } from '../../styles/payment.styles';
import { withStyles, Typography, Slide,Grow, Divider, createMuiTheme, MuiThemeProvider } from '@material-ui/core'; 
import MUIDataTable, { MUIDataTablePagination } from "mui-datatables";
import Spinner from '../../components/Spinner';
import CallOut from '../../components/CallOut/CallOut';
import Deactivate from './Deactivate';
import { styleProps } from '../../container/routes';
import { API } from '../../Constants/costants';
import moment from 'moment';
import Snackbars from '../../components/Snackbars';
import RoleChange from './RoleChange';

class InternList extends Component {

state={
  rowsPerPage:5,
  isLoading:true,
  staff:[],
}

handleCloseServerError = () => {
    return this.setState({ showSnack:false,
      message:'',
      success:null})
    ;
  }


  handleRoleChange=(payload)=>{
    
    return fetch(`${API.URL + API.PATHS.CHANGEROLE}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(payload)
      }).then(res=>res.json())
      .then(res => {
          console.log(res)
        this.setState({showSnack:true,message:"role Changed successfuly",success:true})
        return this.getAllStaff();
      }).catch(err=>{
          console.log(err)
        return this.setState({showSnack:true,message:"error ",success:false})
      })
    }
  
getAllStaff=()=>{

    return fetch(API.URL+API.PATHS.STAFF,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
          }
      }).then(response=>{
          return response.json()
      })
      .then(({data,meta})=>{
      console.log(data)
      return this.setState({staff:data});
      })
}
    componentDidMount = () =>{
    this.getAllStaff();
}

handleDeactivate=(id)=>{
    return fetch(`${API.URL + API.PATHS.DELETE_STAFF}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      
    }).then(res=>res.json())
    .then(res => {
        console.log(res)
      this.setState({showSnack:true,message:"success",success:true})
      return this.getAllStaff();
    }).catch(err=>{
        console.log(err)
      return this.setState({showSnack:true,message:"error ",success:false})
    })
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

    const data = this.state.staff && this.state.staff.constructor === Array ? this.state.staff.map((row, i) => {
        return {
            ...row,
            enrolledAt:moment(row.createdAt).format('LL'),
            role:row.roleid===1?'Admin':row.roleid===2? 'Supervisor':row.roleid === 3?'Intern':'Others',
            action: <CallOut 
            BottomAction={<Deactivate handleDeactivate={()=>this.handleDeactivate(row.id)} staff={row} />}
            TopAction={<RoleChange handleRoleChange={(payload)=>this.handleRoleChange(payload)} staff={row} />}
            // TopAction ={'Edit'}
            // TopAction={<UpdateSemester Icon={<Edit style={{marginLeft:8}}/>}
            // triggerText="Edit" 
            // style={{width:150,color:Colors.blueSecondary,justifyContent:'space-around'}}
            // semester={row} />}
            />
        }
    }) : [];
    const columns = [
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
        name: "jobtitle",
        label: "Job Type",
        options: {
          sort: true,
      }
    },
    {
        name: "enrolledAt",
        label: "Hired Date",
        options: {
          sort: true,
      }
    },
     
    {
        name: "role",
        label: "role",
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
    <Slide direction="left" in={isLoading}>
      <div style={{marginTop:20}}>
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
         title="Staff"
         data={data}
         columns={columns}
         options={options}
         />
         </MuiThemeProvider>
      </div>
    </Slide>
  )

   
    return (
      <div>
        {renderDataTable}
        <Snackbars
          variant={this.state.success? "success":"error"}
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
    internList:state.interns.internList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InternList))

