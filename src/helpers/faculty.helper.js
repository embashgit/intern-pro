import { 
    fetchOwnfaculty, 
    fetchAllFacultyRequest,
    fetchOwnFacultyRequest,
    fetchAllfacultyError,
    fetchOwnfacultyError,
    fetchaLLfaculty,
    fetchTempfaculty,
    fetchAddFacultyeRequest,
    fetchAddFaculty,
    fetchAddFacultyError,
    fetchUpdateFacultyRequest,
    fetchUpdateFaculty,
    fetchUpdateFacultyError,
    fetchDelete,
    fetchDeleteRequest,
    fetchDeleteError,
    fetchRefreshFacultyRequest

} from "../actions/faculty.actions";
import { getOwnFaculty, getALlFaculty, addFaculty, GetupdateFaculty, getFacultyDelete, getFacultyDropDown } from "../API/faculty";
import { timeout } from "./authentication.helper";
import { dispatchActions } from "./institute.helper";
import { ERROR_MESSAGES as _} from "../Constants";
import { API } from '../Constants/costants';
const { status } = API;
export const FetchAllFaculty = (credentials) =>{
    return (dispatch, getState)=>{
        // dispatch(fetchAllFacultyRequest())
           return getALlFaculty(credentials).then(data=>{
               console.log(data)
              return dispatch(fetchaLLfaculty(data))
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchAllfacultyError(error))
           })
     
    }
}

export const FetchTemplateFaculty = (institution) =>{
    return (dispatch, getState)=>{
           return getFacultyDropDown(institution).then(data=>{
              return dispatch(fetchTempfaculty(data))
           }).catch(error =>{ 
               return dispatch(fetchAllfacultyError(error))
           })
     
    }
}

export const FetchOwnFaculty = () =>{
    return (dispatch, getState)=>{
       dispatch(fetchOwnFacultyRequest());
       setTimeout(()=>{
           return getOwnFaculty().then(data=>{
               console.log(data)
             dispatch(fetchOwnfaculty(data))
             return dispatch(FetchAllFaculty())
           }).catch(error =>{
               console.log(error)
               return dispatch(fetchOwnfacultyError(error))
           })
       },2000);
    }
}


export const UpdateFaculty =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateFacultyRequest())
        console.log(credentials)
        setTimeout(()=>{
        return GetupdateFaculty(credentials).then(data=>{
            dispatch(fetchUpdateFaculty(data))
            return dispatch(FetchAllFaculty())
        }).catch(error=>{
            console.log(error)
            if (error.status === parseInt(status.NOT_MODIFIED))  return  dispatch(dispatchActions(fetchUpdateFacultyError(_.FACULTY_NOT_MODIFIED),fetchRefreshFacultyRequest()))            
            if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateFacultyError(_.DUPLICATE_FACULTY),fetchRefreshFacultyRequest()))
            if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchUpdateFacultyError(_.REQUEST_PROCESSING_ERROR),fetchRefreshFacultyRequest()))
        })
        },1000)
    }
}
export const addNewFaculty=(credentials)=>{
    return(dispatch,getState)=>{
      dispatch(fetchAddFacultyeRequest());
      setTimeout(()=>{
        return timeout(10000, addFaculty(credentials)).then(data=>{
          dispatch(fetchAddFaculty(data))
        }).catch(error=>{
            console.log(error);
        if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchAddFacultyError(_.DUPLICATE_INSTITUTE),fetchRefreshFacultyRequest()))
        if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddFacultyError(_.REQUEST_PROCESSING_ERROR),fetchRefreshFacultyRequest()))
        })
      },1000)
    }
}


export const fetchDeleteFaculty=(id)=>{
    return (dispatch)=>{
       dispatch(fetchDeleteRequest())
       return getFacultyDelete(id).then(data=>{
         dispatch(fetchDelete(data))
         return dispatch(FetchAllFaculty())
       }).catch(error=>{
         console.log(error)
         if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(_.FACULTY_CANNOT_DELETE),fetchRefreshFacultyRequest()))
         if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchDeleteError(_.REQUEST_PROCESSING_ERROR),fetchRefreshFacultyRequest()))

       })
    }
  }
