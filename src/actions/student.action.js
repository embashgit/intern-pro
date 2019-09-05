import { ACTIONS } from "../Constants/ACTIONS";



const {
    REQUEST_OWN_STUDENT,
    GET_OWN_STUDENT,
    GET_STUDENT_ERROR,
    ADD_NEW_STUDENT,
    ADD_NEW_STUDENT_ERROR,
    REQUEST_ADD_NEW_STUDENT,
    REFRESH_STUDENT_REQUEST,
    FETCH_ALL_STUDENT,
    FETCH_TEMP_STUDENT,
    FETCH_ALL_STUDENT_ERROR,
    REQUEST_ALL_STUDENT,
    UPDATE_STUDENT,
    UPDATE_STUDENT_ERROR,
    UPDATE_STUDENT_REQUEST,
    DELETE_STUDENT,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_ERROR,
   UPLOAD_STUDENT,
   UPLOAD_STUDENT_ERROR,
   UPLOAD_STUDENT_REQUEST,
   RESET_STUDENT_FALLBACKS,
   UPDATE_STUDENT_STATUS,
} = ACTIONS;



export const fetchRequestOwnStudent=()=>{
    return{
        type: REQUEST_OWN_STUDENT
    }
}

export const fetchAllStudentRequest =()=>{
    return{
        type:REQUEST_ALL_STUDENT,
    }
}

export const fetchAddStudentRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_STUDENT,
    }
}

export const fetchUploadRequest=()=>{
    return{
        type: UPLOAD_STUDENT_REQUEST,
    }
}


export const fetchUpload=(payload)=>{
    return{
        type: UPLOAD_STUDENT,
        payload
    }
}

export const fetchUploadError=(message, data)=>{
    return{
        type: UPLOAD_STUDENT_ERROR,
        message,
        data

    }
}

export const fetchUpdateStatus =(payload)=>{
    return{
        type:UPDATE_STUDENT_STATUS,
        payload,
    }
}

export const resetFallbacks = ()=>{
    return{
        type:RESET_STUDENT_FALLBACKS
    }
}


export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_STUDENT_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_STUDENT,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_STUDENT_ERROR,
        payload
    }
}

export const fetchAddStudent=(payload)=>{
    return{
        type: ADD_NEW_STUDENT,
        payload
    }
}

export const fetchAllStudent=(payload)=>{
    return{
        type: FETCH_ALL_STUDENT,
        payload
    }
}

export const fetchTempStudent =(payload)=>{
    return{
        type: FETCH_TEMP_STUDENT,
        payload
    }
}

export const fetchAllStudentError=(payload)=>{
    return{
        type: FETCH_ALL_STUDENT_ERROR,
        payload
    }
}


export const fetchAddStudentError=(payload)=>{
    return{
        type: ADD_NEW_STUDENT_ERROR,
        payload
    }
}

export const fetchUpdateStudentRequest=()=>{
    return{
        type: UPDATE_STUDENT_REQUEST,
    }
}
export const fetchUpdateStudent=(payload)=>{
    return{
        type: UPDATE_STUDENT,
        payload
    }
}
export const fetchUpdateStudentError=(payload)=>{
    return{
        type: UPDATE_STUDENT_ERROR,
        payload
    }
}

export const fetchOwnStudent=(payload)=>{
    return{
        type: GET_OWN_STUDENT,
        payload,
    }
}

export const fetchStudentError=(payload)=>{
    return{
        type: GET_STUDENT_ERROR,
        payload,
    }
}

export const refreshStudentReguest=()=>{
    return{
        type: REFRESH_STUDENT_REQUEST,
    }
}

