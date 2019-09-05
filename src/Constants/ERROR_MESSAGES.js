export const ERROR_MESSAGES = {
  /* Errors thrown by functions */
  EXPECTED_ARRAY: 'Expected an array for',
  EXPECTED_STRING: 'Expected a string for',
  EXPECTED_NON_EMPTY: 'Expected value not to be empty for',
  EXPECTED_SINGLE_AUTH_TYPE: 'Expected all entities to have the same shouldAuthorize value',
  EXPECTED_OBJECT: 'Expected type object for',
  EXPECTED_FUNCTION: 'Expected type function for',
  EXPECTED_OBJECT_PROP: 'Expected object prop',
  EXPECTED_BOOLEAN: 'Expected a boolean for',
  EXPECTED_APP_STATE: 'Expected a constant from APP_STATES for',
  EXPECTED_ENTITY: 'Expected an Entity for',
  EXPECTED_ENTITY_WITH_PATH: 'Expected an EntityWithPath for',
  EXPECTED_FETCH_ACTION: 'Expected a FetchAction for',
  EXPECTED_MOMENT: 'Expected a moment object for',
  EXPECTED_VALID_MOMENT: 'Expected a valid moment object for',
  INVALID_PHONE_NUMBER: 'Invalid phone number',
  /* API errors */
  NO_TOKEN: 'No token.',
  REQUEST_PROCESSING_ERROR: 'An error occured while processing your request.',
  REGISTRATION_EXIST:'Course Registration exist. Student cannot be deleted',
  INVALID_INVITE: 'Invalid invite',
  /* FETCH errors */

  GENERIC_ERROR_OCCURRED: 'An error occured. Please try again.',
  SERVER_ERROR_OCCURED: 'A server error occured. Please try again.',
  NETWORK_ERROR_OCCURRED: 'Request failed. Please check your network connection.',
  /* INSTITUTE ERROR MESSAGE*/
  DUPLICATE_INSTITUTE :'Sorry, Institution with the same email already exist',
  CANNOT_DELETE:'Institution cannot be deleted',
   /* FACULTY ERROR MESSAGE*/
   FACULTY_CANNOT_DELETE:'Faculty cannot be deleted',
   DUPLICATE_FACULTY :'Sorry, Faculty already exist',
   FACULTY_NOT_MODIFIED :'Faculty not modified',
    /* DEPARTMENT ERROR MESSAGE*/
    DEPARTMENT_CANNOT_DELETE:'Department cannot be deleted',
    DUPLICATE_DEPARTMENT :'Sorry, Department already exist',
    DEPARTMENT_NOT_MODIFIED :'Department not modified',

     /* PROFILE ERROR MESSAGE*/
     PROFILE_CANNOT_DELETE:'Profile cannot be deleted',
     DUPLICATE_PROFILE :'Sorry, Profile already exist',
     PROFILE_NOT_MODIFIED :'Profile not modified',
 
     /* STUDENT ERROR MESSAGE*/
     STUDENT_CANNOT_DELETE:'Course Registration exist. Student cannot be deleted',
     DUPLICATE_STUDENT :'Sorry, Student already exist',
     STUDENT_NOT_MODIFIED :'Student not modified',
     /* COURSES ERROR MESSAGE*/
     COURSES_CANNOT_DELETE:'Course registrations exist, and Course cannot be deleted',
     DUPLICATE_COURSES :'Sorry, Course already exist',
     COURSES_NOT_MODIFIED :'Course not modified',
      /* COURSESREG ERROR MESSAGE*/
      COURSESREG_CANNOT_DELETE:'Course registrations exist, and Course cannot be deleted',
      DUPLICATE_COURSESREG :'Sorry, Course Registration already exist',
      COURSESREG_NOT_MODIFIED :'Course Registration not modified',
      /* SESSION ERROR MESSAGE*/
   SESSION_CANNOT_DELETE:'Session cannot be deleted',
   DUPLICATE_SESSION :'Sorry, Session already exist',
   SESSION_NOT_MODIFIED :'Session not modified',
      /* SEMESTER ERROR MESSAGE*/
      SEMESTER_CANNOT_DELETE:'Semester cannot be deleted',
      DUPLICATE_SEMESTER :'Sorry, Semester already exist',
      SEMESTER_NOT_MODIFIED :'Semester not modified',
};
