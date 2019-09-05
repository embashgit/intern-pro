import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh,  } from './common';


export const getOwnStudent = () =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.STUDENT;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export  const UploadStudentRecord = (records)=>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const path = `${API.PATHS.STUDENT}/${API.PATHS.UPLOAD}`;
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
          return response.json()
      })
      .then(responseData=>{
        
      return responseData;
      })
    
}

export const updateStudent = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    // const method = 'PUT';
    const meta ={};
    const path = API.PATHS.STUDENT;
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
      const data = {
        surname:credentials.surname,
        middlename:credentials.middlename,
        firstname:credentials.firstname,
        email:credentials.email,
        gender:credentials.gender,
        regno:credentials.regno,
        passport:credentials.passport,
        active: true,
        phone:credentials.phone.number
 }
 const requestBody = JSON.stringify({meta, data})
console.log(requestBody)
 return fetch(API.URL+path,{
    method:'PUT',
    body:requestBody,
    headers:headers
  }).then(response=>{
      return response.json()
  })
  .then(responseData=>{
  
  return responseData;
  })
}

export const getAddStudent =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.STUDENT;
    const meta = {};
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader
      }
   const data = {
        surname:credentials.surname,
        middlename:credentials.middlename,  
        firstname:credentials.firstname,
        email:credentials.email,
        gender:credentials.gender,
        regno:credentials.regno,
        phone:credentials.phone.number,
        department:credentials.department,
        faculty:credentials.faculty,
        active: true,
        passport:credentials.passport,
        institution:credentials.institution
   }		
   const requestBody = JSON.stringify({meta, data})
    // return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
    console.log(requestBody)
    return fetch(API.URL+path,{
        method:'POST',
        body:requestBody,
        headers:headers
      }).then(response=>{
          return response.json()
      })
      .then(responseData=>{
      
      return responseData;
      })
}

export const getAllStudent =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();
    console.log(credentials)
    const method = 'GET';
     const headers = accessTokenHeader;
    let path = API.PATHS.ALLSTUDENT;
    if(credentials){    
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`; 
         if(credentials.institute)  path = path+`&institution=${String(credentials.institute)}`
         if(credentials.faculty) path = path+`&faculty=${credentials.faculty}`;
         if(credentials.department)  path = path+`&department=${credentials.department}`;
        if(credentials.name) path = path+`&name=${credentials.name}`;
    }
    if (!credentials){
        path = path+`?limit=${10}&offset=${0}`;
    }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getDeleteStudent=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader
      } 
    const path = `${API.PATHS.STUDENT}/${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}