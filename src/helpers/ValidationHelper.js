

export const emailValidation = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(re);
  };


  var PhoneNumber = require( 'awesome-phonenumber' );

export const validatePhone = (number, code) => {
    const phoneValue = number;
    let regionCode = code.substring(1);
    const countryCode =PhoneNumber.getRegionCodeForCountryCode( regionCode )
    const pn = new PhoneNumber(phoneValue, countryCode);
    const pa = pn.toJSON( );
    JSON.stringify( pa, null, 4 );
    if (pa.valid === true &&
        pa.canBeInternationallyDialled===true &&
        pa.possible === true &&
        pa.possibility === "is-possible") {
      return({
        phoneError:false
      });
    } else {
      return ({
        phoneError:true,
      })
    }
}

/**
 * name : `validate form inputs`
 * @param {object}
 * validates by mapping through object 
 * and test if object value  equals key
 * @returns {Boolean} return True|False
 *  */  
export const validateInputs = (inPutobj, key)=>{
  let valArray = Object.keys(inPutobj).map(val=>{
    if(typeof val === 'object'){
      return validateInputs(val, key)
    }
    return inPutobj[val]
  })
  const checkList = (valArray)=>{
    return valArray==key
  }
  return valArray.some(checkList)
   

}




export const passwordChecker =(password)=>{
  let checkerText ='';
  if(password.length ===0){
   checkerText ='Password cannot be empty';
}
  if(password.length  <7){
   checkerText ='Password is too short';
}
if(password.length >8){
   checkerText ='Strong Password';
}
return checkerText;
}