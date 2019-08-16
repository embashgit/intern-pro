import { ACTIONS } from "../Constants/ACTIONS";
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
} =ACTIONS


export const requestSubscription = ()=>{
    return{
        type:REQUEST_SUBSCRIPTION
         }
}

export const getSub = (payload)=>{
    return{
        type:FETCH_SUBSCRIPTION,
        payload,
    }
}


export const getSubError= (payload)=>{
    return{
        type:FETCH_SUBSCRIPTION_ERROR,
        payload,
    }
}


export const requestConfirmSub=()=>{
    return{
        type:REQUEST_SUBSCRIPTION_CONFIRMATION,
    }
}

export const fetchConfirmSub= (payload)=>{
    return{
        type:FETCH_SUBSCRIPTION_CONFIRMATION,
        payload,
    }
}

export const fetchConfirmSubError=(payload)=>{
    return{
        type:FETCH_SUBSCRIPTION_CONFIRMATION_ERROR,
        payload,
    }
}

export const requestProcessSub= ()=>{
    return{
        type:REQUEST_PROCESS_SUBSCRIPTION,
    }
}

export const fetchProcessSub= (payload)=>{
    return{
        type:FETCH_PROCESS_SUBSCRIPTION,
        payload,
    }
}

export const fetchProcessSubError=(payload)=>{
    return{
        type:FETCH_PROCESS_SUBSCRIPTION_ERROR,
        payload,
    }
}

export const fetchRefreshSub =()=>{
    return{
        type:REFRESH_SUBSCRIPTION_REQUEST,
    }
}