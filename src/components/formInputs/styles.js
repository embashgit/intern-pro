
const PhoneInputStyles ={
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    
    PrimarySelect:{
        // backgroundColor:"rgba(216, 217, 249, 0.19)",
         lineHeight:2.6,
        height:32,
        // width:74,
        borderRadius: 4,
        paddingLeft:5,
        paddingRight:5,
        paddingTop:4,
        // zIndex:1000,
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
    textField:{
        // margin: 0,
      position: 'absolute',
      top: -16,
      left:93,
      width: '100%',
    maxHeight:50,
        
      },

      noOutline:{
        lineHeight:2.6,
        height:32,
        borderBottomWidth:1,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:'#656565',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
      },
      
    smallSelect:{
        backgroundColor:"rgba(216, 217, 249, 0.19)",
        height:21,
        width:74,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        paddingLeft:5,
        paddingRight:5,
        paddingTop:15,
        zIndex:1000,
    },
    optionListContainer:{
        maxHeight: 320, 
        overflow: 'auto', 
        minWidth: 200,
        maxWidth:'30%',
        bottom:-100,
        left: 60,
        fontSize:14,
        borderRadius:5,
        zIndex:1000000,
    },
  }
    export default PhoneInputStyles