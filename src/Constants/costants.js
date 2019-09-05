

export const REGEX ={
    EMAIL:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //email
    BUISNESSNAME:/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/, //for buisness name
    OTP:/^[0-9]{8}$/,
    PASSWORD:/^[a-zA-Z]\w{6,1000}$/,
    PIN:/^[0-9]{6}$/,
    WEBSITE:/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
}

export const API = {

    URL:'http://69.64.68.237:8080/samstertiary/api/',

    PATHS:{
        DIAL_CODE:'dialcodes',
        AUTHENTICATION:'auth/actions',
        SIGNUP:'signup/actions',
        PROFILE:'profile/page/',
        ALLPROFILE:'profile/fetch',
        PROFILEBYPHONE:'profile/validate',
        MAINPROFILE:'profile',
        LOGIN:"auth/login", 
        INSTITUTE:'institution',
        FACULTY:'faculty',
        ALLFACULTY:'faculty/fetch',
        ALLINSTITUTIONS:'institution/fetch',
        COUNTRYLOCATIONS:'get/countrylocations?country=1',
        COUNTRIES:'get/countries',
        DEPARTMENT:'department/',
        COURSES:'course',
        PAYMENT:{
          MAIN:'payment',
          FEE:'fees',
          HISTORY:'history',
          REFERENCE:'reference?totalslots='
        },
        SUBSCRIPTION:{
          MAIN:'subscription',
          SUBSCRIBE:'subscribe',
          CONFIRM:'confirm',
        },
        ALLSTUDENT:'student/fetch',
        STUDENT:'student',
        SEMESTER:'semester',
        ALLSEMESTER:'semester/fetch',
        SESSION:'session',
        COURSEREG:'coursereg/',
        ALLCOURSEREG:'coursereg/fetch',
        ALLSESSION:'session/fetch',
        ALLCOURSES:'course/fetch',
        ALLDEPARTMENTS:'department/fetch',
        ATTENDANCE:'attendance/fetch',
        UPLOAD:'upload',
        DROPDOWNS:{
          institution:'get/institutions?',
          faculties:'get/faculties',
          departments:'get/departments?',
          courses:'get/courses?',
        }
    },
    status: {
        /* *** SERVER STATUS CODES *** */
        OK: '200',
        BAD_REQUEST: '400',
        INVALID_CREDENTIALS: '403',
        NOT_ACCEPTABLE: '406',
        NOT_FOUND: '404',
        CONFLICT:'409',
        OTP_EXPIRED: '405',
        INVALID_CLAIM: '490',
        UNAUTHORIZED:'401',
        SERVICE_UNAVAILABLE:'503',
        ALGORITHM_MISMATCH: '492',
        TOKEN_EXPIRED: '498',
        COOKIE_REQUIRED: '499',
        INTERNAL_SERVER_ERROR: '500',
        NOT_MODIFIED:'304',
        /* *** FRONT END STATUS CODES *** */
        NO_TOKEN_IN_STORAGE: '0',
        /* VALIDATE_INVITE */
        VALIDATE_INVITE_FAILED_INVALID_CODE: '1',
        VALIDATE_INVITE_FAILED_TO_PROCESS: '2',
        VALIDATE_INVITE_SUCCESS_HAS_ACCOUNT: '3',
        VALIDATE_INVITE_SUCCESS_NEW_ACCOUNT: '4',
      },
      actions: {
        SIGN_UP_VALIDATION: '1',
        AUTHENTICATION: '0',
        REFRESHTOKEN:'1',
        SIGNUP_COMPLETION: '2',
        PROFILE: '3',
        INVITE: '4',
        USERS: '5',
        BUSINESS: '5',
        SERVICE: '8',
        SUBSCRIPTION: '7',
        TAX: '9',
        ACCOUNT: '8',
        PRODUCT_CATEGORY: '8',
        CHART_OF_ACCOUNT: '8',
        PRODUCT: '8',
        CONTACT: '6',
      },
}

export const ROLES ={
  SYSTEMADMIN:'SYSADMIN',
  INSTITUTIONADMIN:"INSTITUTIONADMIN",
  INSTITUTIONOBSERVER:"INSTITUTIONOBSERVER",
  FACULTYADMIN: "FACULTYADMIN",
  FACULTYOBSERVER: "FACULTYOBSERVER",
  DEPARTMENTADMIN: "DEPARTMENTADMIN",
  DEPARTMENTOBSERVER: "DEPARTMENTOBSERVER",
} 

/* SUCCESS MESSAGE*/ 
export const SUCCESS_MESSAGES={
  UPDATE:'Updated SuccessFully',
  ADD:'Added SuccessFully',
  DELETE:'Deleted Successfully',
  UPLOADED:'SuccessFully Uploaded',
  SYNC:'Record Syncronized Successfully',
}
