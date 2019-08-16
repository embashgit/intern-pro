import { ACTIONS } from "../Constants/ACTIONS";


const {
REFRESH_SESSION_REQUEST,
REQUEST_OWN_SESSION,
FETCH_OWN_SESSION,
FETCH_OWN_SESSION_ERROR,
FETCH_ALL_SESSION,
FETCH_TEMP_SESSION,
FETCH_ALL_SESSION_ERROR,
REQUEST_ALL_SESSION,
REQUEST_ADD_NEW_SESSION,
ADD_NEW_SESSION,
ADD_NEW_SESSION_ERROR,
UPDATE_SESSION_REQUEST,
UPDATE_SESSION,
UPDATE_SESSION_ERROR,
DELETE_SESSION_REQUEST,
DELETE_SESSION,
DELETE_SESSION_ERROR,
}=ACTIONS
export const fetchOwnSessionRequest =()=>{
    return{
        type:REQUEST_OWN_SESSION,
    }
}

export const fetchAllSessionRequest =()=>{
    return{
        type:REQUEST_ALL_SESSION,
    }
}

export const fetchOwnSession =(payload)=>{
    return{
        type:FETCH_OWN_SESSION,
        payload,
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_SESSION_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_SESSION,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_SESSION_ERROR,
        payload
    }
}

export const fetchaLLSession =(payload)=>{
    return{
        type:FETCH_ALL_SESSION,
        payload,
    }
}

export const fetchTempSession =(payload)=>{
    return{
        type:FETCH_TEMP_SESSION,
        payload,
    }
}


export const fetchOwnSessionError =(payload)=>{
    return{
        type:FETCH_OWN_SESSION_ERROR,
        payload,
    }
}

export const fetchAllSessionError =(payload)=>{
    return{
        type:FETCH_ALL_SESSION_ERROR,
        payload,
    }
}

export const fetchAddSessioneRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_SESSION,
    }
}
export const fetchAddSession=(payload)=>{
    return{
        type: ADD_NEW_SESSION,
        payload
    }
}
export const fetchAddSessionError=(payload)=>{
    return{
        type: ADD_NEW_SESSION_ERROR,
        payload
    }
}

export const fetchUpdateSessionRequest=()=>{
    return{
        type: UPDATE_SESSION_REQUEST,
    }
}
export const fetchUpdateSession=(payload)=>{
    return{
        type: UPDATE_SESSION,
        payload
    }
}
export const fetchUpdateSessionError=(payload)=>{
    return{
        type: UPDATE_SESSION_ERROR,
        payload
    }
}

export const fetchRefreshSessionRequest =()=>{
    return{
        type:REFRESH_SESSION_REQUEST
    }
}