import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { 
  fetchRequestOwnInstitute, 
  fetchOwnInstitute, 
  fetchInstituteError,
   fetchAddinstituteRequest,
    fetchAddinstitute, 
   fetchAddinstituteError, 
   fetchAllInstituteRequest,
   fetchAllinstituteError,
   fetchAllinstitute,
   fetchTempinstitute,
   refreshInstituteRequest,
   fetchUpdateInstituteRequest,
   fetchUpdateInstituteError,
  fetchDelete,
fetchDeleteError,
fetchDeleteRequest} from "../actions/institution.actions";
import { getOwnInstitute, addInstitution, getAllInstitutions, updateInstitute, getDeleteInstitute, institutionTemplate } from "../API/institution";
import { ERROR_MESSAGES } from "../Constants";
import { getCountries } from "../services/Api";
import { ACTIONS } from "../Constants/ACTIONS";


const { status } = API;
const { NETWORK_FAILURE } = ERROR_MESSAGE;


export const dispatchActions = (defaultAction, refreshAction)=>{
  return (dispatch)=>{
      dispatch(defaultAction);
      setTimeout(() => {  return dispatch(refreshAction) }, 7000)
  }
 }

 export const getAllCountries=()=>{
   return(dispatch)=>{
     return getCountries().then(data=>{
       return dispatch({type:ACTIONS.GET_COUNTRIES, payload:data})
     })
   }
 }

export const fetchAllInstitute = (credentials) =>{
  return (dispatch, getState)=>{
         return getAllInstitutions(credentials).then(data=>{
            
            return dispatch(fetchAllinstitute(data))
         }).catch(error =>{
             console.log(error)
             return dispatch(fetchAllinstituteError(error))
         })
  }
}
export const fetchTemplateInstitute = (country) =>{
  if(country){
    return (dispatch)=>{
           return institutionTemplate(country).then(data=>{
              return dispatch(fetchTempinstitute(data))
           }).catch(error =>{
               console.log(error)
           })
    }
  }
}



export const fetchUserInstitute = () => {
    return (dispatch, getState) => {
      dispatch(fetchRequestOwnInstitute())
      setTimeout(()=>{
          return timeout(10000,getOwnInstitute()).then(data => {
             dispatch(fetchOwnInstitute(data))
             return  dispatch(fetchAllInstitute())
          }).catch(error => {
            console.log(error)
            if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(fetchInstituteError(ERROR_MESSAGE.TIMEOUT))
            if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch(dispatchActions(fetchInstituteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshInstituteRequest()))
             return dispatch(fetchInstituteError(NETWORK_FAILURE))
          
          })
     
      },2000)
  
    }
  }

  export const addNewInstitution=(credentials)=>{
      return(dispatch,getState)=>{
        dispatch(fetchAddinstituteRequest())
        console.log(credentials)
        setTimeout(()=>{
          return timeout(10000, addInstitution(credentials)).then(data=>{
            dispatch(fetchAddinstitute(data))
            console.log(data)
            return dispatch(fetchAllInstitute())
          }).catch(error=>{
          console.log(error);
          if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateInstituteError(ERROR_MESSAGES.DUPLICATE_INSTITUTE),refreshInstituteRequest()))
          if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchAddinstituteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshInstituteRequest()));
          return dispatch(dispatchActions(fetchAddinstituteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshInstituteRequest()))
        })
        },1000)
      }
  }


  export const UpdateInstitute =(credentials)=>{
    return(dispatch)=>{
        dispatch(fetchUpdateInstituteRequest());
        setTimeout(()=>{
        return updateInstitute(credentials).then(data=>{
            dispatch(fetchAddinstitute(data))
            return  dispatch(fetchAllInstitute())
        }).catch(error=>{
          console.log(error)
          if (error.status === parseInt(status.CONFLICT))  return  dispatch(dispatchActions(fetchUpdateInstituteError(ERROR_MESSAGES.DUPLICATE_INSTITUTE),refreshInstituteRequest()))
          if (error.status ===parseInt(status.INTERNAL_SERVER_ERROR))  return  dispatch(dispatchActions(fetchUpdateInstituteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshInstituteRequest()))
          // return  dispatch(dispatchActions(fetchUpdateInstituteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR),refreshInstituteRequest()))
        })
        },1000)
    }
}

export const fetchDeleteInstitute=(id)=>{
  return (dispatch)=>{
     dispatch(fetchDeleteRequest())
     return getDeleteInstitute(id).then(data=>{
       dispatch(fetchDelete(data))
       dispatch(fetchAllInstituteRequest())
       return  dispatch(fetchAllInstitute())
     }).catch(error=>{
       console.log(error)
      if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch(fetchDeleteError(ERROR_MESSAGES.REQUEST_PROCESSING_ERROR));
      if (error.status === parseInt(status.NOT_ACCEPTABLE))  return dispatch(fetchDeleteError(ERROR_MESSAGES.CANNOT_DELETE));
    
     })
  }
}