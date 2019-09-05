import { ACTIONS } from '../Constants/ACTIONS'


const {
REFRESH_COURSES_REQUEST,
REQUEST_OWN_COURSES,
FETCH_OWN_COURSES,
FETCH_OWN_COURSES_ERROR,
FETCH_ALL_COURSES,
FETCH_TEMP_COURSES,
FETCH_ALL_COURSES_ERROR,
REQUEST_ALL_COURSES,
REQUEST_ADD_NEW_COURSES,
ADD_NEW_COURSES,
ADD_NEW_COURSES_ERROR,
UPDATE_COURSE,
UPDATE_COURSE_ERROR,
UPDATE_COURSE_REQUEST,
DELETE_COURSE,
DELETE_COURSE_ERROR,
DELETE_COURSE_REQUEST,
UPLOAD_COURSE,
UPLOAD_COURSE_REQUEST,
UPLOAD_COURSE_ERROR,
UPDATE_COURSE_STATUS,
RESET_COURSE_FALLBACKS
}= ACTIONS

export const fetchOwnCoursesRequest =()=>{
    return{
        type:REQUEST_OWN_COURSES
    }
}

export const fetchAllCoursesRequest =()=>{
    return{
        type:REQUEST_ALL_COURSES,
    }
}

export const fetchUpdateStatus =(payload)=>{
    return{
        type:UPDATE_COURSE_STATUS,
        payload,
    }
}
export const fetchOwnCourses =(payload)=>{
    return{

        type:FETCH_OWN_COURSES,
        payload,
    }
}

export const fetchaLLCourses =(payload)=>{
    return{
        type:FETCH_ALL_COURSES,
        payload,
    }
}

export const fetchUploadRequest=()=>{
    return{
        type: UPLOAD_COURSE_REQUEST,
    }
}


export const fetchUpload=(payload)=>{
    return{
        type: UPLOAD_COURSE,
        payload
    }
}


export const fetchUploadError=(message, data)=>{
    console.log(message)
    return{
        type: UPLOAD_COURSE_ERROR,
        message,
        data

    }
}


export const fetchOwnCoursesError =(payload)=>{
    return{
        type:FETCH_OWN_COURSES_ERROR,
        payload,
    }
}

export const fetchTempCourses =(payload)=>{
    return{
        type:FETCH_TEMP_COURSES,
        payload,
    }
}

export const fetchAllCoursesError =(payload)=>{
    return{
        type:FETCH_ALL_COURSES_ERROR,
        payload,
    }
}

export const fetchAddCourseseRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_COURSES,
    }
}
export const fetchAddCourses=(payload)=>{
    return{
        type: ADD_NEW_COURSES,
        payload
    }
}
export const fetchAddCoursesError=(payload)=>{
    return{
        type: ADD_NEW_COURSES_ERROR,
        payload
    }
}

export const resetFallbacks = ()=>{
    return{
        type:RESET_COURSE_FALLBACKS
    }
}

export const fetchUpdateCourseRequest=()=>{
    return{
        type: UPDATE_COURSE_REQUEST,
    }
}
export const fetchUpdateCourse=(payload)=>{
    return{
        type: UPDATE_COURSE,
        payload
    }
}
export const fetchUpdateCourseError=(payload)=>{
    return{
        type: UPDATE_COURSE_ERROR,
        payload
    }
}


export const fetchRefreshCoursesRequest =()=>{
    return{
        type:REFRESH_COURSES_REQUEST
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_COURSE_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_COURSE,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_COURSE_ERROR,
        payload
    }
}