/* eslint-disable no-fallthrough */
import {
  ACTIONS
} from '../Constants/ACTIONS'
import { SUCCESS_MESSAGES } from '../Constants/costants';

const { DELETE, ADD, UPDATE, UPLOADED, SYNC } = SUCCESS_MESSAGES;

const InitState = {
  data: {},
  token: {},
  loginErrorMessage: '',
  isLoading: false,
  loginError: false,
  isLoggedIn: false,
  isLoadingData: false,
  loginSuccess: false,
  dataError: false,
  dataErrorMessage: '',
  fetchSuccess: false,
  fetchLoading: false,
  fetchProfileError: false,
  formLoading: false,
  formDataError: false,
  deleteSuccessMessage: '',
  updateSuccessMessage: '',
  addedSuccessMessage: '',
  formSuccess: false,
  formErrorMessage: false,
  profiles: {},
  phoneProfile: {},





}
const {
  LOGIN_REQUEST,
  LOGIN,
  REFRESH_LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT,
  REFRESH_TOKENS,
  LOGIN_INVALID,
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_REQUEST,
  REFRESH_PROFILE_REQUEST,
  REQUEST_ALL_PROFILE,
  REQUEST_PHONE_PROFILE,
  FETCH_PHONE_PROFILE,
  FETCH_PHONE_PROFILE_ERROR,
  FETCH_ALL_PROFILE,
  FETCH_ALL_PROFILE_ERROR,
  ADD_NEW_PROFILE,
  ADD_NEW_PROFILE_ERROR,
  REQUEST_ADD_NEW_PROFILE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  DELETE_PROFILE_ERROR,
  FETCH_TEMP_PROFILE,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE,
} = ACTIONS;


/**
 * - Shows if the user has logged in successfully
 * - `true` if authentiated
 * - `false` otherwise
 * - default: `false`
 * @param  {Boolean} state
 * @param  {Object} action
 * @return {Boolean}
 */


