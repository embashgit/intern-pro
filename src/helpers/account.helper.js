import { 
    getUserDataRequest,
     getuserData,
     fetchUserDataError
     } from "../actions/authentication.action";

     import { 
         fetchAddProfile,
         fetchAddProfileError,
         fetchAddProfileRequest,
         fetchUpdateProfile,
         fetchUpdateProfileError,
         fetchUpdateProfileRequest,
         fetchDelete,
         fetchDeleteError,
         fetchDeleteRequest,
         fetchAllProfileError,
         fetchAllProfileRequest,
         fetchaLLProfile,
         fetchPhoneProfile,
         fetchPhoneProfileError,
         fetchPhoneProfileRequest,
         fetchRefreshProfileRequest,
     } from "../actions/profile.action"
import { timeout } from "./authentication.helper";
import { getAuthUserData, getAllProfile, getAddProfile, getUpdateProfile, getDeleteProfile, getProfileByPhone } from "../API/account";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { dispatchActions } from "./institute.helper";
import { ERROR_MESSAGES } from "../Constants";



const {status}= API
export const fetchUserData = (associateID)=>{
    return (dispatch, getState)=>{
      dispatch(getUserDataRequest());
     return timeout(50000, getAuthUserData(associateID)).then(userData=>{
      return dispatch(getuserData(userData))
     }).catch(error=>{
         console.log(error);
         if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.TIMEOUT)));
         if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.UNAUTHORIZED)));
         if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.SERVER_ERROR)));
         if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.EXPIRED_TOKEN)));
         return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.NETWORK_FAILURE)));
     })
     }
  }
  
export const fetchProfiles = ()=>{
    return (dispatch, getState)=>{
        dispatch(fetchAllProfileRequest());
        const {institutinid} = getState().Auth.data.profile;
            return getAllProfile(institutinid).then(data=>{
                console.log("fetched well")
                dispatch(fetchaLLProfile(data))
            }).catch(error=>{
                
                console.log(error)
                if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch( dispatchActions(fetchAllProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
                return dispatch( dispatchActions(fetchAllProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
            })
        }
}

export const fetchAddNewProfile = (credentials)=>{
    return (dispatch, getState)=>{
        dispatch(fetchAddProfileRequest());
        return getAddProfile(credentials).then(data=>{
            console.log(data);
            dispatch(fetchAddProfile())
        }).catch(error=>{
        console.log(error)
        if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch( dispatchActions(fetchAddProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchUpdateProfileError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshProfileRequest()));
        return dispatch( dispatchActions(fetchAddProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        })
    }
}

export const fetchProfileByPhone = (phone)=>{
    return (dispatch, getState)=>{
        dispatch(fetchPhoneProfileRequest());
        return getProfileByPhone(phone).then(data=>{
            console.log(data);
            dispatch(fetchPhoneProfile(data))
        }).catch(error=>{
        console.log(error)
        if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch( dispatchActions(fetchPhoneProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchPhoneProfileError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshProfileRequest()));
        return dispatch(dispatchActions(fetchPhoneProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        })
    }
}
export const fetchEditProfile = (credentials)=>{
    return (dispatch, getState)=>{
        dispatch(fetchUpdateProfileRequest());
        return getUpdateProfile(credentials).then(data=>{
            console.log(data);
            dispatch(fetchUpdateProfile(data))
        }).catch(error=>{
        console.log(error)
        if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchUpdateProfileError(ERROR_MESSAGES.PROFILE_NOT_MODIFIED),fetchRefreshProfileRequest()))
        if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchUpdateProfileError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshProfileRequest()));
        if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch( dispatchActions(fetchUpdateProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        return dispatch( dispatchActions(fetchUpdateProfileError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        })
    }
}

export const fetchDeleteProfile = (id)=>{
    return (dispatch, getState)=>{
        dispatch(fetchDeleteRequest());
        return getDeleteProfile(id).then(data=>{
            console.log(data);
            dispatch(fetchDelete())
        }).catch(error=>{
        console.log(error)
       if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.PROFILE_CANNOT_DELETE),fetchRefreshProfileRequest()));
        if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshProfileRequest()));
        if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch( dispatchActions(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        return dispatch( dispatchActions(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshProfileRequest()));
        })
    }
}