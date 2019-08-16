import { 
    fetchOwnCourseReg, 
    fetchAllCourseRegRequest,
    fetchOwnCourseRegRequest,
    fetchAllCourseRegError,
    fetchOwnCourseRegError,
    fetchaLLCourseReg,
    fetchTempCourseReg,
    fetchAddCourseRegeRequest,
    fetchAddCourseReg,
    fetchAddCourseRegError,
    fetchUpdateCourseRegRequest,
    fetchUpdateCourseReg,
    fetchUpdateCourseRegError,
    fetchDelete,
    fetchDeleteRequest,
    fetchDeleteError,
    fetchRefreshCourseRegRequest,
    fetchUploadError,
    fetchUploadRequest,
fetchUpdateStatus,
} from "../actions/courseReg.action";
import { getOwnCourseReg,
    getAllCourseReg, 
    GetupdateCourseReg,
     AddCourseReg,
      getCourseRegDelete, 
      UploadCourseRegRecord
    } from "../API/courseReg";
import { timeout } from "./authentication.helper";
import { dispatchActions } from "./institute.helper";
import { ERROR_MESSAGES as _ } from "../Constants";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from "../Constants/error.constants";
const { status } = API;

export const FetchAllCourseRegs = (credentials) =>{
    return (dispatch, getState)=>{
        dispatch(fetchAllCourseRegRequest())
           return getAllCourseReg(credentials).then(data=>{
               
              return dispatch(fetchaLLCourseReg(data))
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchAllCourseRegError(error))
           })
     
    }
}

export const FetchTemplateCourseReg = (credentials) =>{
    return (dispatch, getState)=>{
        return getAllCourseReg(credentials).then(data=>{
        
           return dispatch(fetchTempCourseReg(data))
        }).catch(error =>{
           
            return dispatch(fetchAllCourseRegError(error))
        })
     
    }
}

export const fetchCourseReg = () =>{
    return (dispatch, getState)=>{
       dispatch(fetchOwnCourseRegRequest());
       setTimeout(()=>{
           return getOwnCourseReg().then(data=>{
               console.log(data)
             dispatch(fetchOwnCourseReg(data))
             return dispatch(FetchAllCourseRegs())
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchOwnCourseRegError(error))
           })
       },2000);
    }
}


export const UpdateCourseReg =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateCourseRegRequest())
        console.log(credentials)
        setTimeout(()=>{
          
        return GetupdateCourseReg(credentials).then(data=>{
            dispatch(fetchUpdateCourseReg(data))
            return dispatch(FetchAllCourseRegs())
        }).catch(error=>{
            dispatch(fetchUpdateCourseRegError(error))
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchUpdateCourseRegError(_.COURSESREG_NOT_MODIFIED),fetchRefreshCourseRegRequest()))            
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateCourseRegError(_.DUPLICATE_COURSESREG),fetchRefreshCourseRegRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchUpdateCourseRegError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCourseRegRequest()))
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchUpdateCourseRegError(_.GENERIC_ERROR_OCCURRED),fetchRefreshCourseRegRequest()))
        })
        },1000)
    }
}


 


export const UploadCourseRegistrations = (records)=>{
 
  return(dispatch,getState)=>{
      dispatch(fetchUploadRequest())
    return timeout(10000, UploadCourseRegRecord(records)).then(({meta,data})=>{
      console.log(data)
      console.log(meta)
      var resp=(meta.status === 200)?1:0;
        const {uploadStatus} =getState().courseReg;
        dispatch(fetchUpdateStatus(resp*uploadStatus));
        if(meta.status !== 200) dispatch(fetchUploadError(meta.message,data))
    }).catch(error=>{
      console.log(error)
      if(error.status === ERROR_MESSAGE.TIMEOUT)  return dispatch(dispatchActions(fetchUploadError(ERROR_MESSAGE.TIMEOUT),fetchRefreshCourseRegRequest()));
      return dispatch(dispatchActions(fetchUploadError(_.NETWORK_ERROR_OCCURRED),fetchRefreshCourseRegRequest()));
    })
  }
}


export const addNewCourseReg=(credentials)=>{
    return(dispatch,getState)=>{
      dispatch(fetchAddCourseRegeRequest())
      setTimeout(()=>{
        return timeout(10000, AddCourseReg(credentials)).then(data=>{
          dispatch(fetchAddCourseReg(data))
          return dispatch(FetchAllCourseRegs())
        }).catch(error=>{
            console.log(error);
            if (error === ERROR_MESSAGE.TIMEOUT)  return  dispatch(dispatchActions(fetchAddCourseRegError(ERROR_MESSAGE.TIMEOUT),fetchRefreshCourseRegRequest()))
        if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddCourseRegError(_.DUPLICATE_COURSESREG),fetchRefreshCourseRegRequest()))
        if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchAddCourseRegError(_.GENERIC_ERROR_OCCURRED),fetchRefreshCourseRegRequest()))
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddCourseRegError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCourseRegRequest()))
        return  dispatch(dispatchActions(fetchAddCourseRegError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCourseRegRequest()))
        })
      },1000)
    }
}

 

export const FetchDeleteCourseReg=(id)=>{
    return (dispatch)=>{
       dispatch(fetchDeleteRequest())
       return getCourseRegDelete(id).then(data=>{
         dispatch(fetchDelete(data))
         return dispatch(FetchAllCourseRegs())
       }).catch(error=>{ 
         if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(_.COURSESREG_CANNOT_DELETE),fetchRefreshCourseRegRequest()))
         if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchDeleteError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCourseRegRequest()))
       })
    }
  }
