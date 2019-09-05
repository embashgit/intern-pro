import { ACTIONS } from "../Constants/ACTIONS";

const {
    SIGN_UP_COMPLETION_REQUEST,
    SIGN_UP_COMPLETION,
    REFRESH_SIGN_UP_COMPLETION,
    SIGN_UP_COMPLETION_ERROR,
} = ACTIONS;
export const fetchCompleteSignUpRequest=()=>{
    return{
        type: SIGN_UP_COMPLETION_REQUEST
    }
}

export const fetchCompleteSignUp=()=>{
    return{
        type: SIGN_UP_COMPLETION
    }
}

export const fetchCompleteSignUpError=(payload)=>{
    return{
        type: SIGN_UP_COMPLETION_ERROR,
        payload
    }
}
export const fetchRefreshRequest= ()=>{
    return{
        type:REFRESH_SIGN_UP_COMPLETION
    }
}
