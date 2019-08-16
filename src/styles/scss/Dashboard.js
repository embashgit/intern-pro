import {green, grey, blue} from '../../mui'
import { CallReceived } from '@material-ui/icons';
import { Fonts, Colors } from '../themes';
const drawerWidth = 240

export const styles = theme => ({
    root: {
        display: 'flex',
        marginBottom:theme.spacing.unit
      },
      title:{
        color:Colors.grey,
        fontFamily:Fonts.primary,
        letterSpacing:1,
        fontSize:25,
        margin:theme.spacing.unit
      }
    });