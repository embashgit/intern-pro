import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';

export const getOwnCourseReg =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.COURSEREG;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}


export  const UploadCourseRegRecord = (records)=>{
    const accessTokenHeader = getAccessTokenHeader();
   
    const path = `${API.PATHS.COURSEREG}${API.PATHS.UPLOAD}`;
    const meta = {};
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader
      }
      const data = {
          ...records,
      }
      const requestBody = JSON.stringify({meta, data})
    //   return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
    return fetch(API.URL+path,{
        method:'POST',
        body:requestBody,
        headers:headers
      }).then(response=>{
          return response.json();
      })
      .then(responseData=>{
      return responseData;
      })
    }    
      
export const getAllCourseReg =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
     let path = API.PATHS.ALLCOURSEREG;
     if(credentials){
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`         
        if(credentials.institute)  path = path+`&institution=${String(credentials.institute)}`
       if(credentials.name) path = path+`&name=${credentials.name}`;
     }
     if(!credentials){
        path= path + `?limit=${10}&offset=${0}`; 
    }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const GetupdateCourseReg = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.COURSEREG;
    const headers={
       
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
      const data = {
        institution:credentials.institution,
        description:credentials.description,
        id:credentials.id,
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const AddCourseReg =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.COURSEREG;
    const meta = {};
    const headers = {
        'Content-Type':'application/json',
        ...accessTokenHeader,
    }
   const data = {
    regno:credentials.student,
    session:credentials.session,
    semester:credentials.semester,
    institution:credentials.institution,
    course:credentials.course,
}
   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const getCourseRegDelete=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers = accessTokenHeader; 
    const path = `${API.PATHS.COURSEREG}${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}