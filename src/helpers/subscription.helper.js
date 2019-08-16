import { 
fetchConfirmSub,
fetchProcessSub,
fetchConfirmSubError,
fetchProcessSubError,
fetchRefreshSub,
requestConfirmSub,
requestProcessSub,
requestSubscription,
getSub,
getSubError,
} from "../actions/subscription.action";
import {
    getConfirmSubscription,
    getSubscription,
    getProccessSubscription
 } from '../API/subscription'
import { API } from '../Constants/costants';
    import { timeout } from "./authentication.helper";
    import { dispatchActions } from "./institute.helper";
    import { ERROR_MESSAGES } from "../Constants";
import { ERROR_MESSAGE } from "../Constants/error.constants";
import { getConfirmSub } from "../API/institution";
    const { status } = API;
    const { NETWORK_FAILURE } = ERROR_MESSAGE;

export const fetchAllSubscriptions =()=>{
    return (dispatch)=>{
        dispatch(requestSubscription());
      return  timeout(20000,getSubscription()).then(({meta, data})=>{
          
        if(meta.status ===200){
          return  dispatch(getSub(data));
        }else{
           return dispatch(dispatchActions(getSubError(meta.message),fetchRefreshSub()));
        }
      })
      .catch(error=>{
        console.log(error)
        if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchActions(getSubError(ERROR_MESSAGE.TIMEOUT),fetchRefreshSub()));
        return dispatch(getSubError(NETWORK_FAILURE))
    })
    }
}

export const ConfirmSub =(credentials)=>{
    return (dispatch)=>{
        dispatch(requestConfirmSub());
        return  getConfirmSub(credentials).then(({meta,data})=>{
           
            console.log(data)
            // console.log(data)
            // return dispatch(fetchConfirmSub(data))
            if(meta.status === 200){
                dispatch(fetchConfirmSub(data))
                return getProcessSubScriptions(credentials)
            }else{
             return dispatch(dispatchActions(fetchConfirmSubError(meta.message),fetchRefreshSub()));
            }
        }).catch(error=>{
            console.log(error);
            if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchActions(fetchConfirmSubError(ERROR_MESSAGE.TIMEOUT),fetchRefreshSub()));
            return dispatch(dispatchActions(fetchConfirmSubError(NETWORK_FAILURE),fetchRefreshSub()))
        })
    }

}

export const getProcessSubScriptions=(credentials)=>{
    return(dispatch)=>{
        dispatch(requestProcessSub())
        return timeout(10000, getProccessSubscription(credentials)).then( ({meta,data}) =>{
            if(meta.status ===200){
                dispatch( fetchProcessSub(data));
            }
            return dispatch(dispatchActions(fetchProcessSubError(meta.message),fetchRefreshSub()));
            }).catch(error=>{
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchActions(fetchProcessSubError(ERROR_MESSAGE.TIMEOUT),fetchRefreshSub())); 
                return dispatch(dispatchActions(fetchProcessSubError(NETWORK_FAILURE),fetchRefreshSub()))

            }
            )
    }
}