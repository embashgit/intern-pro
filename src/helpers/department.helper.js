import { 
    fetchOwnDEPARTMENT, 
    fetchAllDEPARTMENTRequest,
    fetchOwnDEPARTMENTRequest,
    fetchAllDEPARTMENTError,
    fetchOwnDEPARTMENTError,
    fetchaLLDEPARTMENT,
    fetchAddDEPARTMENTeRequest,
    fetchAddDEPARTMENT,
    fetchAddDEPARTMENTError,
    fetchTempDepartment,
    fetchUpdateDEPARTMENTeRequest,
    fetchUpdateDEPARTMENT,
    fetchUpdateDEPARTMENTError,
    fetchDelete,
    fetchDeleteError,
    fetchDeleteRequest,
    fetchRefreshDEPARTMENTRequest
} from "../actions/department.action";
import { getOwnDepartment, getALlDepartment, addDepartment, updateDepartment, getDepartmentDelete, getDepartmentDropdown } from "../API/department";
import { timeout } from "./authentication.helper";
    import { dispatchActions } from "./institute.helper";
    import { ERROR_MESSAGES } from "../Constants";
import { API } from '../Constants/costants';
const { status } = API;


export const FetchAllDepartment = (credentials) =>{
    return (dispatch, getState)=>{
   
           return getALlDepartment(credentials).then(data=>{
               console.log(data) 
              return dispatch(fetchaLLDEPARTMENT(data))
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchAllDEPARTMENTError(error))
           })
    }
}


export const fetchTemplateDepartment = (credentials) =>{
    return (dispatch, getState)=>{
        console.log(credentials);
           return getDepartmentDropdown(credentials).then(data=>{
              return dispatch(fetchTempDepartment(data))
           }).catch(error =>{
               console.log(error)
           })
    }
}


export const FetchOwnDepartment = () =>{
    return (dispatch, getState)=>{
       dispatch(fetchOwnDEPARTMENTRequest());
       setTimeout(()=>{
           return getOwnDepartment().then(data=>{
               console.log(data)
             dispatch(fetchOwnDEPARTMENT(data))
             return dispatch(FetchAllDepartment())
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchOwnDEPARTMENTError(error))
           })
       },2000);
    }
}



export const addNewDepartment=(credentials)=>{
    return(dispatch,getState)=>{
      dispatch(fetchAddDEPARTMENTeRequest())
      setTimeout(()=>{
        return timeout(10000, addDepartment(credentials)).then(data=>{
          dispatch(fetchAddDEPARTMENT(data))
          console.log(data)
      return  dispatch(FetchAllDepartment())
        }).catch(error=>{
            console.log(error);
        dispatch(fetchAddDEPARTMENTError(error))
        if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.DEPARTMENT_NOT_MODIFIED),fetchRefreshDEPARTMENTRequest()))            
        if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.DUPLICATE_DEPARTMENT),fetchRefreshDEPARTMENTRequest()))
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshDEPARTMENTRequest()))
        })
      },1000)
    }
}

export const UpdateDepartment =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateDEPARTMENTeRequest())
        console.log(credentials)
        setTimeout(()=>{
        return updateDepartment(credentials).then(data=>{
            dispatch(fetchUpdateDEPARTMENT(data))
            console.log(data)
        }).catch(error=>{
            console.log(error)
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.DEPARTMENT_NOT_MODIFIED),fetchRefreshDEPARTMENTRequest()));            
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.DUPLICATE_DEPARTMENT),fetchRefreshDEPARTMENTRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshDEPARTMENTRequest()))
            return  dispatch(dispatchActions(fetchAddDEPARTMENTError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshDEPARTMENTRequest()))
        })
        },1000)
    }
}


export const fetchDeleteDepartment=(id)=>{
    return (dispatch)=>{
       dispatch(fetchDeleteRequest())
       return getDepartmentDelete(id).then(data=>{
         dispatch(fetchDelete(data))
         return dispatch(FetchAllDepartment())
       }).catch(error=>{
         console.log(error)
         if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.DEPARTMENT_CANNOT_DELETE),fetchRefreshDEPARTMENTRequest()))
         if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshDEPARTMENTRequest()))
        })
    }
  }

