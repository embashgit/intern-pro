import {green, grey, blue} from '../../mui';
import { CallReceived } from '@material-ui/icons';
import { Fonts, Colors } from '../themes';
import { lime, red } from '@material-ui/core/colors';
const drawerWidth = 240

export const styles = theme => ({
    root: {
        display: 'flex',
        marginBottom:theme.spacing.unit
      },
     label:{
      fontSize: "14px",
      transform: "translate(14px, 12px)",
      marginTop: 2,
     }, 
     resize:{
      fontSize: 14,
      margin: theme.spacing.unit/2,
      paddingHorizontal:5, 
      padding: "0.5em",
     },
     textfield:{
      margin: theme.spacing.unit,
      // margin: theme.spacing.unit,
        marginTop:10,
          width:'100%',
     },
     selectField:{
      
      width:'100%',
      marginTop:10,
     },
     selectMenu:{width:160},
     option:{
      outline:'none',
      cursor:'pointer',
      padding:5,
      paddingLeft:10,
      borderRadius:5,

      '&:hover':{
          backgroundColor:Colors.grey,
          color:Colors.light
      }

     },
     listroot: {
      width: '100%',
      maxWidth: 390,
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      maxHeight: 500,
      marginLeft:20,
      padding:10,
      backgroundColor: theme.palette.background.paper,
    },
     resize:{
      fontSize: 14,
      margin: theme.spacing.unit/2,
      paddingHorizontal:5, 
      padding: "0.5em",
     },
      content: {
        flexGrow: 1,
        marginTop: "50px",
        padding: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 7 + 1,
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      authProfile:{
        marginTop: "50px",
        padding: theme.spacing.unit * 3,
        justifyContent:'center',
        textAlign:'center',
      },
      contentShift: {
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
      },
      // appBar: {
      //   // zIndex: theme.zIndex.drawer + 1,
      //   transition: theme.transitions.create(['margin', 'width'], {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.leavingScreen,
      //   }),
      //   backgroundColor: "#fff",
      //   color: grey[700],
      //   width: `calc(100% - ${theme.spacing.unit * 6 + 1}px)`
      // },
      // appBarShift: {
      //   marginLeft: drawerWidth,
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   transition: theme.transitions.create(['width', 'margin'], {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.enteringScreen,
      //   }),
      // },
      appBar: {
        // zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#fff",
        color: grey[700],
        width: `calc(100% - ${theme.spacing.unit * 6 + 1}px)`,
        marginLeft: theme.spacing.unit * 7 + 1,
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      hide: {
        display: 'none',
      },
      grow: {
        flexGrow: 1,
      },
      
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        color: "#ffffff",
        position: "absolute"
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#325774'
      },
      drawerToggle: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        borderBottom:'1px solid #697cdea8',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        color:"#fff"
      },
      drawerHeader: {
        display: 'grid',
        alignItems: 'center',
        padding: '0 8px',
        // ...theme.mixins.toolbar,
        justifyContent: 'center',
        color: "#fff",
        marginBottom:"1em",
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 6 + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing.unit * 7 + 1,
        },
      },
      drawerHeaderClosed: {
        // transform: "scale(0)"
        transform: "translateX(-100px)"
      },
      sidebarText: {
        color:"#fff",
        fontSize: "14px",
        width:"100%",
        fontFamily:Fonts.primary,
        textTransform: "none",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      nested: {
        borderLeft:`4px solid ${Colors.light}`,
        // borderLeftColor:Colors.light,
        paddingLeft: theme.spacing.unit * 4,
      },
      nestedIcon: {
        position: "absolute",
        right: 0,
        color: "#fff"
      },
      sideBarLoader:{
       marginTop:'30vh',
       marginLeft:drawerWidth/2 - 20, 
       transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      },
      sideBarErrorText:{
        fontFamily:Fonts.primary,
        margin:'auto',
        // marginTop:'30vh',
        width:drawerWidth - 20,
        textAlign:'center',
      },
      companyName: {
        color: Colors.light,
        fontSize:21,
         marginLeft: 20
      },
      addButton:{
        margin:'10px 4px 0 7px',
        padding:'0.2em',
        borderColor:Colors.blueSecondary,
        borderRadius:3,
        paddingTop:5,
        fontFamily:Fonts.primary,
        color:Colors.blueSecondary,
        width:drawerWidth - 30,
      },
      companyLogo:{
      position:'absolute',
      top:9,
      left:0,
      },
      companyButton: {
        textAlign:'center',
        border: "none",
        outline:0,
        marginLeft:10,
    

      },
      menu: {
        width: drawerWidth-15,
        borderRadius:1,
      },
      picButton:{
        margin:'10px 10px 0 10px',
        padding:'0.4em',
        borderColor:Colors.light,
        borderRadius:3,
        // paddingTop:5,
        fontSize:"12px",
        fontFamily:Fonts.primary,
        color:Colors.light,
      },
      pic:{
        marginTop:theme.spacing * 7
      }
})