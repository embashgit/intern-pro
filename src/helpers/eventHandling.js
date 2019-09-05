import { REGEX } from '../Constants/costants';

export const handleInputChange = (event, currentInputState) => {
  // handle custom inputs with type, name and value
  if (event.type === 'custom') {
    const {
      name, value, subprop,
    } = event;
    const newInputState = { ...currentInputState };
    if (subprop) {
      newInputState[name][subprop] = value; // state.name.subprop = value
    } else {
      newInputState[name] = value;
    }
    return newInputState;
  }

  // handle regular form inputs
  const { target } = event;
  if (!target.name) {
    return currentInputState;
  }
  if (target.type !== 'radio' && target.type !== 'checkbox') {
    event.preventDefault();
  }
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const { name } = target;
  const newInputState = { ...currentInputState };
  newInputState[name] = value;
  return newInputState;
};

const {
 EMAIL, BUISNESSNAME, PASSWORD, OTP, WEBSITE 
} = REGEX;
export const handlePasswordValidate = (event, currentPasswordState) => {
  event.preventDefault();
  const {
    name, value,
  } = event.target;
  const newInputState = { ...currentPasswordState };
  newInputState[name] = value;


  if (!PASSWORD.test(newInputState.password)) {return{
    newInputState,
    passwordError:true,
  }};
  return {
    newInputState
  };
};

export const getBase64 = (file, cb) => {

  // eslint-disable-next-line no-undef
  const reader = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const image = cb(reader.result);

      return image;
    };
  }
  reader.onerror = (error) => {
    // eslint-disable-next-line no-console
    console.log('Error: ', error);
  };
};


export const handleInputhelper = (event, currentInputState) => {
  const {
    name, value,
  } = event.target;
  const newInputState = { ...currentInputState }
  newInputState[name] = value;



  switch (event.target.name) {
    case 'email':
      event.preventDefault();
      if (!EMAIL.test(newInputState.email)) {
        return {
          emailError: true,
          newInputState
        }
      } else {
        return {
          emailError: false,
          newInputState
        }
      }
    case 'name':
      event.preventDefault();
      if (!BUISNESSNAME.test(newInputState.name)) {
        return {
          nameError: true,
          newInputState
        }
      }else{
        return {
          nameError: false,
          newInputState
        }
      }
    case 'password':
      if(!PASSWORD.test(newInputState.password)){
        return {
          passwordError:true,
          newInputState
        }
      }else{
        return {
          passwordError:false,
          newInputState
        } 
      }
    case 'size':
      if(newInputState.size ===''){
        return {
          businessSizeError:true,
          newInputState
        }
      }else{
        return {
          businessSizeError:false,
          newInputState
        } 
      }
    case 'website':
      if(!WEBSITE.test(newInputState.website)){
        return {
          websiteError:true,
          newInputState
        }
      }
        return {
          websiteError:false,
          newInputState
        } 
      
    case 'address':
      if(newInputState.address ===''){
        return {
          addressError:true,
          newInputState
        }
      }else{
        return {
          addressError:false,
          newInputState
        } 
      }
    case 'type':
      if(newInputState.type ===''){
        return {
          businessTypeError:true,
          newInputState
        }
      }else{
        return {
          businessTypeError:false,
          newInputState
        } 
      }
    case 'otp':
      if(!OTP.test(newInputState.otp)){
        return {
          otpError:true,
          newInputState
        }
      }else{
        return {
          otpError:false,
          newInputState
        } 
      }
    default:
      return newInputState;
  }
};
