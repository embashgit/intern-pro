
import { Fonts, Colors } from "./themes";

export const styles =theme=> ({
    root: {
      flexGrow: 1,
      padding:0,
      maxWidth: 400,
    },
    emptyRecord:{
      display:'flex',
      width:'100%',
      alignContent:'center',
      alignSelf:'center',
      zIndex:10000,
      padding:20,
      justifyContent:'center',
      marginTop:20,
      marginLeft:'16em',
    },
     pagination:{
        width:'50%',
        margin:'auto',
        alignSelf:'center',
     },
     tableRow:{
      height:45,
     },
   tabsWrapper:{
     
    width:'45%',
    flexDirection:"row",
    display:'flex',
    alignContent:"center",
    alignItems:'flex-start'
   },
   mobileTabsWrapper:{
    width:'100%',
   },
   card:{
    width:'45%',
    boxShadow:'none',
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
   },
   button:{
     '&:hover':{
      backgroundColor:'transparent'
     },
     '&:focus':{
      backgroundColor:'transparent'
     },
    padding:10,
    justifyContent:'space-around',
    fontFamily:Fonts.primary
   },
   tableCard:{
    width:'100%',
    height:'100%'
   },
   isActive:{
  backgroundColor:Colors.light,
   },
   inActive:{
      backgroundColor:'transparent'
   },
   employeeWrapper:{
       padding:0,
       margin:0,
       width: '100%',
       marginTop: theme.spacing.unit+5,
       overflowX: 'auto',
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
    padding: "0.7em",
    paddingHorizontal:5,   
  },
  theInput:{
    fontSize:14,
    lineHeight:1
  },
     table: {
        minWidth: 300,
        
      },
      row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
       
   },
   headItems:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    display:'flex',
    height:40,
    paddingLeft:5,
    paddingRight:0,
    marginTop:0
   },
   textField: {
    margin: theme.spacing.unit / 2,
      marginTop:theme.spacing.unit/2,
    width: '100%',
    // height:50,
    textAlign: 'left',
   
  },
  borderLeft:{
    borderTopLeftRadius:0,
  },
  borderRight:{
    borderTopRightRadius:0,
  },
   regFormLabel:{
    color:Colors.blueSecondary,
    padding:'10px, 0, 0,25px',
    marginTop:20,
    },
   
   tableHeader:{
           backgroundColor:Colors.blueSecondary
   },
   topic:{
    fontSize:18,
    fontWeight:500,
    fontFamily:Fonts.primary,
   },
   textfield:{
    margin: theme.spacing.unit,
    // margin: theme.spacing.unit,
      marginTop:10,
        width:'100%',
   },
   selectField:{
    width:'100%',
    marginTop:5,
   },
   layerContainer:{
    color:Colors.blueSecondary,
    flexDirection:"row",
    justifyContent:"space-between",
    display:'flex',
    alignContent:"center",
    padding:8,
    paddingRight:'20px',
    paddingStart:6,
    paddingTop:15,
    alignItems:'flex-start'
},
headerButton:{
     
  borderRadius:10,
  color:Colors.blueSecondary,
  '&:hover':{
      boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  }
 },
wrapper:{
    minWidth:'100%',
},
layeritems:{
    // width:'14%',
    marginTop:0,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'flex-start',
    color:'inherit'
},
   selectMenu:{width:160},
   resize:{
    fontSize: 14,
    margin: theme.spacing.unit/2,
    paddingHorizontal:5, 
    padding: "0.5em",
   },
   label:{
    fontSize: "14px",
       transform: "translate(14px, 12px)",
       marginTop: "2px"
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
    },
    alignCenter:{
      alignItems:'center',
      justifyContent:'center',
      margin:'auto',
    },
   },
   btn:{
    padding:10,
    justifyContent:'space-around',
    fontFamily:Fonts.primary
   },
   labelStudent:{
    fontSize: "14px",
       transform: "translate(14px, 12px)",
       marginTop: -2,
   },
  });
  