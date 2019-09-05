import { Colors, Fonts } from "./themes";
import { blue } from "../mui";

export const styles = theme=>({
    headerCards:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'row',
        color:Colors.blueSecondary,
    },
    ownSub:{
    width:'100%',
    height:'30%',
    marginBottom:10,
    padding:5
    },
    headerButton:{
     
        borderRadius:'50%',
        color:Colors.blueSecondary,
        padding:'0.3em',
      
        '&:hover':{
            boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        }
       },
    amount:{
        textAlign: 'center',
        marginTop:'40%',
        letterSpacing:2,
        color:Colors.blueSecondary
    },
    payButton:{
        display:'flex',
        width:'50%',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        margin:'auto',
        
    },
    payBtn:{
    backgroundColor:Colors.blueSecondary,
    font:`400 17px ${Fonts.primary}`,
    color:Colors.light,
    letterSpacing:2,
    marginTop:'30%',
    padding:12,
    width:'100%',
    outline:'none',
    borderRadius:4,
    boxSizing:'box',
    border:'none',

    },
    banner:{
        height:'70vh',
    },
    headerTitle:{
        fontFamily:Fonts.primary,
        textAlign:'right',
        letterSpacing:'1px',
        color:Colors.blueSecondary,
        fontSize:20,

        },
        note:{
            marginTop:20,
            textAlign:'justify',
        },
        resizePrice:{
            fontSize: 20,
            margin: theme.spacing.unit/2,
            paddingHorizontal:5, 
            padding: "0.5em",
            color:Colors.blueSecondary
           },
        resize:{
            fontSize: 14,
            margin: theme.spacing.unit/2,
            paddingHorizontal:5, 
            padding: "0.5em",
           },
           textfield:{
            margin: theme.spacing.unit,
              marginTop:10,
                width:'100%',
           },
           label:{
            fontSize: "14px",
               transform: "translate(14px, 12px)",
               marginTop: "2px"
           },
        formDiv:{
            marginTop:20,
            alignItems:'center',
            textAlign:'center',
        },
        cardHeader:{
            padding:10,
            textAlign:'center',
        }


})