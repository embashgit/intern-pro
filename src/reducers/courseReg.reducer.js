
import {
    ACTIONS
    } from '../Constants/ACTIONS'
    import { SUCCESS_MESSAGES } from '../Constants/costants';
    const { DELETE,ADD,UPDATE,UPLOADED,SYNC}=  SUCCESS_MESSAGES;
  
    const InitState = {
      data: {},
      isLoading:false,
      isLoadingData:false,
      dataError:false,
      fetchSuccess:false,
      retrievedRecord:[],
      uploadStatus:1,
      fallbacks:[],
      dataErrorMessage:'',
      formLoading:false,
      fetchLoading:false,
      formDataError:false,
       formSuccess:false,
      courseRegs:{},
      template:{},
      fetchCourseRegError:false,
      formErrorMessage:'',
      deleteSuccessMessage:'',
    updateSuccessMessage:'',
    addedSuccessMessage:'',
    uploadLoading:false,
    uploadError:false,
    uploadSuccess:false,

    uploadSuccessMessage:'',
    }


    const {
        FETCH_OWN_COURSEREG,
        FETCH_OWN_COURSEREG_ERROR,
        REFRESH_COURSEREG_REQUEST,
        REQUEST_OWN_COURSEREG,
        ADD_NEW_COURSEREG_ERROR,
        ADD_NEW_COURSEREG,
        FETCH_ALL_COURSEREG_ERROR,
        FETCH_ALL_COURSEREG,
        FETCH_TEMP_COURSEREG,
        REQUEST_ALL_COURSEREG,
        REQUEST_ADD_NEW_COURSEREG,
        UPDATE_COURSEREG,
        UPDATE_COURSEREG_ERROR,
        UPDATE_COURSEREG_REQUEST,
        DELETE_COURSEREG,
        DELETE_COURSEREG_REQUEST,
        DELETE_COURSEREG_ERROR,
        UPLOAD_COURSEREG_REQUEST,
        UPLOAD_COURSEREG_ERROR,
        UPLOAD_COURSEREG,
        UPDATE_STATUS,
        RESET_COURSEREG_FALLBACKS,
       } = ACTIONS;
 
     const courseReg = (state = InitState, action) => {
 
         switch (action.type) {
 
             case REQUEST_OWN_COURSEREG:
             return{
                 ...state,
                 isLoadingData:true,
                 dataError:false,
                 data:{},
                 fetchSuccess:false,
             }
             case  FETCH_OWN_COURSEREG:
             const {record} = action.payload;
             return{
                 ...state,
                 isLoadingData:false,
                 dataError:false,
                 dataErrorMessage:'',
                 data:{...record},
                 fetchSuccess:true,
 
             }
             case  FETCH_OWN_COURSEREG_ERROR:
             return{
                 ...state,
                 isLoadingData:false,
                 dataError:true,
                 dataErrorMessage:action.payload,
                 fetchSuccess:false,
             }
 
             case REQUEST_ADD_NEW_COURSEREG:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
             }
             case ADD_NEW_COURSEREG:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:ADD,
 
             }
             case ADD_NEW_COURSEREG_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case  FETCH_ALL_COURSEREG:
             return{
                 ...state,
                 fetchLoading:false,
                 isLoadingData:false,
                 fetchCourseRegError:false,
                 fetchSuccess:true,
                 courseRegs:{...state.courseRegs,...action.payload},
             }

             case UPDATE_STATUS :{
                 return{
                     ...state,
                     uploadStatus:action.payload,
                 }
             }
 
             case  FETCH_TEMP_COURSEREG:
             return{
                 ...state,
                 template:{...state.template,...action.payload},
                 
             }
             case FETCH_ALL_COURSEREG_ERROR:
             return{
                 ...state,
                 fetchLoading:false,
                 fetchCourseRegError:true,
                 dataErrorMessage:action.payload,
             }
             case REQUEST_ALL_COURSEREG:
             return{
                 ...state,
                 fetchLoading:true,
                 fetchCourseRegError:false,
                 dataErrorMessage:'',
                 fetchSuccess:false,
             }
             case  UPDATE_COURSEREG_REQUEST:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',

 
             }
             case  UPDATE_COURSEREG:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 deleteSuccessMessage:'',
                 addedSuccessMessage:'',
                 updateSuccessMessage:UPDATE,
             }
             
             case  UPDATE_COURSEREG_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }
             case DELETE_COURSEREG_REQUEST:
             return{
                 ...state,
                 formLoading:true,
                 formDataError:false,
                 formSuccess:false,
                 formErrorMessage:'',
             }
             case DELETE_COURSEREG:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:false,
                 formSuccess:true,
                 updateSuccessMessage:'',
                 addedSuccessMessage:'',
                 deleteSuccessMessage:DELETE,
             }
             case DELETE_COURSEREG_ERROR:
             return{
                 ...state,
                 formLoading:false,
                 formDataError:true,
                 formSuccess:false,
                 formErrorMessage:action.payload,
             }

             case UPLOAD_COURSEREG_REQUEST:
             return{
                ...state,
                uploadLoading:true,
                uploadSuccessMessage:'',
                uploadError:false,
                formDataError:false,
                uploadSuccess:false,
                retrievedRecord:[],
                fallbacks:[],
             }
             case UPLOAD_COURSEREG:
             return{
                ...state,
                uploadLoading:false,
                uploadSuccessMessage:UPLOADED,
                uploadError:false,
                uploadSuccess:true,
                fallbacks:[],
                retrievedRecord:[],
                formErrorMessage:'',
             }
             case UPLOAD_COURSEREG_ERROR:
             return{
                ...state,
                uploadLoading:false,
                uploadSuccessMessage:'',
                formErrorMessage:action.message,
                uploadError:true,
                fallbacks:{...state.fallbacks,...action.data},
                uploadSuccess:false,
               
             }
             case RESET_COURSEREG_FALLBACKS:
             return{
                 ...state,
                 fallbacks:{},
             }
             case REFRESH_COURSEREG_REQUEST:
             return{
                 ...state,
                 dataError:false,
                 formLoading:false,
                 formErrorMessage:'',
                 formDataError:false,
                 fetchCourseRegError:false,
                 formSuccess:false,
                 dataErrorMessage:'',
                 deleteSuccessMessage:'',
                 updateSuccessMessage:'',
                 addedSuccessMessage:'',
                 uploadLoading:false,
                 uploadError:false,
                 uploadSuccess:false,
                 uploadSuccessMessage:'',
                 retrievedRecord:[],
             }
             default:
             
             return state;
         }
 
     }
 
     export default courseReg
 