import React, { Component } from 'react'
// import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import { styles } from '../../styles/payment.styles';
import { withStyles, Typography, Slide, Grow, Divider, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MUIDataTable, { MUIDataTablePagination } from "mui-datatables";
import Spinner from '../../components/Spinner';
import CallOut from '../../components/CallOut/CallOut';
import Deactivate from './Deactivate';
import { styleProps } from '../../container/routes';
import { API } from '../../Constants/costants';
import moment from 'moment';
import InternModal from './Interns/InternModal';
import Snackbars from '../../components/Snackbars';
import { validateInputs } from '../../helpers/ValidationHelper';

class InternList extends Component {

  state = {
    rowsPerPage: 5,
    isLoading: true,
    showSnack:false,
    message:'',
    success:null,
    internList: []
  }

  handleCloseServerError = () => {
    return this.setState({ showSnack:false,
      message:'',
      success:null
    })
    ;
  }

  getInterns() {
    return fetch(API.URL + API.PATHS.INTERN_LIST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      return response.json()
    })
      .then(({ data }) => {
        console.log(data)
        
        return this.setState({ internList: data })
          ;
      }).catch(err=>{
        console.log(err)
       return this.setState({showSnack:true,message:err.meta.message,success:false})
      })
  }

  handleDeactivate=(id)=>{
    return fetch(`${API.URL + API.PATHS.INTERN_DELETE}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      
    }).then(res=>res.json())
    .then((res) => {
      console.log(res)
      this.setState({showSnack:true,message:'Deactivated',success:true})
      return this.getInterns();
    }).catch(err=>{
      console.log(err)
      return this.setState({showSnack:true,message:"error",success:false})
    })
  }

  handleAddIntern = (payload) => {
    return fetch(API.URL + API.PATHS.INTERN_ADD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(res=>res.json())
    .then(({data,meta}) => {
      console.log(data)
      this.setState({showSnack:true,message:meta.message,success:true})
      return this.getInterns();
    }).catch(err=>{
      return this.setState({showSnack:true,message:err.meta.message,success:false})
    })
  }
  addIntern = (payload) => {
    if(!validateInputs(payload,'')){
      this.handleAddIntern(payload);
    }else{
      return this.setState({showSnack:true,message:'Field(s) cannot be empty',success:false})
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)

    return this.getInterns();
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
    const { isLoading } = this.state;

    const data = this.state.internList && this.state.internList.constructor === Array ? this.state.internList.map((row, i) => {
      return {

        firstname: row.data.firstname,
        surname: row.data.surname,
        gender: row.data.gender,
        age: row.data.age,
        jobtitle: row.data.jobtitle,
        institution: row.intern ? row.intern.institution : 'Not registered',
        level: row.intern ? row.intern.level : 'Not registered',
        status: row.intern ? row.intern.status : 'Not registered',
        enddate: row.intern ? moment(row.intern.duedate).format('LL') : 'Not registered',
        action: <CallOut
          BottomAction={row.intern ? <Deactivate handleDeactivate={() => this.handleDeactivate(row.intern.id)} staff={row} /> :
            <InternModal staff={row} handleAdd={(payload) => this.addIntern(payload)} />}
   
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
        name: "gender",
        label: "Gender",
        options: {
          sort: true,
        }
      },
      {
        name: 'age',
        label: 'Age'
      },
      {
        name: "enddate",
        label: "End Date",
        options: {
          sort: true,
        }
      },
      {
        name: "level",
        label: "Level",
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
      <div>
        {isLoading ? <Spinner {...styleProps} /> : renderDataTable}
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
    internList: state.interns.internList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InternList))

