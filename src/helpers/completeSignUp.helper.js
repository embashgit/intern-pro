import { timeout } from "./authentication.helper";
import { fetchCompleteSignUp,
     fetchCompleteSignUpRequest,
     fetchCompleteSignUpError,
     fetchRefreshRequest,
     } from "../actions/completeSignUp.action";
import { signUpCompletion } from "../API/authentication";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { dispatchAndRefresh } from './initSignUp.helper';
import { history } from "../App";
const { status } = API

const {
    SERVER_ERROR,
    NETWORK_FAILURE,
    SIGN_UP_ERROR,
    TIMEOUT
} = ERROR_MESSAGE;
export const completeUserSignUp =(credentials)=>{
    return (dispatch)=>{
        dispatch(fetchCompleteSignUpRequest())
        setTimeout(()=>{
            if(credentials){
            
                return timeout(10000, signUpCompletion(credentials))
                .then((data)=>{
                    console.log(data)
                     dispatch(fetchCompleteSignUp(data))
                    return history.push('/auth');

                }).catch((err)=>{
                    console.log(err)
                    if(err === TIMEOUT) return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(TIMEOUT),fetchRefreshRequest()))
                    if(err.status ===status.NOT_FOUND) return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(SIGN_UP_ERROR.REQUEST_FAILED)))
                    if(err.status === status.NOT_ACCEPTABLE) return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(SIGN_UP_ERROR.INCOMPLETE),fetchRefreshRequest())) 
                    if(err.status === status.INTERNAL_SERVER_ERROR)  return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(SERVER_ERROR),fetchRefreshRequest()))
                     return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(NETWORK_FAILURE),fetchRefreshRequest()))
                })
            }
        },2000)
    }
}