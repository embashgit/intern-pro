import { ACTIONS } from '../Constants/ACTIONS'


const {
REFRESH_DEPARTMENT_REQUEST,
REQUEST_OWN_DEPARTMENT,
FETCH_OWN_DEPARTMENT,
FETCH_OWN_DEPARTMENT_ERROR,
FETCH_ALL_DEPARTMENT,
FETCH_TEMP_DEPARTMENT,
FETCH_ALL_DEPARTMENT_ERROR,
REQUEST_ALL_DEPARTMENT,
REQUEST_ADD_NEW_DEPARTMENT,
ADD_NEW_DEPARTMENT,
ADD_NEW_DEPARTMENT_ERROR,
UPDATE_DEPARTMENT_REQUEST,
UPDATE_DEPARTMENT,
UPDATE_DEPARTMENT_ERROR,
DELETE_DEPARTMENT_REQUEST,
DELETE_DEPARTMENT_ERROR,
DELETE_DEPARTMENT,
}= ACTIONS




export const fetchOwnDEPARTMENTRequest =()=>{
    return{
        type:REQUEST_OWN_DEPARTMENT,
    }
}

export const fetchAllDEPARTMENTRequest =()=>{
    return{
        type:REQUEST_ALL_DEPARTMENT,
    }
}

export const fetchOwnDEPARTMENT =(payload)=>{
    return{
        type:FETCH_OWN_DEPARTMENT,
        payload,
    }
}

export const fetchaLLDEPARTMENT =(payload)=>{
    return{
        type:FETCH_ALL_DEPARTMENT,
        payload,
    }
}

export const fetchTempDepartment =(payload)=>{
    return{
        type:FETCH_TEMP_DEPARTMENT,
        payload,
    }
}
export const fetchOwnDEPARTMENTError =(payload)=>{
    return{
        type:FETCH_OWN_DEPARTMENT_ERROR,
        payload,
    }
}

export const fetchAllDEPARTMENTError =(payload)=>{
    return{
        type:FETCH_ALL_DEPARTMENT_ERROR,
        payload,
    }
}

export const fetchAddDEPARTMENTeRequest=()=>{
    return{
        type: REQUEST_ADD_NEW_DEPARTMENT,
    }
}
export const fetchAddDEPARTMENT=(payload)=>{
    return{
        type: ADD_NEW_DEPARTMENT,
        payload
    }
}
export const fetchAddDEPARTMENTError=(payload)=>{
    return{
        type: ADD_NEW_DEPARTMENT_ERROR,
        payload
    }
}

export const fetchUpdateDEPARTMENTeRequest=()=>{
    return{
        type: UPDATE_DEPARTMENT_REQUEST,
    }
}
export const fetchUpdateDEPARTMENT=(payload)=>{
    return{
        type: UPDATE_DEPARTMENT,
        payload
    }
}
export const fetchUpdateDEPARTMENTError=(payload)=>{
    return{
        type: UPDATE_DEPARTMENT_ERROR,
        payload
    }
}

export const fetchRefreshDEPARTMENTRequest =()=>{
    return{
        type:REFRESH_DEPARTMENT_REQUEST
    }
}

export const fetchDeleteRequest=()=>{
    return{
        type: DELETE_DEPARTMENT_REQUEST,
    }
}

export const fetchDelete=(payload)=>{
    return{
        type: DELETE_DEPARTMENT,
        payload
    }
}
export const fetchDeleteError=(payload)=>{
    return{
        type: DELETE_DEPARTMENT_ERROR,
        payload
    }
}