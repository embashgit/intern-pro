import { Colors, Fonts } from "./themes";



export const styles = theme=>({
   
    card:{
        padding:10,
        paddingTop:0,
        borderLeft:`3px solid ${Colors.blueSecondary}`,
        borderRight:`3px solid ${Colors.blueSecondary}`,
    },
    fab: {
        position:'fixed',
        bottom:'10px',
        right:'10px',
        margin: theme.spacing.unit,
      },
      passportButton:{
        display:'flex',
        padding:5,
        color:Colors.blueSecondary,
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom: theme.spacing.unit,
        marginTop: -theme.spacing.unit * 2,
      },
      passportpreview:{
        width:100,
        height:100,
        borderRadius:'50%',
        margin:'auto',
      },
      fabButton:{
        margin: theme.spacing.unit,
        position:'fixed',
        bottom:'80px',
        transition:'0.5s',
        right:'10px',
       backgroundColor:'#fff',
      },
    regFormLabel:{
    color:Colors.blueSecondary,
    padding:'10px, 0, 0,15px',
    marginTop:20,
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
    layercontAlt:{
        color:Colors.blueSecondary,
        flexDirection:"row",
        justifyContent:"flex-start",
        display:'flex',
        alignContent:"center",
        padding:8,
        paddingRight:'20px',
        paddingStart:6,
        paddingTop:15,
        alignItems:'flex-start'
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

    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      padding:15,
    },
    off:{
        display:'flex',
        height:'70vh',
        minWidth:'100%',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:"center"
    },
    with:{
        width: theme.spacing.unit * 50,
        padding: theme.spacing.unit * 4,
    },
    mobileWidth:{
        width: theme.spacing.unit * 40,
        padding: theme.spacing.unit * 2,
    },
    btn:{
        '&:hover':{
            backgroundColor:"none",
        }   
    },
    headerButton:{
     
        borderRadius:10,
        color:Colors.blueSecondary,
        padding:'0.3em',
      
        '&:hover':{
            boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        }
       },
       hd2:{
      
            // width:'50%',
            borderRadius:10,
            color:Colors.blueSecondary,
            padding:'0.4em',
            borderColor:Colors.blueSecondary,
            '&:hover':{
                boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            }
       },
       instituteName:{
           fontFamily:Fonts.primary,
           fontSize:20,

       },
       phone:{
        'label + &': {
            // marginBottom: 10,
          },
          marginTop:30,
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit*2,
        //   marginBottom: theme.spacing.unit / 2,
          width: `calc(100% - 10px)`,
          height: 60,
          flexBasis: 200,
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
       tableRow:{
        height:45,
       },
       closeModal:{
        position:'absolute',
        right:0,
        top:3,
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

})