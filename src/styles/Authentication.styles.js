import { blue } from '@material-ui/core/colors';
import { Colors } from './themes';
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 25,
      zIndex: 100,
    },
    dense: {
      marginTop: 10,
    },
    fab: {
      height: 46,
      width: 46,
      margin: theme.spacing.unit,
      paddingTop: 3,
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[800]
      }
    },
    fabProgress: {
      color: blue[900],
      position: 'absolute',
      top: 4,
      right: 4,
      zIndex: 1,
    },
    button: {
      marginTop: 20,
      margin: theme.spacing.unit,
      height: 40,
      textTransform: 'none',
      width: 350,
      backgroundColor: Colors.base,
      '&:hover': {
        backgroundColor:Colors.base,
      },
      color: '#fff'
      // color:'rgb(4, 32, 63)',
    },
    mobileButton:{
      width: '100%',
      height:35,
      marginTop:10,
    },
    phoneInputprops: {
      marginBottom: 8,
      fontSize: 16,
    },
    FormHelperText:{
      color:Colors.danger,
      marginTop:'0.1em',
      marginRight:33,
      textAlign:'right',
      padding:0,
    },
    label:{
   fontSize: "14px",
      transform: "translate(14px, 12px)",
      marginTop: "2px"
  },
    resize: {
      // paddingTop:'10px',
      // paddingBottom: 0,
      fontSize: 13,
      // marginBottom: -4,
      margin: theme.spacing.unit/2,
      // marginTop:theme.spacing.unit*2,
      paddingHorizontal:5, 
      padding: "0.70em",
    },
   
    margin: {
      margin: theme.spacing.unit,
    },
    pinInput:{
        margin: theme.spacing.unit,
          marginTop:10,
          width: 350,
        textAlign: 'left',
           marginTop:theme.spacing.unit*1.6,
           marginBottom: theme.spacing.unit / 2,
    },
    textField: {
      'label + &': {
        // marginBottom: 10,
      },
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit / 2,
      width: 350,
      height: 40,
      flexBasis: 200,
    },
    mobileTextField:{
      width: '100%',
      height: 30,
    },
  
  })

  export default styles