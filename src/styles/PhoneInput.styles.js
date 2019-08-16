
import { blue } from '@material-ui/core/colors';
export const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 35,
    },
    cssFocused: {},
    cssLabel: {
      // // fontSize:23,
      // '&$cssFocused': {
      //   color: blue[500],
      // },
     
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline':{
        borderColor: blue[500],
        border:'none',
        outline:'none',
      },
    },
    
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    selectHeight:{
      height:20,
    },
    resize:{
      [`& fieldset`]: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderWidth:0,
        outline:0,
        paddingHorizontal:10,
    },
    outline:'none',
      fontSize:13.5,
      padding:'0.8em',
    
      borderBottom:'none',
    },
    phoneInputprops:{
      textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            fontSize:14,
            margin:'auto',
            display:'none'
    },
    phoneNumberField: {
        marginLeft: 0,
        [`& fieldset`]: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderWidth:0,
            outline:0,
        },
        paddingHorizontal:10,
        width: '100%',
        position: 'absolute',
        top: -13,
        left:93,
        width: '74%',
      maxHeight:50,
        marginRight: 0,
        zIndex:100,    
    },
  
})

