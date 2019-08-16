import { ACTIONS } from '../Constants/ACTIONS'


const {
REFRESH_FACULTY_REQUEST,
REQUEST_OWN_FACULTY,
FETCH_OWN_FACULTY,
FETCH_OWN_FACULTY_ERROR,
FETCH_ALL_FACULTY,
FETCH_TEMP_FACULTY,
FETCH_ALL_FACULTY_ERROR,
REQUEST_ALL_FACULTY,
REQUEST_ADD_NEW_FACULTY,
ADD_NEW_FACULTY,
ADD_NEW_FACULTY_ERROR,
UPDATE_FACULTY_REQUEST,
UPDATE_FACULTY,
UPDATE_FACULTY_ERROR,
DELETE_FACULTY_REQUEST,
DELETE_FACULTY,
DELETE_FACULTY_ERROR,
}= ACTIONS


export const fetchOwnFacultyRequest =()=>{
    return{
        type:REQUEST_OWN_FACULTY,
    }
}

export const fetchAllFacultyRequest =()=>{
    return{
        type:REQUEST_ALL_FACULTY,
    }
}

export const fetchOwnfaculty =(payload)=>{
    return{
        type:FETCH_OWN_FACULTY,
        payload,
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_FACULTY_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_FACULTY,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_FACULTY_ERROR,
        payload
    }
}

export const fetchaLLfaculty =(payload)=>{
    return{
        type:FETCH_ALL_FACULTY,
        payload,
    }
}

export const fetchTempfaculty =(payload)=>{
    return{
        type:FETCH_TEMP_FACULTY,
        payload,
    }
}


export const fetchOwnfacultyError =(payload)=>{
    return{
        type:FETCH_OWN_FACULTY_ERROR,
        payload,
    }
}

export const fetchAllfacultyError =(payload)=>{
    return{
        type:FETCH_ALL_FACULTY_ERROR,
        payload,
    }
}

export const fetchAddFacultyeRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_FACULTY,
    }
}
export const fetchAddFaculty=(payload)=>{
    return{
        type: ADD_NEW_FACULTY,
        payload
    }
}
export const fetchAddFacultyError=(payload)=>{
    return{
        type: ADD_NEW_FACULTY_ERROR,
        payload
    }
}

export const fetchUpdateFacultyRequest=()=>{
    return{
        type: UPDATE_FACULTY_REQUEST,
    }
}
export const fetchUpdateFaculty=(payload)=>{
    return{
        type: UPDATE_FACULTY,
        payload
    }
}
export const fetchUpdateFacultyError=(payload)=>{
    return{
        type: UPDATE_FACULTY_ERROR,
        payload
    }
}

export const fetchRefreshFacultyRequest =()=>{
    return{
        type:REFRESH_FACULTY_REQUEST
    }
}