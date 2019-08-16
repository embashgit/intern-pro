import {
    ACTIONS
    } from '../Constants/ACTIONS'
    import { SUCCESS_MESSAGES } from '../Constants/costants';

    const { DELETE,ADD,UPDATE,UPLOADED,SYNC}=  SUCCESS_MESSAGES;
    
    const InitState = {
      data: {
        record:{
            description:'',
            institutionid:'',
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
       deleteSuccessMessage:'',
       updateSuccessMessage:'',
       addedSuccessMessage:'',
      semesters:{},
      template:{},
      fetchSemesterordsdError:false,
      formErrorMessage:'',
    }

    
    const {
        FETCH_OWN_SEMESTER,
        FETCH_OWN_SEMESTER_ERROR,
        REFRESH_SEMESTER_REQUEST,
        REQUEST_OWN_SEMESTER,
        ADD_NEW_SEMESTER_ERROR,
        ADD_NEW_SEMESTER,
        FETCH_ALL_SEMESTER_ERROR,
        FETCH_ALL_SEMESTER,
        FETCH_TEMP_SEMESTER,
        REQUEST_ALL_SEMESTER,
        REQUEST_ADD_NEW_SEMESTER,
        UPDATE_SEMESTER,
        UPDATE_SEMESTER_ERROR,
        UPDATE_SEMESTER_REQUEST,
        DELETE_SEMESTER,
        DELETE_SEMESTER_REQUEST,
        DELETE_SEMESTER_ERROR
       } = ACTIONS;
       
 
     const semester = (state = InitState, action) => {
 
         switch (action.type) {
 
             case REQUEST_OWN_SEMESTER:
             return{
                 ...state,
                 isLoadingData:true,
                 dataError:false,
                 fetchSuccess:false,
             }
             
             case  FETCH_OWN_SEMESTER:
             
             return{
                 ...state,
                 isLoadingData:false,
                 dataError:false,
                 dataErrorMessage:'',
                 data:{...state.data,...action.payload},
                 fetchSuccess:true,
 
             }
             case  FETCH_OWN_SEMESTER_ERROR:
             return{
                 ...state,
                 isLoadingData:false,
                 dataError:true,
                 dataErrorMessage:action.payload,
                 fetchSuccess:false,
             }
 
             case REQUEST_ADD_NEW_SEMESTER:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
             }
             case ADD_NEW_SEMESTER:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 deleteSuccessMessage:'',
                 updateSuccessMessage:'',
                 addedSuccessMessage:ADD,
 
             }
             case ADD_NEW_SEMESTER_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case  FETCH_ALL_SEMESTER:
             return{
                 ...state,
                 fetchLoading:false,
                 isLoadingData:false,
                 fetchSemesterordsdError:false,
                 semesters:{...state.semesters,...action.payload},
                 fetchSuccess:true,
             }
 
             case  FETCH_TEMP_SEMESTER:
             return{
                 ...state,
                 template:{...state.template,...action.payload},
                 
             }
             case FETCH_ALL_SEMESTER_ERROR:
             return{
                 ...state,
                 fetchLoading:false,
                 fetchSemesterordsdError:true,
                 dataErrorMessage:action.payload,
             }
             case REQUEST_ALL_SEMESTER:
             return{
                 ...state,
                 fetchLoading:true,
                 fetchSemesterordsdError:false,
                 dataErrorMessage:'',
                 fetchSuccess:false,
             }
             case  UPDATE_SEMESTER_REQUEST:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
 
             }
             case  UPDATE_SEMESTER:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 deleteSuccessMessage:'',
                 addedSuccessMessage:'',
                 updateSuccessMessage:UPDATE,
             }
             
             case  UPDATE_SEMESTER_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case DELETE_SEMESTER_REQUEST:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
             }
             case DELETE_SEMESTER:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 updateSuccessMessage:'',
                 addedSuccessMessage:'',
                 deleteSuccessMessage:DELETE,
             }
             case DELETE_SEMESTER_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case REFRESH_SEMESTER_REQUEST:
             return{
                 ...state,
                 dataError:false,
                 formLoading:false,
                 formErrorMessage:'',
                 formDataError:false,
                 fetchSemesterordsdError:false,
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
 
     export default semester
 
