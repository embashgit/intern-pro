import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';

export class AuthForm extends Component {
    render() {
        return (
            <div className="form-container">
                <div className="icon-div">
                    <IconButton className="iconButton" onClick={this.props.handleDrawer}>
                        <NavigateNext  className="icon" style={{fontSize:45,color:'#333',zIndex:100000}}></NavigateNext>
                    </IconButton>
                </div>
                <div className="formWrapper">
                <div className="formHeader">
                    <p>Log In</p>
                </div>
                </div>
            </div>
        )
    }
}

export default AuthForm
