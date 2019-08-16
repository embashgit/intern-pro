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
      dataErrorMessage:'',
      fetchLoading:false,
      fetchfacultyError:false,
      formLoading:false,
      formDataError:false,
      formSuccess:false,
      deleteSuccessMessage:'',
      updateSuccessMessage:'',
      addedSuccessMessage:'',
      formErrorMessage:false,
      faculties:{},
      template:{},
    }

    const {
        REFRESH_FACULTY_REQUEST,
        REQUEST_OWN_FACULTY,
        REQUEST_ALL_FACULTY,
        FETCH_OWN_FACULTY,
        FETCH_OWN_FACULTY_ERROR,
        FETCH_ALL_FACULTY,
        FETCH_ALL_FACULTY_ERROR,
        ADD_NEW_FACULTY,
        FETCH_TEMP_FACULTY,
        ADD_NEW_FACULTY_ERROR,
        REQUEST_ADD_NEW_FACULTY,
        UPDATE_FACULTY_REQUEST,
        UPDATE_FACULTY,
        UPDATE_FACULTY_ERROR,
        DELETE_FACULTY,
        DELETE_FACULTY_ERROR,
        DELETE_FACULTY_REQUEST
        }= ACTIONS

    const faculty = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_OWN_FACULTY:
            return{
                ...state,
                isLoadingData:true,
                dataError:false,
                fetchSuccess:false,
            }
            case REQUEST_ALL_FACULTY:
            return{
                ...state,
                fetchLoading:true,
                fetchfacultyError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case  FETCH_OWN_FACULTY:
            const {record} = action.payload;
            return{
                ...state,
                isLoadingData:false,
                dataError:false,
                dataErrorMessage:'',
                data:{...record},

            }

            case  FETCH_OWN_FACULTY_ERROR:
            return{
                ...state,
                isLoadingData:false,
                dataError:true,
                dataErrorMessage:action.payload,
                fetchSuccess:false,
            }
            case FETCH_ALL_FACULTY:
            return{
                ...state,
                fetchLoading:false,
                isLoadingData:false,
                fetchfacultyError:false,
                faculties:{...state.faculties,...action.payload},
                fetchSuccess:true,
            }
            case FETCH_TEMP_FACULTY:
            return{
                ...state,
            template:{...state.template,...action.payload},   
            }
            case FETCH_ALL_FACULTY_ERROR:
            return{
                ...state,
                fetchLoading:false,
                fetchfacultyError:true,
                dataErrorMessage:action.payload,
            }
            case REQUEST_ADD_NEW_FACULTY:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case ADD_NEW_FACULTY:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                updateSuccessMessage:'',
                deleteSuccessMessage:'',
                addedSuccessMessage:ADD,

            }
            case ADD_NEW_FACULTY_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                addedSuccessMessage:'',
                formErrorMessage:action.payload,
            }
            case  UPDATE_FACULTY_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',

            }
            case  UPDATE_FACULTY:
            return{
                ...state,
                deleteSuccessMessage:'',
                addedSuccessMessage:'',
                updateSuccessMessage:UPDATE,
                formLoading:false,
                formDataError:false,
                formSuccess:true,

            }

            case  UPDATE_FACULTY_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                updateSuccessMessage:'',
                formErrorMessage:action.payload,
            }

            case DELETE_FACULTY_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case DELETE_FACULTY:
            return{
                ...state,
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                deleteSuccessMessage:DELETE,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
            }
            case DELETE_FACULTY_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }

            case REFRESH_FACULTY_REQUEST:
            return{
                ...state,
                formDataError:false,
                dataError:false,
                formLoading:false,
                formSuccess:false,
                dataErrorMessage:false,
                fetchfacultyError:false,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:'',
            }
            default:
            return state;
        }

    }

    export default faculty
