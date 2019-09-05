import { ACTIONS } from "../Constants/ACTIONS";


const {
REFRESH_SEMESTER_REQUEST,
REQUEST_OWN_SEMESTER,
FETCH_OWN_SEMESTER,
FETCH_OWN_SEMESTER_ERROR,
FETCH_ALL_SEMESTER,
FETCH_TEMP_SEMESTER,
FETCH_ALL_SEMESTER_ERROR,
REQUEST_ALL_SEMESTER,
REQUEST_ADD_NEW_SEMESTER,
ADD_NEW_SEMESTER,
ADD_NEW_SEMESTER_ERROR,
UPDATE_SEMESTER_REQUEST,
UPDATE_SEMESTER,
UPDATE_SEMESTER_ERROR,
DELETE_SEMESTER_REQUEST,
DELETE_SEMESTER,
DELETE_SEMESTER_ERROR,
}=ACTIONS
export const fetchOwnSemesterRequest =()=>{
    return{
        type:REQUEST_OWN_SEMESTER,
    }
}

export const fetchAllSemesterRequest =()=>{
    return{
        type:REQUEST_ALL_SEMESTER,
    }
}

export const fetchOwnSemester =(payload)=>{
    return{
        type:FETCH_OWN_SEMESTER,
        payload,
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_SEMESTER_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_SEMESTER,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_SEMESTER_ERROR,
        payload
    }
}

export const fetchaLLSemester =(payload)=>{
    return{
        type:FETCH_ALL_SEMESTER,
        payload,
    }
}

export const fetchTempSemester =(payload)=>{
    return{
        type:FETCH_TEMP_SEMESTER,
        payload,
    }
}


export const fetchOwnSemesterError =(payload)=>{
    return{
        type:FETCH_OWN_SEMESTER_ERROR,
        payload,
    }
}

export const fetchAllSemesterError =(payload)=>{
    return{
        type:FETCH_ALL_SEMESTER_ERROR,
        payload,
    }
}

export const fetchAddSemestereRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_SEMESTER,
    }
}
export const fetchAddSemester=(payload)=>{
    return{
        type: ADD_NEW_SEMESTER,
        payload
    }
}
export const fetchAddSemesterError=(payload)=>{
    return{
        type: ADD_NEW_SEMESTER_ERROR,
        payload
    }
}

export const fetchUpdateSemesterRequest=()=>{
    return{
        type: UPDATE_SEMESTER_REQUEST,
    }
}
export const fetchUpdateSemester=(payload)=>{
    return{
        type: UPDATE_SEMESTER,
        payload
    }
}
export const fetchUpdateSemesterError=(payload)=>{
    return{
        type: UPDATE_SEMESTER_ERROR,
        payload
    }
}

export const fetchRefreshSemesterRequest =()=>{
    return{
        type:REFRESH_SEMESTER_REQUEST
    }
}