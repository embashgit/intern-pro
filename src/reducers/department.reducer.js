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
      fetchDepartmentError:false,
      formLoading:false,
      formDataError:false,
      deleteSuccessMessage:'',
      updateSuccessMessage:'',
      addedSuccessMessage:'',
      formSuccess:false,
      formErrorMessage:false,
      departments:{},
      template:{},
    }

    const {
        REFRESH_DEPARTMENT_REQUEST,
        REQUEST_OWN_DEPARTMENT,
        REQUEST_ALL_DEPARTMENT,
        FETCH_OWN_DEPARTMENT,
        FETCH_OWN_DEPARTMENT_ERROR,
        FETCH_ALL_DEPARTMENT,
        FETCH_ALL_DEPARTMENT_ERROR,
        ADD_NEW_DEPARTMENT,
        ADD_NEW_DEPARTMENT_ERROR,
        REQUEST_ADD_NEW_DEPARTMENT,
        UPDATE_DEPARTMENT_REQUEST,
        UPDATE_DEPARTMENT,
        UPDATE_DEPARTMENT_ERROR,
        DELETE_DEPARTMENT_ERROR,
        FETCH_TEMP_DEPARTMENT,
        DELETE_DEPARTMENT_REQUEST,
        DELETE_DEPARTMENT,
        }= ACTIONS

    const department = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_OWN_DEPARTMENT:
            return{
                ...state,
                isLoadingData:true,
                dataError:false,
                fetchSuccess:false,
            }
            case REQUEST_ALL_DEPARTMENT:
            return{
                ...state,
                fetchLoading:true,
                fetchDepartmentError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case  FETCH_OWN_DEPARTMENT:
            const {record} = action.payload;
            return{
                ...state,
                isLoadingData:false,
                dataError:false,
                dataErrorMessage:'',
                data:{...record},

            }
            case  FETCH_OWN_DEPARTMENT_ERROR:
            return{
                ...state,
                isLoadingData:false,
                dataError:true,
                dataErrorMessage:action.payload,
                fetchSuccess:false,
            }
            case FETCH_ALL_DEPARTMENT:
            return{
                ...state,
                fetchLoading:false,
                isLoadingData:false,
                fetchDepartmentError:false,
                departments:{...state.departments,...action.payload},
                fetchSuccess:true,
            }
            case FETCH_TEMP_DEPARTMENT:
            return{
                ...state,
                template:{...state.template,...action.payload},
              
            }
            case FETCH_ALL_DEPARTMENT_ERROR:
            return{
                ...state,
                fetchLoading:false,
                fetchDEPARTMENTError:true,
                dataErrorMessage:action.payload,
            }
            case  UPDATE_DEPARTMENT_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',

            }
            case  UPDATE_DEPARTMENT:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                addedSuccessMessage:'',
                deleteSuccessMessage:'',
                updateSuccessMessage:UPDATE,
            }

            case  UPDATE_DEPARTMENT_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case REQUEST_ADD_NEW_DEPARTMENT:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case ADD_NEW_DEPARTMENT:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:ADD,

            }
            case ADD_NEW_DEPARTMENT_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case DELETE_DEPARTMENT_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case DELETE_DEPARTMENT:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                deleteSuccessMessage:DELETE,
                formSuccess:true,
            }
            case DELETE_DEPARTMENT_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,

            }
            case REFRESH_DEPARTMENT_REQUEST:
            return{
                ...state,
                formErrorMessage:'',
                formDataError:false,
                dataError:false,
                formLoading:false,
                formSuccess:false,
                dataErrorMessage:false,
                fetchDepartmentError:false,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:'',
            }
            default:
            return state;
        }

    }

    export default department
