import { ACTIONS } from "../Constants/ACTIONS";



const {
    REQUEST_OWN_INSTITUTION,
    GET_OWN_INSTITUTE,
    GET_INSTITUTE_ERROR,
    ADD_NEW_INSTITUTE,
    ADD_NEW_INSTITUTE_ERROR,
    REQUEST_ADD_NEW_INSTITUTE,
    REFRESH_INSTITUTE_REQUEST,
    FETCH_ALL_INSTITUTE,
    FETCH_TEMP_INSTITUTE,
    FETCH_ALL_INSTITUTE_ERROR,
    REQUEST_ALL_INSTITUTE,
    UPDATE_INSTITUTE,
    UPDATE_INSTITUTE_ERROR,
    UPDATE_INSTITUTE_REQUEST,
    DELETE_INSTITUTE,
    DELETE_INSTITUTE_REQUEST,
    DELETE_INSTITUTE_ERROR,

} = ACTIONS;


export const fetchRequestOwnInstitute=()=>{
    return{
        type: REQUEST_OWN_INSTITUTION
    }
}

export const fetchAllInstituteRequest =()=>{
    return{
        type:REQUEST_ALL_INSTITUTE,
    }
}

export const fetchAddinstituteRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_INSTITUTE,
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_INSTITUTE_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_INSTITUTE,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_INSTITUTE_ERROR,
        payload
    }
}

export const fetchAddinstitute=(payload)=>{
    return{
        type: ADD_NEW_INSTITUTE,
        payload
    }
}

export const fetchAllinstitute=(payload)=>{
    return{
        type: FETCH_ALL_INSTITUTE,
        payload
    }
}

export const fetchTempinstitute=(payload)=>{
    return{
        type: FETCH_TEMP_INSTITUTE,
        payload
    }
}

export const fetchAllinstituteError=(payload)=>{
    return{
        type: FETCH_ALL_INSTITUTE_ERROR,
        payload
    }
}


export const fetchAddinstituteError=(payload)=>{
    return{
        type: ADD_NEW_INSTITUTE_ERROR,
        payload
    }
}

export const fetchUpdateInstituteRequest=()=>{
    return{
        type: UPDATE_INSTITUTE_REQUEST,
    }
}
export const fetchUpdateInstitute=(payload)=>{
    return{
        type: UPDATE_INSTITUTE,
        payload
    }
}
export const fetchUpdateInstituteError=(payload)=>{
    return{
        type: UPDATE_INSTITUTE_ERROR,
        payload
    }
}

export const fetchOwnInstitute=(payload)=>{
    return{
        type: GET_OWN_INSTITUTE,
        payload,
    }
}

export const fetchInstituteError=(payload)=>{
    return{
        type: GET_INSTITUTE_ERROR,
        payload,
    }
}

export const refreshInstituteRequest=()=>{
    return{
        type: REFRESH_INSTITUTE_REQUEST,
    }
}

