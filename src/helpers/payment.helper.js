import { 
    fetchAddPayment,
    fetchAddPaymentError,
    fetchPaymentHistory,
    fetchPaymentHistoryError,
    fetchPaymentReference,
    fetchRefreshRequest,
    requestAddPayment,
    requestFee,
    requestPaymentHistory,
    requestPaymentReference,
    getFee,
    paymentReferenceError,
    getFeeError,
    addDetails
} from "../actions/payment.action";
import {getPaymentFee,
    getPaymentHistory,
    getPaymentReference,
 } from '../API/payment'
import { API } from '../Constants/costants';
    import { timeout } from "./authentication.helper";
    import { dispatchActions } from "./institute.helper";
    import { ERROR_MESSAGES } from "../Constants";
import { ERROR_MESSAGE } from "../Constants/error.constants";
import { history } from "../App";
    const { status } = API;
    const { NETWORK_FAILURE } = ERROR_MESSAGE;

export const FetchPaymentFees =()=>{
    return (dispatch,getState)=>{
        dispatch(requestFee());
      return  timeout(10000,getPaymentFee()).then(data=>{
          dispatch(getFee(data))
      }).catch(error=>{
        console.log(error)
        if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchActions(getFeeError(ERROR_MESSAGE.TIMEOUT),fetchRefreshRequest()));
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(getFeeError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshRequest()))
        return dispatch(getFeeError(NETWORK_FAILURE))
    })
    }
}

export const addPaymentDetails =(credentials)=>{
    return (dispatch)=>{
        dispatch(requestPaymentReference());
        return dispatch(addDetails(credentials))
    }

}

export const getAllPaymentHistory=()=>{
    return(dispatch)=>{
        dispatch(requestPaymentHistory())
        return timeout(10000, getPaymentHistory()).then( ({meta,data})=>{
                if(meta.status===200){
                 return dispatch( fetchPaymentHistory(data));
                }else{
                    return dispatch(dispatchActions(fetchPaymentHistoryError(meta.message),fetchRefreshRequest()))
                }
            })
            .catch(error=>{
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchActions(fetchPaymentHistoryError(ERROR_MESSAGE.TIMEOUT),fetchRefreshRequest())); 
                // if (error.status === parseInt(status.INTERNAL_SERVER_ERROR)) return dispatch(dispatchActions(fetchPaymentHistoryError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshRequest()))
                 return dispatch(dispatchActions(fetchPaymentHistoryError(NETWORK_FAILURE),fetchRefreshRequest()))
            }
            )
    }
}
export const fetchReference =(unit)=>{
    return (dispatch,getState)=>{
        dispatch(requestPaymentReference());
      return  timeout(10000,getPaymentReference(unit)).then(data=>{
          dispatch(fetchPaymentReference(data))
        // const {refference} = getState().payment.referenceData;
          
      }).catch(error=>{
        console.log(error)
        if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchActions(paymentReferenceError(ERROR_MESSAGE.TIMEOUT),fetchRefreshRequest()));
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(paymentReferenceError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshRequest()))
        return dispatch(dispatchActions(paymentReferenceError(NETWORK_FAILURE),fetchRefreshRequest()))
    })
    }
}

// export AddPayment=(credentials)=>{
//     return()
// }