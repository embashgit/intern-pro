import React, { Component } from 'react'

// import { updateBreadcrumb } from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import { styles } from '../../styles/payment.styles';
import { withStyles, Typography, Slide,Grow,Divider, createMuiTheme, MuiThemeProvider } from '@material-ui/core'; 
import MUIDataTable, { MUIDataTablePagination } from "mui-datatables";
import Spinner from '../../components/Spinner';
// import { styleProps } from '../Settings/Institution/Institution';
import { getAllPaymentHistory } from '../../helpers/payment.helper';
import Snackbars from '../../components/Snackbars';
import { fetchRefreshRequest } from '../../actions/payment.action';
import { styleProps } from '../../container/routes';
import CallOut from '../../components/CallOut/CallOut';
import Deactivate from './Deactivate';
class TaxList extends Component {
state={
  rowsPerPage:5,
  isLoading:true,
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
          backgroundColor: "transparent"
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
            action: <CallOut 
            BottomAction={<Deactivate staff={row} />}
            // TopAction={<UpdateSemester Icon={<Edit style={{marginLeft:8}}/>}
            // triggerText="Edit" 
            // style={{width:150,color:Colors.blueSecondary,justifyContent:'space-around'}}
            // semester={row} />}
            />
        }
    }) : [];
    const columns = [
      {
          name: "id",
          label: "#",
          options: {
              sort: true,
              filter:true,
          }
      },

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
        name: "gender",
        label: "Gender",
        options: {
          sort: true,
      },
      

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
      <div>
        {isLoading? <Spinner {...styleProps}/>:renderDataTable}
        {/* <Snackbars
          variant="error"
          handleClose={this.handleCloseServerError}
          message={this.props.paymentData.dataErrorMessage}
          isOpen={this.props.paymentData.dataError}
        /> */}
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
    // getPaymentHistory :()=>dispatch(getAllPaymentHistory()),
    // fetchRefresh:()=>dispatch(fetchRefreshRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaxList))