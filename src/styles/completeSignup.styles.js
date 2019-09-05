import { blue } from '@material-ui/core/colors';
import { Fonts, Colors } from './themes';
export const styles = theme => ({
    formControl: {
    //   margin: theme.spacing.unit / 2,
      marginLeft: 0,
      minWidth: '100%',
    },
    smallText:{
      textAlign: 'center',
      fontFamily: Fonts.primary,
      fontSize: '13px',
      color: Colors.grey,
      paddingLeft: '4px',
    },
    dense: {
      marginTop: -20,
    },
    root: {
      flexGrow: 1,
    },
    button: {
      // margin: theme.spacing.unit,
      height: 45,
      textTransform: 'none',
      width: '100%',
      backgroundColor: blue[800],
      '&:hover': {
        backgroundColor: blue[900],
  
      },
    },
    label:{
      fontSize: "14px",
      transform: "translate(14px, 12px)",
      marginTop: "0px"
  },
  size: {
    '&:focus': {
      backgroundColor: 'none',
    },
    fontSize: "14px",
    padding: "0.8em",
    paddingHorizontal:5,   
  },
  helperTexts:{
    color:Colors.danger,
    marginTop:1.5,
  },
  FormHelperText:{
    color:Colors.danger,
    marginTop:'-0.3em',
    marginLeft:15,
  },
  
  select:{
    '&:focus': {
      backgroundColor: 'none',
    },
    fontSize: "14px",
    padding: "0.4em",
    paddingHorizontal:0, 
  },
  icon: {
    width:20,
    height:40,
    fontSize:'16px',
},
    selectEmpty: {
      marginTop: theme.spacing.unit / 3,
      width: '100%',
      textAlign: 'left',
    },
   
    textField: {
      margin: theme.spacing.unit / 2,
        marginTop:-10,
      width: '100%',
      // height:50,
      textAlign: 'left',
     
    },
    theInput:{
      fontSize:14,
      lineHeight:1
    },
    resize:{
        fontSize:'15px',
        paddingBottom:20,
      paddingTop:'-10px',
    },
    phoneInput: {
      width: '100%',
    }
  })