import React, { Component } from 'react'
import { IconButton,Button } from '@material-ui/core';
import Media from 'react-media';
import { KeyboardArrowRight } from '@material-ui/icons';
import InputComponent from './InputComponent';
import { withStyles } from '@material-ui/core/styles';
// import {Link} from 'react-router-dom';
import Iconsusername from '../images/Iconsusermale';
import {history} from '../App.js'
import { connect } from 'react-redux';
import Snackbars from '../components/Snackbars';
import styles from '../styles/Authentication.styles';
import { userLogin } from '../helpers/authentication.helper';
import PropTypes from 'prop-types';
const visibility =require('../images/password.png');


const Errormessage = "Invalid credentials";
export class AuthForm extends Component {

    state={
    vissible:false,
    isMobile:false,
    signinFormError:false,
    formData:{
        email:'',
        password:'',
    }
    }

    componentWillUnmount(){
        clearTimeout(this.ErrorTimer)
    }
    handleCloseSnack = () => {
        this.setState({ 
          signinFormError:false
         })
      }
    togglePassword = () => {
 
        this.setState(state => ({ vissible: !this.state.vissible }));
       
      };
      
      handleChange=(e)=>{
          const {name,value} =e.target
            this.setState({formData:{
                ...this.state.formData,
                [name]:value
            }
            });
      }
      onSubmit=(e)=>{
        e.preventDefault();
        const { userLogin } = this.props;
        const { formData} = this.state;
        if ((!formData['email'] || !formData.password)) {
          this.setState({ signinFormError: true }, () =>
            this.ErrorTimer = setTimeout(() => this.setState({ signinFormError: false }), 7500)
          )
        } else {
          let credentials = { phone: formData['email'], pin: formData.password }
         return  userLogin(credentials);
        
        }
        //  return history.push('/slide1');
      }
    render() {
        const {isMobile} =this.state;
        return (
            <div className="form-container">
                 <Media query="(max-width: 992px)" onChange={matches => this.setState({ isMobile: matches })
    } />
                <div id="Skyball" />
            <div id="skyball2" />
                <div className="icon-div">
                    <IconButton className="iconButton" onClick={this.props.handleDrawer}>
                        <KeyboardArrowRight  className="icon" style={{fontSize:45,color:'#fff',zIndex:100000}}/>
                    </IconButton>
                </div>
                <div className="formWrapper">
                <div className="formHeader">
                    <p>Sign In</p>
                </div>
               <Iconsusername />
                {/* <div className='bulbSection'>
            </div> */}
                
                <form className="form">
                <Snackbars
          variant="error"
          handleClose={this.handleCloseSnack}
          message={Errormessage}
          isOpen={this.state.signinFormError}
        />
                    <div>
                       <InputComponent
                       handleChange={this.handleChange}
                       placeholder="Enter username"
                       value={this.state.formData.email}
                         name="email" label="Username" type="email" key="email"
             labelStyle={{top:-15,color:"#fff",left:isMobile?45:''}}/> 

             <InputComponent 
             handleChange={this.handleChange}
             value={this.state.formData.password}
             type={this.state.vissible ?'text':'password'} onIconClick={this.togglePassword} Icon={<img height="7px" width="20px"  src={visibility} alt="visibility" />} name="password" 
              label="Password"key="password"
              labelStyle={{top:-15,color:"#fff",left:isMobile?45:''}} placeholder="Enter Password"
              />
              <Button onClick={this.onSubmit} className="submit-btn" color="primary" variant="contained" >
                  SignIn
              </Button>
              <Button  id="info">Forget Password ?</Button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      authState:state.AppAuth,
  
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      userLogin: (user) => dispatch(userLogin(user)),
    }
  }
AuthForm.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AuthForm))
