

export const ERROR_MESSAGE={
    /** sign in error messages * */
    SIGN_IN_INVALID: 'Invalid Username or Password',
    SIGN_IN_FAILED: 'Failed to Sign in',
    /* SIGN UP ERROR MESSAGE */
    SIGN_UP_ERROR:{
        INVALID_NAME:'Invalid buisness name',
        INVALID_EMAIL:'invalid email address',
        iNVALID_PHONE:'Invalid Phone Number',
        INCOMPLETE:'Incomplete form inputs',
        REQUEST_FAILED:'Invalid sign up request',
    },
    /* OTP error*/
    FAILED:'Failed Action',


    OTP_ERROR:{
        INCORRECT:'Incorrect OTP',
        EMPTY:'OTP cannot be empty',
        TIMEOUT:'OTP has Expired',
    },
    /* Subscription Erors*/
    INSUFFICIENT_SLOTS:'Insufficient Slots for selected Institution',
    SERVICE_UNAVAILABLE:'Payment verification server not reachable',
    /* time out error messages */
    TIMEOUT:'Access Time out',
    /*Network error*/
    NETWORK_FAILURE:'Network failed',
    SERVER_ERROR:'Ops! Please try again later!',
    UNAUTHORIZED:'User not allowed!',
    EXPIRED_TOKEN:'Token has Expired',
}