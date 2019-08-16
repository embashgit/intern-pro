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
        dispatch(fetchLogin(credentials));
        const { isLoggedIn} = getState().AuthState;
        if(isLoggedIn){
          return history.push('/')
        } 
        // sessionStorage.setItem('user');
        // return timeout(30000, login(phone, pin)).then((data) => {
        //   dispatch(fetchLogin(data))
        //   const { isLoggedIn} = getState().Auth;
        //   const {role} =getState().Auth.data.profile;
        //   dispatch(resolveRoles(role))
        //   console.log(role)
        //   if (isLoggedIn) {
        //    history.push('/profile')
        //   }
        // }).catch(error => {
        //   console.log(error)
        //   if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchAndRefresh(fetchLoginInvalid(ERROR_MESSAGE.TIMEOUT),fetchRefreshRequest()))
        //   if (error.status === parseInt(status.NOT_ACCEPTABLE)) return dispatch(dispatchAndRefresh(fetchLoginInvalid(SIGN_IN_INVALID),fetchRefreshRequest()))
        //   if (error.status === parseInt(status.INTERNAL_SERVER_ERROR))  return dispatch(dispatchAndRefresh(fetchLoginInvalid(NETWORK_FAILURE),fetchRefreshRequest()))
        //    return dispatch(dispatchAndRefresh(fetchLoginInvalid(NETWORK_FAILURE),fetchRefreshRequest()))
        // })
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