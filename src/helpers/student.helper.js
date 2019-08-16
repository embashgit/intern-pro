import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants';
import { dispatchActions } from "./institute.helper";
import { 
  fetchRequestOwnStudent, 
  fetchOwnStudent, 
  fetchStudentError,
   fetchAddStudentRequest,
    fetchAddStudent, 
   fetchAddStudentError, 
   fetchAllStudentRequest,
   fetchTempStudent,
   fetchAllStudentError,
   fetchAllStudent,
   fetchUpdateStudentRequest,
   fetchUpdateStudentError,
  fetchDelete,
fetchDeleteError,
refreshStudentReguest,
fetchDeleteRequest,
fetchUpdateStudent,
fetchUpload,
fetchUploadRequest,
fetchUploadError,
fetchUpdateStatus} from "../actions/student.action";
import { getOwnStudent,
  getAllStudent,
   updateStudent, 
   getDeleteStudent,
    getAddStudent,
     UploadStudentRecord 
    } from "../API/student";
import { ERROR_MESSAGES } from "../Constants";



const { status } = API;
const { NETWORK_FAILURE } = ERROR_MESSAGE;


export const fetchAllStudents = (credentials) =>{
  return (dispatch)=>{
    // dispatch( fetchAllStudentRequest())
         return getAllStudent(credentials).then(data=>{
            return dispatch(fetchAllStudent(data))
         }).catch(error =>{
             if(error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch(dispatchActions(fetchAllStudentError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshStudentReguest()));
              if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchAllStudentError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED)))
            })
  }
}

export const fetchTemplateStudents = () =>{
    return (dispatch, getState)=>{
           return getAllStudent().then(data=>{
              return dispatch(fetchTempStudent(data))
           }).catch(error=>{

             console.log(error)
           })
    }
  }
export const fetchOwnStudents = () => {
    return (dispatch, getState) => {
      dispatch(fetchRequestOwnStudent())
      setTimeout(()=>{
          return getOwnStudent().then(data => {
             dispatch(fetchOwnStudent(data))
             return  dispatch(fetchAllStudents())
          }).catch(error => {
            if(error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch(dispatchActions(fetchStudentError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshStudentReguest()));
              if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchStudentError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),refreshStudentReguest()))
          })
     
      },2000)
  
    }
  }

  export const addNewStudent=(credentials)=>{
      return(dispatch)=>{
        dispatch(fetchAddStudentRequest())

        setTimeout(()=>{
          return timeout(30000, getAddStudent(credentials)).then(({data,meta})=>{
           
           if(meta.status ===200){ 
             dispatch(fetchAddStudent())
            return dispatch(fetchAllStudents())
           }else{
            return dispatch(dispatchActions(fetchAddStudentError(meta.message),refreshStudentReguest())) 
           }
           
          }).catch(error=>{
            return dispatch(dispatchActions(fetchAddStudentError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshStudentReguest()));
          })
        },1000)
      }
  }

  export const GetUploadStudents = (records)=>{
    return(dispatch,getState)=>{
      dispatch(fetchUploadRequest())
      return timeout(10000, UploadStudentRecord(records)).then(({meta,data})=>{
        console.log(data)
        console.log(meta)
        var resp=(meta.status === 200)?1:0;
        const {uploadStatus} =getState().student;
        dispatch(fetchUpdateStatus(resp*uploadStatus));
        if(meta.status !== 200) dispatch(fetchUploadError(meta.message,data))
      //   if(meta.status === 200){
      //     dispatch(fetchUpload())
      //   }
      //  return  dispatch(dispatchActions(fetchUploadError(meta.message, data),refreshStudentReguest()))
      }).catch(error=>{
       if(error ===ERROR_MESSAGE.TIMEOUT) return  dispatch(dispatchActions(fetchUploadError(ERROR_MESSAGE.TIMEOUT),refreshStudentReguest()))
        return  dispatch(dispatchActions(fetchUploadError(NETWORK_FAILURE),refreshStudentReguest()));
      })
    }
  }

  export const UpdateStudents =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateStudentRequest())
        setTimeout(()=>{
        return updateStudent(credentials).then(({data,meta})=>{
          if(meta.status === 200){
            dispatch( fetchUpdateStudent())
            return getAllStudent();
            }else{
              console.log(meta)
              dispatch(dispatchActions(fetchUpdateStudentError(meta.message),refreshStudentReguest())) 
            }
        }).catch(error=>{ 
            return dispatch(dispatchActions(fetchUpdateStudentError(NETWORK_FAILURE),refreshStudentReguest()))
          })
        },1000)
    }
}

export const fetchDeleteStudent=(id)=>{
  return (dispatch)=>{
     dispatch(fetchDeleteRequest())
     return getDeleteStudent(id).then(data=>{
       dispatch(fetchDelete(data))
       return  dispatch(fetchAllStudents())
     }).catch((error)=>{
       console.log(error)
       if(error.status === parseInt(status.INTERNAL_SERVER_ERROR)) return dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshStudentReguest()));
       if (error.status === parseInt(status.NOT_ACCEPTABLE))  return  dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.STUDENT_CANNOT_DELETE),refreshStudentReguest()));
       if(error.status === parseInt(status.BAD_REQUEST)) return dispatch(dispatchActions(fetchDeleteError(ERROR_MESSAGES.GENERIC_ERROR_OCCURRED),refreshStudentReguest()))
     })
  }
}
