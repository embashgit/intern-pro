import { logAPIRequest, logAPIResponse } from './logging';
import { API} from '../Constants/costants';
import  store from '../routes/store'
import {ERROR_MESSAGES} from '../Constants' 
import { ACTIONS } from '../Constants/ACTIONS';
const { NO_TOKEN_IN_STORAGE: NO_TOKEN_STATUS_CODE } = API.status;
const { NO_TOKEN: NO_TOKEN_MESSAGE } = ERROR_MESSAGES;

const {REFRESH_TOKENS} = ACTIONS
/**
 * - Get the `Authorization` header with access token set
 * @return {Object} Header with Authorization
 */
export const getAccessTokenHeader = () => {
  let accessToken;
  let FP;
  try {
    // accessToken = sessionStorage.getItem('access-token');
    accessToken =store.getState().Auth.token['access-token'];
    FP = store.getState().Auth.token['FP'];
    
// console.log(accessTokn);
  } catch (error) {
    // if an error occurs, sessionStorage and cookies are disabled
    // no need to make a request
    return null;
  }
  if (accessToken) {
    return { Authorization: `bearer ${accessToken}`,FP:FP };
  }
  return null;
};

/**
 * - Error object to return when there is no token in storage.
 * @return {Object}
 */
export const getNoTokenErrorObject = () => ({
  status: NO_TOKEN_STATUS_CODE,
  info: NO_TOKEN_MESSAGE,
  message: 'NO_TOKEN',
});

export const getRefreshTokenHeader = () => {
  let refreshToken;
  try {
     refreshToken =store.getState().Auth.token['refresh-token'];
    // refreshToken = sessionStorage.getItem('refresh-token');
  } catch (error) {
    // if an error occurs, sessionStorage and cookies are disabled
    // no need to make a request
    return null;
  }
  if (refreshToken) {
    return { Authorization: `bearer ${refreshToken}` };
  }
  return null;
};

// check that server response is 200 OK (ie ok: true)
// server should always return 200 OK, error codes are in meta of json response
// this is verified in case of server or network errors
export const checkServerStatus = (response) => {
  if (!(response.status && response.ok)) {
    return Promise.reject(response);
  }
  return response.json();
};

// make a request to refresh token
export const refreshToken = (initialRequestMeta) => {
  const { status } = API;
  const refreshTokenHeader = getRefreshTokenHeader();
  let accessToken;
  try {
    accessToken =store.getState().Auth.token['access-token'];
    // accessToken = sessionStorage.getItem('access-token');
  } catch (error) {
    // sessionStorage not available
    return Promise.reject(initialRequestMeta);
  }
  // if either access token or refresh token is not present
  if (!(accessToken && refreshTokenHeader)) {
    return Promise.reject(initialRequestMeta);
  }

  const refreshTokenUrl = API.URL + API.PATHS.AuthENTICATION;
  const requestMeta = {
    action: API.actions.REFRESHTOKEN,
    source: 'web',
  };
  const requestData = { 'expired-token': accessToken };
  const body = JSON.stringify({ meta: requestMeta, data: requestData });
  return fetch(refreshTokenUrl, {
    method: 'POST',
    credentials: 'include',
    body,
    headers: refreshTokenHeader,
  })
    .then(checkServerStatus)
    .then((response) => {
      const { meta, data } = response;
      if (meta.status === status.OK) {
        try {
          // sessionStorage.setItem('access-token', data['access-token']);
          // sessionStorage.setItem('refresh-token', data['refresh-token']);
          store.dispatch({ type:REFRESH_TOKENS,payload:data })
        } catch (error) {
          // sessionStorage not available
          console.log(error)
          return Promise.reject(getNoTokenErrorObject());
        }
        return data;
      }
      return Promise.reject({ ...meta, data });
    });
};

// make a fetch request and handle response status
// triggers catch in calling action if status is not 200 OK
// handles refreshing of token and repeats the request
/**
 * - Utility function to handle fetch requests
 * - Handles server status and returns data or rejects promise if error occured
 * - Handles token refresh if the access token is expired
 * @param  {String} path path to API service excluding API root path
 * @param  {String} method POST or GET
 * @param  {String} body request object (stringified)
 * @param  {Object} headers request headers
 * @return {Promise} Resulting promise from fetch
 */

export const fetchAndHandleTokenRefresh = (path, method, body, headers) => {
  const { status } = API;
  const url = API.URL + path;
  const fetchOptions = { method, credentials: 'include' };
  if (method !== 'GET' && body) {
    fetchOptions.body = body;
  }
  if (headers) {
    fetchOptions.headers = headers;
  }
  logAPIRequest(path, fetchOptions);
  return fetch(url, fetchOptions).then(checkServerStatus).then(({ meta, data }) => {
    logAPIResponse(path, { meta, data });
    console.log(meta.status);
    if (meta.status === 200 || meta.status === status.OK) {
      return data;
    } if (meta.status === status.TOKEN_EXPIRED) {
      return refreshToken(meta).then(() => {
        fetchOptions.headers = { ...fetchOptions.headers, ...getAccessTokenHeader() };
        return fetch(url, fetchOptions)
          .then(checkServerStatus)
          .then(({ meta: newRequestMeta, data: newRequestData }) => {
            logAPIResponse(path, { meta: newRequestMeta, data: newRequestData });
            if (newRequestMeta.status === status.OK){
              return newRequestData;
            }
            console.log(meta.status)
            return Promise.reject({ ...newRequestMeta, data: newRequestData });
          });
      });
    }
 console.log(meta,data);
//  console.log(error);
    return Promise.reject({ meta, data });
  })
};

