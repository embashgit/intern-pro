import { ACTIONS } from "../Constants/ACTIONS";


const {
REFRESH_COURSEREG_REQUEST,
REQUEST_OWN_COURSEREG,
FETCH_OWN_COURSEREG,
FETCH_OWN_COURSEREG_ERROR,
FETCH_ALL_COURSEREG,
FETCH_TEMP_COURSEREG,
FETCH_ALL_COURSEREG_ERROR,
REQUEST_ALL_COURSEREG,
REQUEST_ADD_NEW_COURSEREG,
ADD_NEW_COURSEREG,
ADD_NEW_COURSEREG_ERROR,
UPDATE_COURSEREG_REQUEST,
UPDATE_COURSEREG,
UPDATE_COURSEREG_ERROR,
DELETE_COURSEREG_REQUEST,
DELETE_COURSEREG,
DELETE_COURSEREG_ERROR,
UPLOAD_COURSEREG_REQUEST,
UPLOAD_COURSEREG,
UPLOAD_COURSEREG_ERROR,
UPDATE_STATUS,
RESET_COURSEREG_FALLBACKS
}=ACTIONS
export const fetchOwnCourseRegRequest =()=>{
    return{
        type:REQUEST_OWN_COURSEREG,
    }
}

export const fetchAllCourseRegRequest =()=>{
    return{
        type:REQUEST_ALL_COURSEREG,
    }
}

export const fetchOwnCourseReg =(payload)=>{
    return{
        type:FETCH_OWN_COURSEREG,
        payload,
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_COURSEREG_REQUEST,
    }
}
export const fetchUpdateStatus =(payload)=>{
    return{
        type:UPDATE_STATUS,
        payload,
    }
}
export const fetchDelete=(payload)=>{
    return{
        type: DELETE_COURSEREG,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_COURSEREG_ERROR,
        payload
    }
}

export const fetchaLLCourseReg =(payload)=>{
    return{
        type:FETCH_ALL_COURSEREG,
        payload,
    }
}
export const fetchUploadRequest=()=>{
    return{
        type: UPLOAD_COURSEREG_REQUEST,
    }
}


export const fetchUpload=(payload)=>{
    return{
        type: UPLOAD_COURSEREG,
        payload
    }
}

export const resetFallbacks = ()=>{
    return{
        type:RESET_COURSEREG_FALLBACKS
    }
}


export const fetchUploadError=(message, data)=>{
    return{
        type: UPLOAD_COURSEREG_ERROR,
        message,
        data
    }
}


export const fetchTempCourseReg =(payload)=>{
    return{
        type:FETCH_TEMP_COURSEREG,
        payload,
    }
}


export const fetchOwnCourseRegError =(payload)=>{
    return{
        type:FETCH_OWN_COURSEREG_ERROR,
        payload,
    }
}

export const fetchAllCourseRegError =(payload)=>{
    return{
        type:FETCH_ALL_COURSEREG_ERROR,
        payload,
    }
}

export const fetchAddCourseRegeRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_COURSEREG,
    }
}
export const fetchAddCourseReg=(payload)=>{
    return{
        type: ADD_NEW_COURSEREG,
        payload
    }
}
export const fetchAddCourseRegError=(payload)=>{
    return{
        type: ADD_NEW_COURSEREG_ERROR,
        payload
    }
}

export const fetchUpdateCourseRegRequest=()=>{
    return{
        type: UPDATE_COURSEREG_REQUEST,
    }
}
export const fetchUpdateCourseReg=(payload)=>{
    return{
        type: UPDATE_COURSEREG,
        payload
    }
}
export const fetchUpdateCourseRegError=(payload)=>{
    return{
        type: UPDATE_COURSEREG_ERROR,
        payload
    }
}

export const fetchRefreshCourseRegRequest =()=>{
    return{
        type:REFRESH_COURSEREG_REQUEST
    }
}