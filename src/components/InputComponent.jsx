import React  from 'react'
import Button from '@material-ui/core/Button';
const InputComponent=({label,labelStyle,type,name,placeholder,handleChange,style,Icon, onIconClick})=>{
    
  return (
    <div className="formControl" >
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <div id=""></div>
      <input style={style} className="textField" onChange={handleChange} placeholder={placeholder} name={name} type={type}  />
      {Icon ? <Button onClick={()=>onIconClick()} id="passwordIcon">{Icon}</Button>:''}
    </div>
  )
}

export default InputComponent
