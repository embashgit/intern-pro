import {
    ACTIONS
    } from '../Constants/ACTIONS'
const InitState = {
    data:{
        message:'',
    },
    isLoading:false,
    errorMessage:'',
    error:false,
    formError:{},
    CompletionSuccess:false,
  }

  const {
      SIGN_UP_COMPLETION,
      SIGN_UP_COMPLETION_REQUEST,
      SIGN_UP_COMPLETION_ERROR,
      REFRESH_SIGN_UP_COMPLETION,
  } = ACTIONS

  
 const signUpCompletion = (state = InitState, action) =>{
      switch (action.type) {
          case SIGN_UP_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case SIGN_UP_COMPLETION:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,message:action.payload}
        }
        case SIGN_UP_COMPLETION_ERROR:
        return{
            isLoading:false,
            CompletionSuccess:false,
            error:true,
            errorMessage:action.payload.message,
            formError:action.payload.formErrors,
        }
        case REFRESH_SIGN_UP_COMPLETION:
        return{
            isLoading:false,
            error:false,
            formError:{},
            CompletionSuccess:false,
            errorMessage:'',
        }
          default:
              return state;
      }
  } 

  export default signUpCompletion;