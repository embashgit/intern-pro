import {
    ACTIONS
    } from '../Constants/ACTIONS'
    import { SUCCESS_MESSAGES } from '../Constants/costants';

    const { DELETE,ADD,UPDATE,UPLOADED,SYNC}=  SUCCESS_MESSAGES;
  
    const InitState = {
      data: {},
      uploadLoading:false,
      uploadError:false,
      uploadSuccess:false,
      fallbacks:[],
      isLoading:false,
      isLoadingData:false,
      dataError:false,
      fetchSuccess:false,
      dataErrorMessage:'',
      uploadStatus:1,
      formLoading:false,
      fetchLoading:false,
      formDataError:false,
      deleteSuccessMessage:'',
      updateSuccessMessage:'',
      addedSuccessMessage:'',
       formSuccess:false,
      students:{},
      template:{},
      fetchStudentError:false,
      formErrorMessage:'',
    }


    const {
       GET_OWN_STUDENT,
       GET_STUDENT_ERROR,
       REFRESH_STUDENT_REQUEST,
       REQUEST_OWN_STUDENT,
       ADD_NEW_STUDENT_ERROR,
       ADD_NEW_STUDENT,
       FETCH_ALL_STUDENT_ERROR,
       FETCH_ALL_STUDENT,
       FETCH_TEMP_STUDENT,
       REQUEST_ALL_STUDENT,
       REQUEST_ADD_NEW_STUDENT,
       UPDATE_STUDENT,
       UPDATE_STUDENT_ERROR,
       UPDATE_STUDENT_REQUEST,
       DELETE_STUDENT,
       DELETE_STUDENT_REQUEST,
       UPLOAD_STUDENT_REQUEST,
       UPLOAD_STUDENT,
       UPDATE_STUDENT_STATUS,
       UPLOAD_STUDENT_ERROR,
       RESET_STUDENT_FALLBACKS,
       DELETE_STUDENT_ERROR
      } = ACTIONS;
      

    const student = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_OWN_STUDENT:
            return{
                ...state,
                isLoadingData:true,
                dataError:false,
                data:{},
                fetchSuccess:false,
            }
            case  GET_OWN_STUDENT:
            const {record} = action.payload;
            return{
                ...state,
                isLoadingData:false,
                dataError:false,
                dataErrorMessage:'',
                data:{...record},
                fetchSuccess:true,

            }
            case  GET_STUDENT_ERROR:
            return{
                ...state,
                isLoadingData:false,
                dataError:true,
                dataErrorMessage:action.payload,
                fetchSuccess:false,
            }

            case REQUEST_ADD_NEW_STUDENT:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case ADD_NEW_STUDENT:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:ADD,

            }
            case ADD_NEW_STUDENT_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case  FETCH_ALL_STUDENT:
            return{
                ...state,
                fetchLoading:false,
                isLoadingData:false,
                fetchStudentError:false,
                students:action.payload?action.payload:{},
                fetchSuccess:true,
            }

            case  FETCH_TEMP_STUDENT:
            return{
                ...state,
                template:{...state.template,...action.payload},
                
            }
            case FETCH_ALL_STUDENT_ERROR:
            return{
                ...state,
                fetchLoading:false,
                fetchStudentError:true,
                dataErrorMessage:action.payload,
            }
            case REQUEST_ALL_STUDENT:
            return{
                ...state,
                fetchLoading:true,
                fetchStudentError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case  UPDATE_STUDENT_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',

            }
            case  UPDATE_STUDENT:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                deleteSuccessMessage:'',
                addedSuccessMessage:'',
                updateSuccessMessage:UPDATE,
            }
            
            case  UPDATE_STUDENT_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case DELETE_STUDENT_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case UPLOAD_STUDENT_REQUEST:
            return{
                ...state,
                uploadLoading:true,
                uploadSuccessMessage:'',
                uploadError:false,
                formDataError:false,
                uploadSuccess:false,
                fallbacks:[],
            }
            case UPLOAD_STUDENT:
            return{
                ...state,
                uploadLoading:false,
                uploadSuccessMessage:UPLOADED,
                uploadError:false,
                uploadSuccess:true,
                fallbacks:[],
                formErrorMessage:'',
            }
            case UPLOAD_STUDENT_ERROR:
            return{
                ...state,
                uploadLoading:false,
                uploadSuccessMessage:'',
                formErrorMessage:action.message,
                uploadError:true,
                uploadSuccess:false,
                fallbacks:[...state.fallbacks,...action.data],
            }
            case UPDATE_STUDENT_STATUS:{
                return{
                    ...state,
                    uploadStatus:action.payload,
                }
            }
            case RESET_STUDENT_FALLBACKS:
            return{
                ...state,
                fallbacks:[],
            }
            case DELETE_STUDENT:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                deleteSuccessMessage:DELETE,
            }
            case DELETE_STUDENT_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case REFRESH_STUDENT_REQUEST:
            return{
                ...state,
                dataError:false,
                formLoading:false,
                formErrorMessage:'',
                formDataError:false,
                fetchStudentError:false,
                formSuccess:false,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                dataErrorMessage:'',
                uploadLoading:false,
                uploadError:false,
                uploadSuccess:false,
                // retrievedRecord:{},
                uploadSuccessMessage:'',
               
            }
            default:
            
            return state;
        }

    }

    export default student
