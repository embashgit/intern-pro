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
      uploadStatus:1,
      retrievedRecord:[],
      fallbacks:[],
      dataErrorMessage:'',
      fetchLoading:false,
      fetchCoursesError:false,
      formLoading:false,
      formDataError:false,
      formSuccess:false,
      formErrorMessage:false,
      template:{},
      courses:{},
      deleteSuccessMessage:'',
      updateSuccessMessage:'',
      addedSuccessMessage:'',
      uploadLoading:false,
      uploadError:false,
      uploadSuccess:false,
      uploadSuccessMessage:'',
    }

    const {
        REFRESH_COURSES_REQUEST,
        REQUEST_OWN_COURSES,
        REQUEST_ALL_COURSES,
        FETCH_OWN_COURSES,
        FETCH_OWN_COURSES_ERROR,
        FETCH_ALL_COURSES,
        FETCH_ALL_COURSES_ERROR,
        ADD_NEW_COURSES,
        ADD_NEW_COURSES_ERROR,
        REQUEST_ADD_NEW_COURSES,
        UPDATE_COURSE,
        UPDATE_COURSE_REQUEST,
        UPDATE_COURSE_ERROR,
        DELETE_COURSE,
        DELETE_COURSE_REQUEST,
        DELETE_COURSE_ERROR,
        FETCH_TEMP_COURSES,
        UPLOAD_COURSE,
        UPLOAD_COURSE_ERROR,
        UPDATE_COURSE_STATUS,
        UPLOAD_COURSE_REQUEST,
        RESET_COURSE_FALLBACKS,
        }= ACTIONS

    const courses = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_OWN_COURSES:
            return{
                ...state,
                isLoadingData:true,
                formLoading:false,
                dataError:false,
                fetchSuccess:false,
            }
            case REQUEST_ALL_COURSES:
            return{
                ...state,
                formLoading:false,
                fetchLoading:true,
                fetchCoursesError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case  FETCH_OWN_COURSES:
            const {record} = action.payload;
            return{
                ...state,
                isLoadingData:false,
                dataError:false,
                dataErrorMessage:'',
                data:{...record},

            }
            case  FETCH_OWN_COURSES_ERROR:
            return{
                ...state,
                isLoadingData:false,
                dataError:true,
                dataErrorMessage:action.payload,
                fetchSuccess:false,
            }
            case FETCH_TEMP_COURSES:
            return{
                ...state,
                template:{...state.template,...action.payload},
            }
            case FETCH_ALL_COURSES:
            return{
                ...state,
                fetchLoading:false,
                dataError:false,
                isLoadingData:false,
                fetchCoursesError:false,
                courses:{...state.courses,...action.payload},
                fetchSuccess:true,
            }
            case FETCH_ALL_COURSES_ERROR:
            return{
                ...state,
                fetchLoading:false,
                fetchCoursesError:true,
                dataErrorMessage:action.payload,
            }
            case REQUEST_ADD_NEW_COURSES:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case ADD_NEW_COURSES:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:ADD,

            }
            case ADD_NEW_COURSES_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case  UPDATE_COURSE_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',

            }
            case  UPDATE_COURSE:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                addedSuccessMessage:'',
                deleteSuccessMessage:'',
                updateSuccessMessage:UPDATE,
            }

            case  UPDATE_COURSE_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case UPLOAD_COURSE_REQUEST:
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
            case UPLOAD_COURSE:
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
            case UPLOAD_COURSE_ERROR:
            return{
                ...state,
                uploadLoading:false,
                uploadSuccessMessage:'',
                formErrorMessage:action.message,
                uploadError:true,
                fallbacks:[...state.fallbacks,...action.data],
                uploadSuccess:false,
            }
            case UPDATE_COURSE_STATUS:{
                return{
                    ...state,
                    uploadStatus:action.payload,
                }
            }
            case RESET_COURSE_FALLBACKS:
            return{
                ...state,
                fallbacks:[],
            }
            case DELETE_COURSE_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }

            case DELETE_COURSE:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                deleteSuccessMessage:DELETE,
            }
            case DELETE_COURSE_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case REFRESH_COURSES_REQUEST:
            return{
                ...state,
                formDataError:false,
                dataError:false,
                formLoading:false,
                formSuccess:false,
                uploadError:false,
                dataErrorMessage:false,
                fetchCoursesError:false,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                uploadLoading:false,
                uploadSuccessMessage:'',
                formErrorMessage:'',
                uploadSuccess:false,
            }
            default:
            return state;
        }

    }

    export default courses
