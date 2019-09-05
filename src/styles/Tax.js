import { Colors, Fonts } from "./themes";

export const styles = theme=>({
    headerCards:{
        width:'100%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-start',
        flexDirection:'row',
        color:Colors.blueSecondary,
    },
    itemcontainer:{
        position: 'relative',
        width: '25%;',
        },
    cards:{
        width: '25%',
        height: 150,
        display:'flex',
        // padding: theme.spacing.unit,
        fontFamily:Fonts.primary,
        color:Colors.base,
        alignItems:'center',
        justifyContent:'center',
        textTransform: 'uppercase',
        borderBottom:`3px solid ${Colors.base}`,
          textAlign: 'center',
          cursor: 'pointer',
          letterSpacing: '2px'
    },
    title:{
        color:Colors.base,
        letterSpacing:1,
        padding:20,

    }
})