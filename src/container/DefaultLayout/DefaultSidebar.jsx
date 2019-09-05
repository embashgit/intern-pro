import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { styles } from '../../styles/scss/style';
import Media from "react-media";
import { connect } from 'react-redux'
import {
  classNames, Button, Icon,  CssBaseline,
  List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton,
   Typography, ExpandMore, ExpandLess, NotesIcon, MenuIcon,
  Grow, Menu, MenuItem, Divider
} from '../../mui';
import { Collapse, } from '@material-ui/core'
import { handleSidebarNavItems} from '../../helpers/uiHelpers';
import { Colors } from '../../styles/themes';
import { fetchUserData } from '../../helpers/account.helper';
import DisplayDrawer from '../../components/SwipeDrawer';
import { BusinessOutlined } from '@material-ui/icons';
import { history } from '../../App';
// import PaymentFee from '../../Views/payment/PaymentFee';

const Spinner = <Loader type="Puff" color="#f4f4f4"
  height="40"
  width="40" />

  const customDrawerStyle = {
    width:400
  }
const nameLoader = <Loader type="Puff" color={Colors.light}
  height="20"
  width="20" />

class DefaultSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoad: false,
      open: false,
      BusinessName: '',
      isMobile: '',
      sidebarFixed: true,
      openNest: '',
      prevNest: '',
      drawerIsOpen: false,
      anchorEl: null,
      companySwitchHover: false,
    };

  }


  componentDidMount = () => { }

  toggleHover() {
    this.setState(previousState => {
      return { companySwitchHover: !previousState.companySwitchHover };
    });
  }

  fixSidebar = () => {
    this.setState({ sidebarFixed: !this.state.sidebarFixed })
    this.props.fixSidebar();
  }
  handleChangeBusinessName = (id) => {
    this.setState({ anchorEl: !this.state.anchorEl },
      () => this.props.fetchUserData(id))
  }
  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlMouseLeave = (e) => { e.target.color = Colors.grey }
  handleClick = (item, index) => {
    if (item.children) {
      this.state.openNest === index ?
        this.setState({ openNest: '' }) :
        this.setState({ openNest: index })
    } else {
    history.push(item.link);
    }
  }

  handleToggleDrawer = () => {
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen })
  }
  onMouseLeave = () => {
    this.setState((prevState) => ({
      openNest: '',
      prevNest: prevState.openNest
    }));
    this.props.handleDrawerClose();
  }

  onMouseEnter = () => {
    this.setState(prevState => ({ openNest: prevState.prevNest }));
    this.props.handleDrawerOpen();
  }

  render() {
    const { classes, open, location, userData, isLoading,profileData } = this.props;
    const { isMobile, sidebarFixed, openNest, anchorEl,  } = this.state
    //  const handleFontSize = (arg)=>{
    //    const showdiv = document.getElementById('buizName').innerHTML;
    //    console.log(showdiv);
    //   const size = arg.length;
    //  return  size<8? '':document.getElementById('buizName').style.fontSize ='15px'
    //  }


    const menuList = [
      ...handleSidebarNavItems(this.props.userData),
    ];

   
    return (
      <div className={classes.root} >
        <Media query="(max-width: 992px)" onChange={matches => this.setState({ isMobile: matches })
        } />
        {/* <DisplayDrawer
          position="right"
          drawerStyles={customDrawerStyle}
          isOpen={this.state.drawerIsOpen}
          toggleDrawer={this.handleToggleDrawer}
        >
          <PaymentFee handleCloseDrawer={this.handleToggleDrawer}/>
        </DisplayDrawer> */}
        <CssBaseline />
        <Drawer
       
          anchor="left"
          open={open}
          onMouseEnter={!sidebarFixed && this.onMouseEnter}
          onMouseLeave={!sidebarFixed && this.onMouseLeave}
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.drawerToggle}>
            <Grow in={open}>
              <div >
          
                <Button variant="outlined" color="inherit" className={classes.companyButton}>
                  <Typography variant="h5" id="buizName" className={classes.companyName}><span><BusinessOutlined style={{ position: "absolute", top: 5, left: 0,color:Colors.light }}  /></span>{isLoading ? nameLoader : userData.profile ? userData.profile['abbrv'] : ''}</Typography>
                </Button>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  transformOrigin={{ vertical: "top" }}
                  open={Boolean(anchorEl)}
                  onClose={() => this.setState({ anchorEl: null })}
                  style={{ marginTop: 48 }} classes={{ paper: classes.menu }}

                >
                  {userData.associates ? userData.associates.map(business => {
                    return (
                      <MenuItem onMouseEnter={(e) => e.target.style.color = Colors.blueSecondary}
                        onMouseLeave={(e) => e.target.style.color = Colors.grey}
                        onClick={() => this.handleChangeBusinessName(business.id)}>{business.name}</MenuItem>
                    )
                  }) : <h4>No associate business</h4>}
                  <Divider />
                  <Button className={classes.addButton} >
                    <span>
                      <Icon style={{ position: 'absolute', top: 4, left: 30 }}>add</Icon>
                    </span>
                    Add Business
                   </Button>
                </Menu>
              </div>
            </Grow>
            <IconButton onClick={this.fixSidebar} style={{ color: "#fff", position: "absolute", right: 0 }}>
              {sidebarFixed ? <NotesIcon color="inherit" /> : <MenuIcon color="inherit" />}
            </IconButton>
          </div>
{open && <div className={classes.authProfile}>
<img height="150px" src={require('../../images/phoneProfile.png')} alt="profile-display"/>
<div>

  <Typography color="textSecondary" variant="subtitle2">Name: <span>{profileData.name}</span></Typography>
  <Typography color="textSecondary" variant="subtitle2">Title: <span>{profileData.title}</span></Typography>
  <div className={classes.pic}>
    <Button  className={classes.picButton} variant="outlined" > Change Image</Button>
  </div>
</div>
</div>}
<List key="List">
            {menuList.map((item, index) => {

              if (item.name === 'Payment') {
                return (
                     <ListItem button className="sidebarBtn" style={{ '&:focus': { outline: "none" } }} onClick={() => this.setState({ drawerIsOpen: true })} key={item.name} >
                      <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
                      {item.children && open && <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>}
                    </ListItem>
            
                )
              } else {
                return (
                  <>
                    <ListItem button className="sidebarBtn" style={{ '&:focus': { outline: "none" } }} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link} key={item.name} >
                      <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
                      {item.children && open && <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>}
                    </ListItem>

                    <Collapse in={openNest === index} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding key="subList">

                        {
                          item.children && item.children.map((item, index) =>{
                            if (item.name === 'Payment') {
                              return (
                                   <ListItem button className={classes.nested} style={{ '&:focus': { outline: "none" } }} selected={location.pathname === item.link} onClick={() => this.setState({ drawerIsOpen: true })} key={item.name} >
                                    <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
                                  </ListItem>
                          
                              )
                            
                            }else{

                              return(
                              <ListItem button className={classes.nested} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link} key={item.name} >
                                <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                                {<ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />}
                              </ListItem>
                            )
                            }
                        })
                        }
                      </List>
                    </Collapse>
                  </>
                )
              }
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.AuthState.data,
    profileData:state.AuthState.data.profile,
    isLoading: state.AuthState.isLoadingData,
    dataError: state.AuthState.dataError,
    dataErrorMessage: state.AuthState.dataErrorMessage,
    roles: state.roles,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (businessId) => dispatch(fetchUserData(businessId))
  }
}


DefaultSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles, { withTheme: true })(DefaultSidebar)));