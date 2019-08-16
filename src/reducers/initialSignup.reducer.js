import {
    ACTIONS
    } from '../Constants/ACTIONS'

    const InitState = {
        InitSignUpData:{
            'business-name':'', 
            'email':'',
            'phone':'', 
            'country-code':'', 
            'country-name':'', 
            'dial-code':'',
        },
        otpData:{
            otp:'',
        },
        errorMessage:'',
        iniSignUpisLoading:false,
        initSignUpError:false,
        initSignUpSuccess:false,
        OtpIsValid:false,
        OTPisLoading:false,
        OtpError:false,
      }
      const emptyData={
        'business-name':'', 
        'email':'',
        'phone':'', 
        'country-code':'', 
        'country-name':'', 
        'dial-code':'',
         }
   export  const emptyOtp={ otp:''}
      
const {
    INITIATE_SIGN_UP_REQUEST,
    INITIATE_SIGN_UP,
    SIGN_UP_OTP_VALIDATION_REQUEST,
    SIGN_UP_OTP_VALIDATION,
    SIGN_UP_OTP_VALIDATION_ERROR,
    INITIAL_SIGN_UP_ERROR,
    REFRESH_SIGNUP_REQUEST,
  } = ACTIONS;

  const initSignup =(state =InitState, action)=>{
      switch (action.type) {
          case INITIATE_SIGN_UP_REQUEST:
              return{
                  ...state,
                  errorMessage:'',
                  iniSignUpisLoading:true,
                  initSignUpSuccess:false,
                  initSignUpError:false,
                  InitSignUpData:emptyData,
              }
              case INITIATE_SIGN_UP:
                  return{
                    ...state,
                    OtpError:false,
                    errorMessage:'',
                    initSignUpError:false,
                    InitSignUpData:{...state.InitSignUpData, ...action.payload},
                    initSignUpSuccess:true,
                    iniSignUpisLoading:false,
                  }

            case INITIAL_SIGN_UP_ERROR:
            return{
                ...state,
                errorMessage:action.payload,
                initSignUpError:true,
                initSignUpSuccess:false,
                iniSignUpisLoading:false,
                InitSignUpData:emptyData
            }
            case SIGN_UP_OTP_VALIDATION_REQUEST:
            return{
                ...state,
                otpData:emptyOtp,
                signUpOtpSuccess:false,
                OTPisLoading:true,
                OtpIsValid:false,
            }   
            case SIGN_UP_OTP_VALIDATION:
                return{
                    ...state,
                    otpData:{...state.otpData,otp:action.payload},
                    OTPisLoading:false,
                    signUpOtpSuccess:true,
                    OtpError:false,
                    OtpIsValid:true,
                }
         
            case SIGN_UP_OTP_VALIDATION_ERROR:
            return{
                ...state,
                otpData:emptyOtp,
                OTPisLoading:false,
                otpErrorMessage:action.payload,
                OtpError:true
            }
            case REFRESH_SIGNUP_REQUEST:
            return{
                ...state,
                initSignUpError:false,
                initSignUpSuccess:false,
                OtpError:false,
                otpErrorMessage:'',
                errorMessage:'',
                otpData:emptyOtp,
                signUpOtpSuccess:false,
            }
         
          default:
              return state;
      }
  }
  export default initSignup