import { 
    fetchOwnSession, 
    fetchAllSessionRequest,
    fetchOwnSessionRequest,
    fetchAllSessionError,
    fetchOwnSessionError,
    fetchaLLSession,
    fetchTempSession,
    fetchAddSessioneRequest,
    fetchAddSession,
    fetchAddSessionError,
    fetchUpdateSessionRequest,
    fetchUpdateSession,
    fetchUpdateSessionError,
    fetchDelete,
    fetchDeleteRequest,
    fetchRefreshSessionRequest,
    fetchDeleteError

} from "../actions/session.action";
import { dispatchActions } from "./institute.helper";
import { getOwnSession,
    getAllSession, 
    GetupdateSession,
     AddSession,
      getSessionDelete 
    } from "../API/session";
import { timeout } from "./authentication.helper";
import { ERROR_MESSAGES } from "../Constants";
import { API } from '../Constants/costants';
const { status } = API;
export const FetchAllSessions = (credentials) =>{
    return (dispatch, getState)=>{
        // dispatch(fetchAllSessionRequest())
           return getAllSession(credentials).then(data=>{
               
              return dispatch(fetchaLLSession(data))
           }).catch(error =>{
               
               return dispatch(fetchAllSessionError(error))
           })
     
    }
}

export const FetchTemplateSession = (credentials) =>{
    return (dispatch, getState)=>{
        return getAllSession(credentials).then(data=>{
        
           return dispatch(fetchTempSession(data))
        }).catch(error =>{
           
            return dispatch(fetchAllSessionError(error))
        })
     
    }
}

export const fetchSession = () =>{
    return (dispatch, getState)=>{
       dispatch(fetchOwnSessionRequest());
       setTimeout(()=>{
           return getOwnSession().then(data=>{
                
             dispatch(fetchOwnSession(data))
             return dispatch(FetchAllSessions())
           }).catch(error =>{
                              return dispatch(fetchOwnSessionError(error))
           })
       },2000);
    }
}


export const UpdateSession =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateSessionRequest())
        setTimeout(()=>{
        return GetupdateSession(credentials).then(data=>{
            dispatch(fetchUpdateSession(data))
            dispatch( fetchAllSessionRequest())
            return dispatch(FetchAllSessions())
        }).catch(error=>{
            
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchUpdateSessionError(ERROR_MESSAGES.SESSION_NOT_MODIFIED),fetchRefreshSessionRequest()))            
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateSessionError(ERROR_MESSAGES.DUPLICATE_SESSION),fetchRefreshSessionRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchUpdateSessionError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSessionRequest()))
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchUpdateSessionError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshSessionRequest()))
            
            return  dispatch(dispatchActions(fetchUpdateSessionError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSessionRequest()))
        })
        },1000)
    }
}
export const addNewSession=(credentials)=>{
    return(dispatch,getState)=>{
      dispatch(fetchAddSessioneRequest())
      setTimeout(()=>{
        return timeout(10000, AddSession(credentials)).then(data=>{
          dispatch(fetchAddSession(data))
          dispatch( fetchAllSessionRequest())
          return dispatch(FetchAllSessions())
        }).catch(error=>{
            
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchAddSessionError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshSessionRequest()))
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddSessionError(ERROR_MESSAGES. DUPLICATE_SESSION),fetchRefreshSessionRequest()))
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchAddSessionError(ERROR_MESSAGES.SESSION_NOT_MODIFIED),fetchRefreshSessionRequest()))            
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddSessionError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSessionRequest()))
            return  dispatch(dispatchActions(fetchAddSessionError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSessionRequest()))
     
        })
      },1000)
    }
}


export const FetchDeleteSession=(id)=>{
    return (dispatch)=>{
       dispatch(fetchDeleteRequest())
       return getSessionDelete(id).then(data=>{
         dispatch(fetchDelete(data))
         dispatch( fetchAllSessionRequest());
         return dispatch(FetchAllSessions())
       }).catch(error=>{
        if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.SESSION_CANNOT_DELETE),fetchRefreshSessionRequest()))
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSessionRequest()))
        if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshSessionRequest()))
       })
    }
  }
