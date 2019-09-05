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
      formLoading:false,
      fetchLoading:false,
      formDataError:false,
      formSuccess:false,
      institutions:{},
      template:{},
      countries:{},
      fetchinstituteError:false,
      formErrorMessage:'',
      deleteSuccessMessage:'',
      updateSuccessMessage:'',
      addedSuccessMessage:'',
    }


    const {
       GET_OWN_INSTITUTE,
       GET_INSTITUTE_ERROR,
       REFRESH_INSTITUTE_REQUEST,
       REQUEST_OWN_INSTITUTION,
       ADD_NEW_INSTITUTE_ERROR,
       ADD_NEW_INSTITUTE,
       FETCH_ALL_INSTITUTE_ERROR,
       FETCH_ALL_INSTITUTE,
       FETCH_TEMP_INSTITUTE,
       REQUEST_ALL_INSTITUTE,
       REQUEST_ADD_NEW_INSTITUTE,
       UPDATE_INSTITUTE,
       UPDATE_INSTITUTE_ERROR,
       UPDATE_INSTITUTE_REQUEST,
       DELETE_INSTITUTE,
       DELETE_INSTITUTE_REQUEST,
       DELETE_INSTITUTE_ERROR,
       GET_COUNTRIES,
      } = ACTIONS;
      

    const institute = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_OWN_INSTITUTION:
            return{
                ...state,
                isLoadingData:true,
                dataError:false,
                data:{},
                fetchSuccess:false,
            }
            case  GET_OWN_INSTITUTE:
            const {record} = action.payload;
            return{
                ...state,
                isLoadingData:false,
                dataError:false,
                dataErrorMessage:'',
                data:{...record},
                fetchSuccess:true,

            }
            case  GET_INSTITUTE_ERROR:
            return{
                ...state,
                isLoadingData:false,
                dataError:true,
                dataErrorMessage:action.payload,
                fetchSuccess:false,
            }

            case REQUEST_ADD_NEW_INSTITUTE:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case ADD_NEW_INSTITUTE:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                deleteSuccessMessage:'',
                updateSuccessMessage:'',
                addedSuccessMessage:ADD,
            }
            case ADD_NEW_INSTITUTE_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case  FETCH_ALL_INSTITUTE:
            return{
                ...state,
                fetchLoading:false,
                isLoadingData:false,
                fetchinstituteError:false,
                institutions:{...state.institutions,...action.payload},
                fetchSuccess:true,
            }
            case  FETCH_TEMP_INSTITUTE:
            return{
                ...state,
                fetchLoading:false,
                isLoadingData:false,
                fetchinstituteError:false,
                template:{...state.template,...action.payload},
                fetchSuccess:true,
            }
            case GET_COUNTRIES:
                return{
                    ...state,
                    countries:action.payload
                }
            case FETCH_ALL_INSTITUTE_ERROR:
            return{
                ...state,
                fetchLoading:false,
                fetchinstituteError:true,
                dataErrorMessage:action.payload,
            }
            case REQUEST_ALL_INSTITUTE:
            return{
                ...state,
                fetchLoading:true,
                fetchinstituteError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case  UPDATE_INSTITUTE_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',

            }
            case  UPDATE_INSTITUTE:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                deleteSuccessMessage:'',
                addedSuccessMessage:'',
                updateSuccessMessage:UPDATE,
            }
            
            case  UPDATE_INSTITUTE_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case DELETE_INSTITUTE_REQUEST:
            return{
                ...state,
                formLoading:true,
                formDataError:false,
                formSuccess:false,
                formErrorMessage:'',
            }
            case DELETE_INSTITUTE:
            return{
                ...state,
                formLoading:false,
                formDataError:false,
                formSuccess:true,
                updateSuccessMessage:'',
                addedSuccessMessage:'',
                deleteSuccessMessage:DELETE,
            }
            case DELETE_INSTITUTE_ERROR:
            return{
                ...state,
                formLoading:false,
                formDataError:true,
                formSuccess:false,
                formErrorMessage:action.payload,
            }
            case REFRESH_INSTITUTE_REQUEST:
            return{
                ...state,
                dataError:false,
                formLoading:false,
                formErrorMessage:'',
                formDataError:false,
                fetchinstituteError:false,
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

    export default institute
