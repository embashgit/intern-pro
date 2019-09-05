import { Fonts, Colors } from "../themes";
const {grey} = Colors;
const { primary} = Fonts;
export const styles = theme =>({
    smallText:{
        textAlign: 'center',
        fontFamily: primary,
        fontSize: '12px',
        color:  'rgba(0, 0, 0, 0.54)',
        fontWeight:200,
        paddingLeft: '4px',
        marginBottom:'0px',
        marginTop:5,
        letterSpacing:.5,
    },
    bottomContainer:{
        padding:'5px'

    },
    
    bottomItems:{
        display:'inline-block',
        margin:'5px',
        letterSpacing:0.5,
    },
})