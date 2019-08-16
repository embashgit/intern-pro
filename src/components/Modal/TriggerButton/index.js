import React from 'react'
import { Button } from '../../../mui';


const TriggerButton =({triggerText, buttonRef,variant, showModal,className,Icon,style, outlined}) => {
  return (
    <Button onClick={showModal}  style={style} ref={buttonRef} variant={variant?variant:outlined? 'outlined':'text'} className={className}>{triggerText}{Icon}</Button>
  )
}


export default TriggerButton;