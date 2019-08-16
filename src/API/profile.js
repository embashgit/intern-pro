import { fetchAndHandleTokenRefresh, getAccessTokenHeader, getNoTokenErrorObject } from './common';
import { API } from '../Constants/costants';


export const fetchUserDataOnLogin = () => {
    const accessTokenHeader = getAccessTokenHeader();
    if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  
    const meta = {
      action: API.actions.PROFILE,
      subaction: API.subActions.GET_DEFAULT_BUSINESS,
      source: 'web',
    };
    const data = {};
    const requestBody = JSON.stringify({ meta, data });
    // const path = '/user_data';
    const path = API.paths.PROFILE;
    const method = 'POST';
    const headers = accessTokenHeader;
    return fetchAndHandleTokenRefresh(path, method, requestBody, headers);
  };
  