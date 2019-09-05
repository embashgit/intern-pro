import {
    ACTIONS
    } from '../Constants/ACTIONS'
import { SUCCESS_MESSAGES } from '../Constants/costants';

  const { DELETE,ADD,UPDATE,UPLOADED,SYNC}=  SUCCESS_MESSAGES;

const emptySub={
    expired:true,
    note:"",
    wallet: "0.00",
}
    const InitState = {
      
      subs:{},
      isLoading:false,
      addSubmessage:'',
      isLoadingData:false,
      dataError:false,
      fetchSuccess:false,
      confirmResponse:'',
      dataErrorMessage:'',
      fetchLoading:false,
      subscriptions:{
          note:'',
          expired:'true',
          wallet:0.00,
      },
      fetchSubError:false,
      formLoading:false,
      formDataError:false,
      formSuccess:false,
    }

    const {
    FETCH_PROCESS_SUBSCRIPTION,
    FETCH_SUBSCRIPTION,
    FETCH_SUBSCRIPTION_CONFIRMATION,
    REQUEST_SUBSCRIPTION,
    REQUEST_SUBSCRIPTION_CONFIRMATION,
    REQUEST_PROCESS_SUBSCRIPTION,
    FETCH_PROCESS_SUBSCRIPTION_ERROR,
    FETCH_SUBSCRIPTION_CONFIRMATION_ERROR,
    FETCH_SUBSCRIPTION_ERROR,
    REFRESH_SUBSCRIPTION_REQUEST
        }= ACTIONS

    const subscription = (state = InitState, action) => {

        switch (action.type) {

            case REQUEST_SUBSCRIPTION:
            return{
                ...state,
                isLoading:true,
                dataError:false,
                dataErrorMessage:'',
                fetchSuccess:false,
            }
            case FETCH_SUBSCRIPTION:
            return{
                ...state,
                isLoading:false,
                dataError:false,
                subscriptions:{...state.subscriptions,...action.payload},
                fetchSuccess:true,
            }
            case  FETCH_SUBSCRIPTION_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    dataError:true,
                    dataErrorMessage:action.payload,
                    fetchSuccess:false,
                }
           
            case REQUEST_PROCESS_SUBSCRIPTION:
            return{
                ...state,
                formLoading:true,
                dataError:false,
                fetchSuccess:false,
            }
            case FETCH_PROCESS_SUBSCRIPTION:
                const {message,...others} = action.payload
            return{
                ...state,
                formLoading:false,
                dataError:false,
                fetchSuccess:true,
                addSubmessage:message,
                subscriptions:{...state.subscriptions,...others}
            }
            case FETCH_PROCESS_SUBSCRIPTION_ERROR:
                return{
                    ...state,
                    formLoading:false,
                    dataError:true,
                    addSubmessage:'',
                    dataErrorMessage:action.payload,
                    fetchSuccess:false,
                    
                }
            case REQUEST_SUBSCRIPTION_CONFIRMATION:
                return{
                    ...state,
                    formLoading:true,
                    dataErrorMessage:'',
                    dataError:false,
                    formSuccess:false,
                }
              case  FETCH_SUBSCRIPTION_CONFIRMATION:
                  return{
                      ...state,
                    formLoading:false,
                    formSuccess:true,
                    confirmResponse:action.payload,
                  }
            case FETCH_SUBSCRIPTION_CONFIRMATION_ERROR:
                return{
                    ...state,
                    formLoading:false,
                    formSuccess:false,
                    dataErrorMessage:action.payload,
                    dataError:true,
                }

            
           case 'RESET_REDUCER':
               return state = InitState
               
            case REFRESH_SUBSCRIPTION_REQUEST:
            return{
                ...state,
                isLoading:false,
                isLoadingData:false,
                dataError:false,
                fetchSuccess:false,
                dataErrorMessage:'',
                fetchLoading:false,
                fetchSubError:false,
                formLoading:false,
                formDataError:false,
                formSuccess:false,
                addSubmessage:'',
                confirmResponse:'',
            }
            default:
            return state;
        }

    }

    export default subscription
