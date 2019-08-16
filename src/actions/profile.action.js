import { ACTIONS } from '../Constants/ACTIONS'


const {
REFRESH_PROFILE_REQUEST,
REQUEST_PHONE_PROFILE,
FETCH_PHONE_PROFILE,
FETCH_PHONE_PROFILE_ERROR,
FETCH_ALL_PROFILE,
FETCH_TEMP_PROFILE,
FETCH_ALL_PROFILE_ERROR,
REQUEST_ALL_PROFILE,
REQUEST_ADD_NEW_PROFILE,
ADD_NEW_PROFILE,
ADD_NEW_PROFILE_ERROR,
UPDATE_PROFILE_REQUEST,
UPDATE_PROFILE,
UPDATE_PROFILE_ERROR,
DELETE_PROFILE_REQUEST,
DELETE_PROFILE_ERROR,
DELETE_PROFILE,
}= ACTIONS




export const fetchPhoneProfileRequest =()=>{
    return{
        type:REQUEST_PHONE_PROFILE,
    }
}

export const fetchAllProfileRequest =()=>{
    return{
        type:REQUEST_ALL_PROFILE,
    }
}

export const fetchPhoneProfile =(payload)=>{
    return{
        type:FETCH_PHONE_PROFILE,
        payload,
    }
}

export const fetchaLLProfile =(payload)=>{
    return{
        type:FETCH_ALL_PROFILE,
        payload,
    }
}

export const fetchTempProfile =(payload)=>{
    return{
        type:FETCH_TEMP_PROFILE,
        payload,
    }
}
export const fetchPhoneProfileError =(payload)=>{
    return{
        type:FETCH_PHONE_PROFILE_ERROR,
        payload,
    }
}

export const fetchAllProfileError =(payload)=>{
    return{
        type:FETCH_ALL_PROFILE_ERROR,
        payload,
    }
}

export const fetchAddProfileRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_PROFILE,
    }
}
export const fetchAddProfile=(payload)=>{
    return{
        type: ADD_NEW_PROFILE,
        payload
    }
}
export const fetchAddProfileError=(payload)=>{
    return{
        type: ADD_NEW_PROFILE_ERROR,
        payload
    }
}

export const fetchUpdateProfileRequest=()=>{
    return{
        type: UPDATE_PROFILE_REQUEST,
    }
}
export const fetchUpdateProfile=(payload)=>{
    return{
        type: UPDATE_PROFILE,
        payload
    }
}
export const fetchUpdateProfileError=(payload)=>{
    return{
        type: UPDATE_PROFILE_ERROR,
        payload
    }
}

export const fetchRefreshProfileRequest =()=>{
    return{
        type:REFRESH_PROFILE_REQUEST
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_PROFILE_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_PROFILE,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_PROFILE_ERROR,
        payload
    }
}