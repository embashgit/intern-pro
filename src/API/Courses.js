import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';

export const getOwnCourses =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.COURSES
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getALlCourses =(credentials) =>{
    let path;
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
    path = API.PATHS.ALLCOURSES;
     const headers = accessTokenHeader;
     if(credentials){    
         path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`;     
         if(credentials.institute)  path = path+`&institution=${String(credentials.institute)}`
         if(credentials.faculty) path = path+`&faculty=${credentials.faculty}`;
         if(credentials.department)  path = path+`&department=${credentials.department}`;
        if(credentials.name) path = path+`&name=${credentials.name}`;
     }
     if(!credentials){
        path= path +`?limit=${10}&offset=${0}`; 
     }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}


export  const UploadCourseRecord = (records)=>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const path = `${API.PATHS.COURSES}/${API.PATHS.UPLOAD}`;
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
export const getUpdateCourse = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.COURSES;
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
      const data = {
        title:credentials.title,
        faculty:credentials.facultyid,
        institution:credentials.institutionid,
        code:credentials.code,
        department:credentials.departmentid,
        id:credentials.id,
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}
export const addCourses =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.COURSES;
    const meta = {};
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader,

      }
   const data = {
    title:credentials.title,
   faculty:credentials.facultyid,
   institution:credentials.institutionid,
   code:credentials.code,
   department:credentials.departmentid
}
   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}
export const getCourseDelete=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader,

      }
    const path = `${API.PATHS.COURSES}/${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

