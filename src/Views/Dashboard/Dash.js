import React, { Component } from 'react'
import { connect } from 'react-redux';
import Charts from './Charts';
import { withStyles, Button, Grid, TextField, Typography, Divider, InputAdornment, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { styles } from '../../styles/scss/style';
import DisplayDrawer from '../../components/DisplayDrawer';
import { handleInputChange } from '../../helpers/eventHandling';
import { Person, PersonOutline, EmailOutlined, Folder } from '@material-ui/icons';
import { Colors } from '../../styles/themes';
import InternsTable from '../Staff/InternsTable';
// import Testtable from '../Staff/Interns/TestTable';

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
export class Dash extends Component {
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

  
    render() {
      

        return (
            <div>
                <InternsTable/>
                hello world
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
export default Dash
