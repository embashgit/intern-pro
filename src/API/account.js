import { API } from '../Constants/costants'

import { fetchAndHandleTokenRefresh, getAccessTokenHeader, getNoTokenErrorObject } from './common';


export const getAuthUserData = (associateId) => {
  const accessTokenHeader = getAccessTokenHeader();
  if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  let path = API.PATHS.PROFILE;
  if (associateId) {
    path = `${API.PATHS.PROFILE}${associateId}`;
  }
  const method = 'GET';
  const headers = accessTokenHeader;
  return fetchAndHandleTokenRefresh(path, method, null, headers);
}

export const getOwnProfile = ()=>{
  const accessTokenHeader = getAccessTokenHeader();
  let path = API.PATHS.MAINPROFILE;
  const method = 'GET';
  const headers = accessTokenHeader;
  return fetchAndHandleTokenRefresh(path, method, null, headers);

}
export const getProfileByPhone = (phone) => {
  const accessTokenHeader = getAccessTokenHeader();
  if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  let path = API.PATHS.PROFILEBYPHONE;
  if (phone) {
    path = `${API.PATHS.PROFILEBYPHONE}/${phone}`;
  }
  const method = 'GET';
  const headers={
    'Content-Type':'application/json',
    ...accessTokenHeader,}
  return fetchAndHandleTokenRefresh(path, method, null, headers);
}



export const getAllProfile = (institution) => {
  
  const accessTokenHeader = getAccessTokenHeader();
  if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  let path = `${API.PATHS.ALLPROFILE}?limit=${100}&offset=${0}`;
  if (institution) {
    path = `${path}&institution=${institution}`
  }
  const method = 'GET';
  const headers = accessTokenHeader;
  return fetchAndHandleTokenRefresh(path, method, null, headers);
}

export const getAddProfile = (credentials) => {
  const accessTokenHeader = getAccessTokenHeader();
  if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
 
  let path = API.PATHS.MAINPROFILE
  let meta = {}
    let data = {
      firstname: credentials.firstname,
      surname: credentials.surname,
      middlename: credentials.middlename,
      dialcode: credentials.phone.code,
      role:  credentials.role,
      phone: credentials.phone.number,
      department: credentials.department,
      faculty: credentials.faculty,
      institution: credentials.institution
    }
  
  const method = 'POST';
 const requestBody = JSON.stringify({meta, data})
 const headers={
  'Content-Type':'application/json',
  ...accessTokenHeader,}
  return fetchAndHandleTokenRefresh(path, method, requestBody, headers);
} 

export const getUpdateProfile = (credentials) => {
  const accessTokenHeader = getAccessTokenHeader();
  if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  let path = API.PATHS.MAINPROFILE
  let meta = {}
    let data = {
      "profileid":credentials.id,
      "firstname": credentials.firstname,
      "surname": credentials.surname,
      "middlename": credentials.middlename,
      "role":  credentials.role,
      "department": credentials.departmentid,
      "faculty": credentials.facultyid,
      "status":credentials.status==="true",
      "institution": credentials.institutionid
    }
  const method = 'PUT';
 const requestBody = JSON.stringify({meta, data})
 const headers={
  'Content-Type':'application/json',
  ...accessTokenHeader,}
  return fetchAndHandleTokenRefresh(path, method, requestBody, headers);
} 


export const getDeleteProfile = (id) => {
  const accessTokenHeader = getAccessTokenHeader();
  let path = `${API.PATHS.MAINPROFILE}/${id}`;
  const method = 'DELETE';
  const headers = accessTokenHeader;
  return fetchAndHandleTokenRefresh(path, method, null, headers);
}
