/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Icon, MenuIcon, Typography, Avatar, Menu, MenuItem,
        AccountCircle, Divider, ListItemIcon, ListItemText,} from '../../mui';
import { styles} from '../../styles/scss/style';
import Media from "react-media";
import { userLogout } from '../../helpers/authentication.helper';
import { connect } from 'react-redux'
import { Fonts, Colors } from '../../styles/themes';
import { ExitToAppOutlined } from '@material-ui/icons';
// import { logout } from '../../actions/authentication.action';
// import logo from '../../assets/img/nlogo.svg'
const AvatarImg = require('../../images/avatar.png');
// import UserIcon from '../../images/UserIcon'
const Spinner =<Loader type="Watch" color={Colors.blueSecondary} height="20" width="20"/>

class DefaultHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isMobile: '',
          anchorEl: null,
        };
    }

    componentDidMount(){}
    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
      handleLogout = ()=>({

      })
    render () {
      const {classes,isLoading,userData, sidebarFixed} = this.props
      const { isMobile } = this.state
      const { anchorEl } = this.state;
      const {user} =userData;
        return (
            <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: isMobile ? false : sidebarFixed ,
            })}
            >
            <Media query="(max-width: 992px)" onChange={matches => this.setState({isMobile: matches})}/>
            <Toolbar disableGutters={false}>
                
                <div >
                <Typography variant="h6" style={{fontFamily:Fonts.primary}} color="inherit" noWrap>
                {isMobile ?'I-pro': 'Intern-pro'}
                </Typography>
                </div>
                <div className={classes.grow} />
                <Typography variant="button" color="inherit" style={{float:"right",fontFamily:Fonts.primary, textTransform:"none"}} noWrap>
                {isMobile ? 'BM' :isLoading? '': user?user.surname:''}
                </Typography>
                <IconButton
                    aria-owns={anchorEl? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                >
                 <img height="40px" width="40px" src={AvatarImg} />
                {/* <UserIcon  color={Colors.base}/> */}
                </IconButton> 
                    <Menu
                    id="material-appbar"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{marginTop:35}} classes={{paper:classes.menu}} 
                    >
                    {/* <MenuItem onClick={this.handleClose}><Icon color="primary" style={{marginRight:10}} >account_circle_outlined</Icon>Profile</MenuItem> */}
                    {/* <MenuItem onClick={this.handleClose}><Icon style={{color:"#388e3c", marginRight:10}} >people</Icon>Accounts
                    </MenuItem> */}
                    <Divider  />
                    <MenuItem onClick={this.props.userLogout}><ExitToAppOutlined/> Logout</MenuItem>
                    </Menu>

            </Toolbar>
            </AppBar>
        )
    }
}

DefaultHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => {
    return{
      userData: state.AuthState.data,
      isLoading:state.AuthState.isLoadingData,
      dataError:state.AuthState.dataError,
      dataErrorMessage:state.AuthState.dataErrorMessage,

    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout()),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DefaultHeader))
  
