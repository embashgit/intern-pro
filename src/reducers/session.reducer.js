import {
    ACTIONS
    } from '../Constants/ACTIONS'
    import { SUCCESS_MESSAGES } from '../Constants/costants';

    const { DELETE,ADD,UPDATE,UPLOADED,SYNC}=  SUCCESS_MESSAGES;
  
    const InitState = {
      data: {
          record:{
              description:"",
              institutionid:"",
          }
      },
      isLoading:false,
      isLoadingData:false,
      dataError:false,
      fetchSuccess:false,
      dataErrorMessage:'',
      formLoading:false,
      fetchLoading:false,
      formDataError:false,
       formSuccess:false,
      sessions:{},
      deleteSuccessMessage:'',
      updateSuccessMessage:'',
      addedSuccessMessage:'',
      template:{},
      fetchSessionError:false,
      formErrorMessage:'',
    }


    
    const {
        FETCH_OWN_SESSION,
        FETCH_OWN_SESSION_ERROR,
        REFRESH_SESSION_REQUEST,
        REQUEST_OWN_SESSION,
        ADD_NEW_SESSION_ERROR,
        ADD_NEW_SESSION,
        FETCH_ALL_SESSION_ERROR,
        FETCH_ALL_SESSION,
        FETCH_TEMP_SESSION,
        REQUEST_ALL_SESSION,
        REQUEST_ADD_NEW_SESSION,
        UPDATE_SESSION,
        UPDATE_SESSION_ERROR,
        UPDATE_SESSION_REQUEST,
        DELETE_SESSION,
        DELETE_SESSION_REQUEST,
        DELETE_SESSION_ERROR
       } = ACTIONS;
       
 
     const session = (state = InitState, action) => {
 
         switch (action.type) {
 
             case REQUEST_OWN_SESSION:
             return{
                 ...state,
                 isLoadingData:true,
                 dataError:false,
                //  data:{},
                formSuccess:false,
                 fetchSuccess:false,
             }
             case  FETCH_OWN_SESSION:
           
             return{
                 ...state,
                 isLoadingData:false,
                 dataError:false,
                 dataErrorMessage:'',
                 data:{...state.data,...action.payload},
                 fetchSuccess:true,
 
             }
             case  FETCH_OWN_SESSION_ERROR:
             return{
                 ...state,
                 isLoadingData:false,
                 dataError:true,
                 dataErrorMessage:action.payload,
                 fetchSuccess:false,
             }
 
             case REQUEST_ADD_NEW_SESSION:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
             }
             case ADD_NEW_SESSION:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 deleteSuccessMessage:'',
                 updateSuccessMessage:'',
                 addedSuccessMessage:ADD,
 
             }
             case ADD_NEW_SESSION_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case  FETCH_ALL_SESSION:
             return{
                 ...state,
                 fetchLoading:false,
                 isLoadingData:false,
                 fetchSessionError:false,
                 sessions:{...state.sessions,...action.payload},
                 fetchSuccess:true,
             }
 
             case  FETCH_TEMP_SESSION:
             return{
                 ...state,
                 template:{...state.template,...action.payload},
                 
             }
             case FETCH_ALL_SESSION_ERROR:
             return{
                 ...state,
                 fetchLoading:false,
                 fetchSessionError:true,
                 dataErrorMessage:action.payload,
             }
             case REQUEST_ALL_SESSION:
             return{
                 ...state,
                 fetchLoading:true,
                 fetchSessionError:false,
                 dataErrorMessage:'',
                 fetchSuccess:false,
             }
             case  UPDATE_SESSION_REQUEST:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
 
             }
             case  UPDATE_SESSION:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 deleteSuccessMessage:'',
                 addedSuccessMessage:'',
                 updateSuccessMessage:UPDATE,
             }
             
             case  UPDATE_SESSION_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case DELETE_SESSION_REQUEST:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
             }
             case DELETE_SESSION:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 updateSuccessMessage:'',
                 addedSuccessMessage:'',
                 deleteSuccessMessage:DELETE,
                }
             case DELETE_SESSION_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case REFRESH_SESSION_REQUEST:
             return{
                 ...state,
                 dataError:false,
                 formLoading:false,
                 formErrorMessage:'',
                 formDataError:false,
                 fetchSessionError:false,
                 formSuccess:false,
                 dataErrorMessage:'',
                 deleteSuccessMessage:'',
                 updateSuccessMessage:'',
                 addedSuccessMessage:'',
             }
             default:
             
             return state;
         }
 
     }
 
     export default session
 