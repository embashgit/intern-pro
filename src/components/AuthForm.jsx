import React, { Component } from 'react'
import { IconButton,Button } from '@material-ui/core';
import Media from 'react-media';
import { KeyboardArrowRight } from '@material-ui/icons';
import InputComponent from './InputComponent';
// import {Link} from 'react-router-dom';
import Iconsusername from '../images/Iconsusermale';
import {history} from '../App.js'
const visibility =require('../images/password.png');
export class AuthForm extends Component {

    state={
    vissible:false,
    isMobile:false,
    formData:{
        email:'',
        password:'',
    }
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
      onSubmit=()=>{
         return history.push('/slide1');
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
                    <p>Log In</p>
                </div>
               <Iconsusername />
                {/* <div className='bulbSection'>
            </div> */}
                
                <form className="form">
                    <div>
                       <InputComponent
                       handleChange={this.handleChange}
                       placeholder="Enter username"
                         name="email" label="Username" type="email" key="email"
             labelStyle={{top:-15,color:"#fff",left:isMobile?45:''}}/> 

             <InputComponent 
             handleChange={this.handleChange}
             type={this.state.vissible ?'text':'password'} onIconClick={this.togglePassword} Icon={<img height="7px" width="20px"  src={visibility} alt="visibility" />} name="password" 
              label="Password"key="password"
              labelStyle={{top:-15,color:"#fff",left:isMobile?45:''}} placeholder="Enter Password"
              />
              <Button onClick={this.onSubmit} className="submit-btn" color="primary" variant="contained" >
                  SignIn
              </Button>
              <Button  id="info">Forget Password ?</Button>
              {/* <button style={{width:'',padding:'1em', marginTop:20,marginLeft:10}} id="button"><Link to="/slide1" style={{textDecoration:'none',color:'#fff'}} >Sign In</Link></button>
              <p id="info">Already have an account? Login   </p> */}
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default AuthForm
