/* eslint-disable no-unreachable */
import {
  fetchLogin,
  fetchLoginrequest,
  logout,
  fetchLoginInvalid,
  fetchRefreshRequest,
} from '../actions/authentication.action'
import { login } from '../API/authentication';
import { history } from '../App';
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { dispatchAndRefresh } from './initSignUp.helper';
// import { fetchUserData } from './account.helper';
import { refreshStudentReguest } from '../actions/student.action';
import { refreshInstituteRequest } from '../actions/institution.actions';
import { fetchRefreshFacultyRequest } from '../actions/faculty.actions';
import { fetchRefreshDEPARTMENTRequest } from '../actions/department.action';
import { fetchRefreshCoursesRequest } from '../actions/courses.action';
import { fetchRefreshCourseRegRequest } from '../actions/courseReg.action';
import { fetchRefreshSemesterRequest } from '../actions/semester.action';
import { fetchRefreshSessionRequest } from '../actions/session.action';
import { resolveRoles } from '../actions/roles.action';
const { status } = API



const { SIGN_IN_INVALID, NETWORK_FAILURE } = ERROR_MESSAGE
/**
 * - Remove tokens from session
 */
export const clearSession = () => {
  try {
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('refresh-token');
    sessionStorage.removeItem('user-token')
  } catch (error) {
    console.log(error);
  }
};

/**
 * - Check is there is an active session
 * - Relies on access-token for methods without access to the redux store
 * @return {Boolean}
 */
export const isSessionActive = () => {
  let token;
  try {
    token = sessionStorage.getItem('access-token');

  } catch (error) {
    return false;
  }
  return Boolean(token);
};


/** 
 * @param set timeout when network calls loading for too long say > 4sec
 * 
 * @returns {Promise}
*/
export const timeout = (ms, promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(ERROR_MESSAGE.TIMEOUT)
    }, ms)
    promise.then(resolve, reject)
  })
}

export const userLogin = (credentials) => {
  return (dispatch, getState) => {
    dispatch(fetchLoginrequest())
   
    setTimeout(()=>{
      if (credentials) {
        let password = credentials.pin;
        let username = credentials.phone;
        console.log(`${username}${password}`)
          return  login(username, password)
          .then((res)=>{
            console.log(res)
            if(res.meta.message ==='Success' && res.data){
              dispatch(fetchLogin(res.data));
              const { isLoggedIn,data} = getState().AuthState;
              if(isLoggedIn && data.user.roleid===3){
                return history.push('/internDashboard')
              }
              if(isLoggedIn){
                return history.push('/')
              }
            }else{
              dispatch(fetchLogin());
            }
          })
       
      }
    },2000)

  }
}


export const userLogout = () => {
  return (dispatch, getState) => {
    dispatch(logout())
    const { isLoggedIn } = getState().AuthState;
    if (!isLoggedIn) {
      clearSession()
      dispatch({type:'RESET_REDUCER'})
      dispatch(refreshStudentReguest());
      return history.push('/auth')
    }
  }
}