import { 
    fetchOwnSemester, 
    fetchAllSemesterRequest,
    fetchOwnSemesterRequest,
    fetchAllSemesterError,
    fetchOwnSemesterError,
    fetchaLLSemester,
    fetchTempSemester,
    fetchAddSemestereRequest,
    fetchAddSemester,
    fetchAddSemesterError,
    fetchUpdateSemesterRequest,
    fetchUpdateSemester,
    fetchUpdateSemesterError,
    fetchDelete,
    fetchDeleteRequest,
    fetchDeleteError,
    fetchRefreshSemesterRequest

} from "../actions/semester.action";
import { getOwnSemester,
    getAllSemester, 
    GetupdateSemester,
     AddSemester,
      getSemesterDelete 
    } from "../API/semester";
    import { API } from '../Constants/costants';
    import { timeout } from "./authentication.helper";
    import { dispatchActions } from "./institute.helper";
    import { ERROR_MESSAGES } from "../Constants";
    
    const { status } = API;

export const FetchAllSemesters = (credentials) =>{
    return (dispatch, getState)=>{
        // dispatch(fetchAllSemesterRequest())
           return getAllSemester(credentials).then(data=>{
               console.log(data)
              return dispatch(fetchaLLSemester(data))
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchAllSemesterError(error))
           })
     
    }
}

export const FetchTemplateSemester = (credentials) =>{
    return (dispatch, getState)=>{
        return getAllSemester(credentials).then(data=>{
        
           return dispatch(fetchTempSemester(data))
        }).catch(error =>{
           
            return dispatch(fetchAllSemesterError(error))
        })
     
    }
}

export const fetchSemester = () =>{
    return (dispatch, getState)=>{
       dispatch(fetchOwnSemesterRequest());
       setTimeout(()=>{
           return getOwnSemester().then(data=>{
               console.log(data)
             dispatch(fetchOwnSemester(data))
             return dispatch(FetchAllSemesters())
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchOwnSemesterError(error))
           })
       },2000);
    }
}


export const UpdateSemester =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateSemesterRequest())
        console.log(credentials)
        setTimeout(()=>{
        return GetupdateSemester(credentials).then(data=>{
            dispatch(fetchUpdateSemester(data))
            dispatch( fetchAllSemesterRequest());
            return dispatch(FetchAllSemesters())
        }).catch(error=>{
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchUpdateSemesterError(ERROR_MESSAGES.SEMESTER_NOT_MODIFIED),fetchRefreshSemesterRequest()))            
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateSemesterError(ERROR_MESSAGES.DUPLICATE_SEMESTER),fetchRefreshSemesterRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchUpdateSemesterError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSemesterRequest()))
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchUpdateSemesterError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshSemesterRequest()))
            
        })
        },1000)
    }
}
export const addNewSemester=(credentials)=>{
    return(dispatch,getState)=>{
      dispatch(fetchAddSemestereRequest())
      setTimeout(()=>{
        return timeout(10000, AddSemester(credentials)).then(data=>{
          dispatch(fetchAddSemester(data))
          dispatch( fetchAllSemesterRequest());
          return dispatch(FetchAllSemesters())
        }).catch(error=>{
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddSemesterError(ERROR_MESSAGES.DUPLICATE_SEMESTER),fetchRefreshSemesterRequest()))
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchAddSemesterError(ERROR_MESSAGES.SESSION_NOT_MODIFIED),fetchRefreshSemesterRequest()))            
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddSemesterError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSemesterRequest()))
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchAddSemesterError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),fetchRefreshSemesterRequest()))
            
            return  dispatch(dispatchActions(fetchAddSemesterError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSemesterRequest()))
        })
      },1000)
    }
}


export const FetchDeleteSemester=(id)=>{
    return (dispatch)=>{
       dispatch(fetchDeleteRequest())
       return getSemesterDelete(id).then(data=>{
         dispatch(fetchDelete(data))
         dispatch( fetchAllSemesterRequest())
         return dispatch(FetchAllSemesters())
       }).catch(error=>{
        if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.SEMESTER_CANNOT_DELETE),fetchRefreshSemesterRequest()))
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),fetchRefreshSemesterRequest()))
        
       })
    }
  }
