import { 
    fetchAllCoursesRequest,
    
    fetchAllCoursesError,
    fetchOwnCoursesError,
    fetchaLLCourses,
    fetchAddCourseseRequest,
    
    fetchTempCourses,
    fetchAddCoursesError,
    fetchUpdateCourseRequest,
    fetchUpdateCourse,
    fetchUpdateCourseError,
    fetchDelete,
    fetchDeleteError,
    fetchDeleteRequest,
    fetchRefreshCoursesRequest,
    fetchUploadError,
    fetchUploadRequest,
    fetchUpdateStatus,
} from "../actions/courses.action";
import {  getUpdateCourse, getALlCourses, addCourses, getCourseDelete, UploadCourseRecord } from "../API/Courses";
import { timeout } from "./authentication.helper";
import { dispatchActions } from "./institute.helper";
import { ERROR_MESSAGES as _ } from "../Constants";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from "../Constants/error.constants";
const { status } = API;


export const FetchAllCourses = (credentials) =>{
    return (dispatch, getState)=>{ 
           return getALlCourses(credentials).then(data=>{
               
              return dispatch(fetchaLLCourses(data))
           }).catch(error =>{
               
               return dispatch(fetchAllCoursesError(error))
           })
    }
}

export const fetchTemplateCourses = () =>{
    return (dispatch, getState)=>{  
           return getALlCourses().then(data=>{
              return dispatch(fetchTempCourses(data))
           })
    }
}


export const FechOwnCourses = (credentials) =>{
    return (dispatch)=>{
      dispatch(fetchAllCoursesRequest()) 
       setTimeout(()=>{
           return getALlCourses(credentials).then(data=>{
             return dispatch(fetchaLLCourses(data)) 
           }).catch(error =>{
                
               return dispatch(fetchOwnCoursesError())
           })
       },2000);
    }
}



export const addNewCourses=(credentials)=>{
    return(dispatch,getState)=>{
      dispatch(fetchAddCourseseRequest())   
      setTimeout(()=>{
        return timeout(10000, addCourses(credentials)).then(data=>{
            dispatch( fetchAllCoursesRequest());
          return dispatch(FetchAllCourses())  
        }).catch(error=>{
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddCoursesError(_.DUPLICATE_COURSES),fetchRefreshCoursesRequest()))
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchAddCoursesError(_.GENERIC_ERROR_OCCURRED),fetchRefreshCoursesRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddCoursesError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCoursesRequest()))
        })
      },1000)
    }
}


export const UploadCourses = (records)=>{
    return(dispatch,getState)=>{
        dispatch(fetchUploadRequest())
      return timeout(10000, UploadCourseRecord(records)).then(({meta,data})=>{
        console.log(data)
        console.log(meta)
        var resp=(meta.status === 200)?1:0;
        const {uploadStatus} =getState().courses;
        dispatch(fetchUpdateStatus(resp*uploadStatus));
        if(meta.status !== 200) dispatch(fetchUploadError(meta.message,data))
    //  return dispatch(dispatchActions(fetchUploadError(meta.message,data),fetchRefreshCoursesRequest()))
      }).catch(error=>{
         
        if(error.status === ERROR_MESSAGE.TIMEOUT)  return dispatch(dispatchActions(fetchUploadError(ERROR_MESSAGE.TIMEOUT),fetchRefreshCoursesRequest()));
        return dispatch(dispatchActions(fetchUploadError(_.NETWORK_ERROR_OCCURRED),fetchRefreshCoursesRequest()));
      })
    }
  }

export const UpdateCourse =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateCourseRequest())
         
        setTimeout(()=>{
        return getUpdateCourse(credentials).then(data=>{
            dispatch(fetchUpdateCourse(data))
            dispatch( fetchAllCoursesRequest());
           return dispatch(FetchAllCourses())
        }).catch(error=>{
             
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchUpdateCourseError(_.COURSES_NOT_MODIFIED),fetchRefreshCoursesRequest()))            
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateCourseError(_.DUPLICATE_COURSES),fetchRefreshCoursesRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchUpdateCourseError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCoursesRequest()))
            if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchUpdateCourseError(_.GENERIC_ERROR_OCCURRED),fetchRefreshCoursesRequest()))
        })
        },1000)
    }
}

export const fetchDeleteCourse=(id)=>{
    return (dispatch)=>{
       dispatch(fetchDeleteRequest())
       return getCourseDelete(id).then(data=>{
         dispatch(fetchDelete(data))
         dispatch( fetchAllCoursesRequest());
         return dispatch(FetchAllCourses())
       }).catch(error=>{
         if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(_.COURSES_CANNOT_DELETE),fetchRefreshCoursesRequest()))
         if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchDeleteError(_.REQUEST_PROCESSING_ERROR),fetchRefreshCoursesRequest()))
       })
    }
  }


  