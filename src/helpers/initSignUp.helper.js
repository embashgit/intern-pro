
import {
    fetchOtpError,
    fetchOtpRequest,
    getOtpData,
    fetchSignUpError,
    fetchSignUpReguest,
    getSignUpData,
    fetchRefreshRequest,
} from '../actions/initSignUp.action'
import { InitialSignUp, fetchSignUpOTPValidation } from '../API/authentication';
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants';
import { timeout } from './authentication.helper';
import { history } from '../App';



export const dispatchAndRefresh = (errorAction, refreshAction)=>{
    return (dispatch)=>{
        dispatch(errorAction);
        return  setTimeout(() => {  return dispatch(refreshAction) }, 4000)
    }
   }
   

const { status } = API;
const { NETWORK_FAILURE,SERVER_ERROR, SIGN_UP_ERROR, TIMEOUT, OTP_ERROR } = ERROR_MESSAGE
export const initUserSignUp = (credentials) => {

    return (dispatch, getState) => {
        dispatch(fetchSignUpReguest())
        setTimeout(() => {
         
            // return dispatch(getSignUpData(credentials))
            if (credentials) {
                return timeout(4000, InitialSignUp(credentials))
                    .then((resData) => {
                        
                        return dispatch(getSignUpData(credentials))
                    }).catch(err => {
                       
                        if (err === ERROR_MESSAGE.TIMEOUT)  return dispatch(dispatchAndRefresh(fetchSignUpError(TIMEOUT),fetchRefreshRequest()))
                        if (err.status === status.NOT_ACCEPTABLE) return dispatch(dispatchAndRefresh(fetchSignUpError(SIGN_UP_ERROR.INCOMPLETE),fetchRefreshRequest()))
                        if (err.status === status.INTERNAL_SERVER_ERROR) return dispatch(dispatchAndRefresh(fetchSignUpError(SERVER_ERROR),fetchRefreshRequest()))
                         return dispatch(dispatchAndRefresh(fetchSignUpError(NETWORK_FAILURE),fetchRefreshRequest()));
                    })
            }

        }, 2000)
    }
}



export const signUpOtpValidation = (otp) => {
    return (dispatch, getState) => {
        dispatch(fetchOtpRequest())
        setTimeout(() => {
            if (otp) {
            return timeout(3500, fetchSignUpOTPValidation(otp))
                .then((otpData) => {
                   
                    dispatch(getOtpData(otpData.otp))
                    const {signUpOtpSuccess} = getState().initSignup;
                    if(signUpOtpSuccess ===true){
                        
                        return history.push({pathname:'/auth/signup', state:{pathRoute:signUpOtpSuccess}});
                    }
                })
                .catch((error) => {
                    
                    if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchAndRefresh(fetchOtpError(TIMEOUT),fetchRefreshRequest()))
                    if (error.status === status.NOT_FOUND) return dispatch(dispatchAndRefresh(fetchOtpError(OTP_ERROR.INCORRECT),fetchRefreshRequest()));
                    if (error.status === status.NOT_ACCEPTABLE) return dispatch(dispatchAndRefresh(fetchOtpError(OTP_ERROR.TIMEOUT),fetchRefreshRequest()))
                    if (error.status === status.INTERNAL_SERVER_ERROR) return dispatch(dispatchAndRefresh(fetchOtpError(SERVER_ERROR),fetchRefreshRequest()))
                        return dispatch(dispatchAndRefresh(fetchOtpError(NETWORK_FAILURE),fetchRefreshRequest()));
                })
            }
        }, 2000)
    }
}
