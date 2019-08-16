import { ACTIONS } from "../Constants/ACTIONS";


const {
    REFRESH_PAYMENT_REQUEST,
    REQUEST_PAYMENT_FEE,
    FETCH_PAYMENT_FEE,
    FETCH_PAYMENT_FEE_ERROR,
    REQUEST_PAYMENT_REFERENCE,
    FETCH_PAYMENT_REFERENCE,
    FETCH_REFERENCE_ERROR,
    FETCH_PAYMENT_HISTORY,
    REQUEST_PAYMENT_HISTORY,
    FETCH_PAYMENT_HISTORY_ERROR,
    REQUEST_ADD_PAYMENT,
    ADD_PAYMENT,
    ADD_PAYMENT_ERROR,
} =ACTIONS


export const requestFee = ()=>{
    return{
        type:REQUEST_PAYMENT_FEE,
         }
}

export const getFee = (payload)=>{
    return{
        type:FETCH_PAYMENT_FEE,
        payload,
    }
}


export const getFeeError= (payload)=>{
    return{
        type:FETCH_PAYMENT_FEE_ERROR,
        payload,
    }
}


export const requestPaymentReference= ()=>{
    return{
        type:REQUEST_PAYMENT_REFERENCE,
    }
}

export const fetchPaymentReference= (payload)=>{
    return{
        type:FETCH_PAYMENT_REFERENCE,
        payload,
    }
}

export const paymentReferenceError= (payload)=>{
    return{
        type:FETCH_REFERENCE_ERROR,
        payload,
    }
}

export const requestPaymentHistory= ()=>{
    return{
        type:REQUEST_PAYMENT_HISTORY,
    }
}

export const fetchPaymentHistory= (payload)=>{
    return{
        type:FETCH_PAYMENT_HISTORY,
        payload,
    }
}

export const fetchPaymentHistoryError= (payload)=>{
    return{
        type:FETCH_PAYMENT_HISTORY_ERROR,
        payload,
    }
}

export const requestAddPayment= ()=>{
    return{
        type:REQUEST_ADD_PAYMENT,
    }
}


export const fetchAddPayment= (payload)=>{
    return{
        type:ADD_PAYMENT,
        payload
    }
}

export const fetchAddPaymentError= (payload)=>{
    return{
        type:ADD_PAYMENT_ERROR,
        payload
    }
}

export const addDetails =(payload)=>{
    return{
        type: 'ADD_DETAILS',
        payload
    }
}
export const fetchRefreshRequest=()=>{
    return{
        type:REFRESH_PAYMENT_REQUEST
    }
}