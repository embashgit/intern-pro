import React from 'react'
import { Typography } from '../mui';
import { Colors } from '../styles/themes';



const MessageCard = ({Message ,type}) => {
  /**
   * When the props is not passed from the parent the
   *  component uses default props.
  */
  MessageCard.defaultProps = {
    Message: 'Error\n Action failed',
    type:'error'
  }
  return (
  <div key={Message} className='messageCard' style={ type==='success'?{backgroundColor:'rgba(0, 151, 19, 0.6)'}:{backgroundColor:Colors.danger}}>
      <p  className='close'>&#x2715;</p>
      <Typography color="inherit" style={{textAlign:"left"}} variant='caption'>{Message}</Typography>
    </div>
  )
}

export default MessageCard;
/* type should be set to either

 type ='success or error',

 message is the content to eb dispayed
*/