const account = [
  {
    id: 1, email: "almustafaisah@yahoo.com", pin: "password",
    profile: {
      abbrv: 'I Networks',
      name: 'Musty Faisal',
    },
    access: [
      { "module": "Dashboard", "pages": ["InternDashboard"]},
      { "module": "Staffs", "pages": ["Interns"] },
    ]
  },
  {
    id: 2, email: "ibrahimembash@gmail.com", pin: "password",
    profile: {
      abbrv: 'Abuja Soft',
      name: 'Ibrahim Embash',
    },
    access: [
      { "module": "Dashboard", "pages": ["dashboard","Administrateur"] },
      { "module": "Interns", "pages": ["Interns"] },
      { "module": "Supervisor", "pages": ["supervisor"] }
    ]
  },
  {
    id: 3, email: "ahmadhussein@gmail.com", pin: "password",
    profile: {
      abbrv: 'G Desinger',
      name: 'Ahmad Hussein',
    },
    access: [
      { "module": "Dashboard", "pages": ["Tasks"]},
      { "module": "Interns", "pages": ["Interns"] },
    ]
  },
]
const AuthState = (state = InitState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginErrorMessage: '',
        loginError: false,
        token: {},
        isLoading: true,
        loginSuccess: false,
        isLoggedIn: false,
      }
    case LOGIN:
      const acc = account.filter((user) => user.email === action.payload.phone && user.pin === action.payload.pin
      );
      console.log(action.payload);
      console.log(acc)
      if (acc[0]) {

        return {
          ...state,
          loginErrorMessage: '',
          data: { ...state.data, ...acc[0] },
          // token:{...state.token,...tokens},

          isLoggedIn: true,
          loginError: false,
          isLoading: false,
        }
      } else {
      return {
        ...state,
        loginErrorMessage: "Invalid Credentials",
        loginError: true,
        loginSuccess: false,
        isLoading: false,
      }
      }
    case GET_USER_DATA:
      if (action.token['access-token'] && action.token['refresh-token']) {
        return {
          ...state,
          loginError: false,
          dataError: false,
          isLoadingData: false,
          data: { ...state.data, ...action.data },
          token: { ...state.token, ...action.token },
          isLoggedIn: true,
        }
      } else {
        return {
          ...state,
          loginError: false,
          dataError: false,
          isLoadingData: false,
          data: { ...state.data, ...action.data },
          isLoggedIn: true,
        }
      }
    case REFRESH_TOKENS:
      return {
        ...state,
        token: { ...state.token, ...action.payload }
      }
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        isLoadingData: false,
        dataError: true,
        dataErrorMessage: action.payload,
      }
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        isLoadingData: true,
        dataError: false,
      }
    case LOGIN_INVALID:
      return {
        ...state,
        loginErrorMessage: action.payload,
        loginError: true,
        loginSuccess: false,
        isLoading: false,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        loginError: true,
        loginSuccess: false,
        isLoggedIn: false,
      }

    case REFRESH_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: false,
        fetchSuccess: false,
        fetchLoading: false,
        fetchProfileError: false,
        formLoading: false,
        formDataError: false,
        dataError: false,
        dataErrorMessage: '',
        deleteSuccessMessage: '',
        updateSuccessMessage: '',
        addedSuccessMessage: '',
        formSuccess: false,
        formErrorMessage: false,
        profiles: {},
      }
    case REQUEST_PHONE_PROFILE:
      return {
        ...state,
        isLoadingData: true,
        dataError: false,
        fetchSuccess: false,
      }
    case REQUEST_ALL_PROFILE:
      return {
        ...state,
        fetchLoading: true,
        fetchProfileError: false,
        dataErrorMessage: '',
        fetchSuccess: false,
      }
    case FETCH_PHONE_PROFILE:

      return {
        ...state,
        isLoadingData: false,
        dataError: false,
        dataErrorMessage: '',
        phoneProfile: { ...state.phoneProfile, ...action.payload },

      }
    case FETCH_PHONE_PROFILE_ERROR:
      return {
        ...state,
        isLoadingData: false,
        dataError: true,
        dataErrorMessage: action.payload,
        fetchSuccess: false,
      }
    case FETCH_ALL_PROFILE:
      return {
        ...state,
        fetchLoading: false,
        isLoadingData: false,
        fetchProfileError: false,
        profiles: { ...state.profiles, ...action.payload },
        fetchSuccess: true,
      }
    case FETCH_TEMP_PROFILE:
      return {
        ...state,
        template: { ...state.template, ...action.payload },

      }
    case FETCH_ALL_PROFILE_ERROR:
      return {
        ...state,
        fetchLoading: false,
        fetchProfileError: true,
        dataErrorMessage: action.payload,
      }
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        formLoading: true,
        formDataError: false,
        formSuccess: false,
        formErrorMessage: '',

      }
    case UPDATE_PROFILE:
      return {
        ...state,
        formLoading: false,
        formDataError: false,
        formSuccess: true,
        addedSuccessMessage: '',
        deleteSuccessMessage: '',
        updateSuccessMessage: UPDATE,
      }

    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        formLoading: false,
        formDataError: true,
        formSuccess: false,
        formErrorMessage: action.payload,
      }
    case REQUEST_ADD_NEW_PROFILE:
      return {
        ...state,
        formLoading: true,
        formDataError: false,
        formSuccess: false,
        formErrorMessage: '',
      }
    case ADD_NEW_PROFILE:
      return {
        ...state,
        formLoading: false,
        formDataError: false,
        formSuccess: true,
        deleteSuccessMessage: '',
        updateSuccessMessage: '',
        addedSuccessMessage: ADD,

      }
    case ADD_NEW_PROFILE_ERROR:
      return {
        ...state,
        formLoading: false,
        formDataError: true,
        formSuccess: false,
        formErrorMessage: action.payload,
      }
    case DELETE_PROFILE_REQUEST:
      return {
        ...state,
        formLoading: true,
        formDataError: false,
        formSuccess: false,
        formErrorMessage: '',
      }
    case DELETE_PROFILE:
      return {
        ...state,
        formLoading: false,
        formDataError: false,
        updateSuccessMessage: '',
        addedSuccessMessage: '',
        deleteSuccessMessage: DELETE,
        formSuccess: true,
      }
    case DELETE_PROFILE_ERROR:
      return {
        ...state,
        formLoading: false,
        formDataError: true,
        formSuccess: false,
        formErrorMessage: action.payload,

      }

    case REFRESH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: false,
        loginError: false,
        loginSuccess: false,
        loginErrorMessage: '',
      }
    case LOGOUT:
      return state = InitState
    default:
      return state;
  }
};

export default AuthState