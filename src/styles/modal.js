import { Colors } from "./themes";
import { blue } from "../mui";

export const styles = theme => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      padding:15,
    },
    closeModal:{
      position:'absolute',
      right:0,
      top:3,
     },
     subscribtionIcon:{
      fontSize:30,
      color:Colors.blueSecondary
     },
     textfield:{
      margin: theme.spacing.unit,
      // margin: theme.spacing.unit,
      minWidth: 220,
      margin: 10,
      maxWidth: '100%',
     },
     selectField:{
      minWidth: 220,
      margin: 10,
      marginTop:30,
      marginBottom:0,
      maxWidth: '100%',
     },
     selectMenu:{width:160},
     resize:{
      fontSize: 14,
      margin: theme.spacing.unit/2,
      paddingHorizontal:5, 
      padding: "0.5em",
     },
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
     chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    formControl: {
      margin: 10,
      minWidth: 220,
      maxWidth: '100%',
    },
     label:{
      fontSize: "14px",
         transform: "translate(14px, 12px)",
         marginTop: "2px"
     },
     labelStudent:{
      fontSize: "14px",
         transform: "translate(14px, 12px)",
         marginTop: -2,
     },
     menu:{
      borderRadius:1,
      width:150,
  },
     submitSub:{
      marginTop:10,
      color:Colors.light,
      backgroundColor:Colors.blueSecondary,
      '&:hover':{
        backgroundColor:blue[900],
      }
     },
    with:{
        width: theme.spacing.unit * 50,
        padding: theme.spacing.unit * 4,
    },
    mobileWidth:{
        width: theme.spacing.unit * 40,
        padding: theme.spacing.unit * 2,
    }
    

  });