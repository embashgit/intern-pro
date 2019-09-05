import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';

export const getDepartmentDropdown=(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
     let path = API.PATHS.DROPDOWNS.departments; 
     if(credentials){
         path = path+`institution=${credentials.institution}&faculty=${credentials.faculty}`
     }
     return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getOwnDepartment =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.DEPARTMENT;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getALlDepartment =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
    
    let path = API.PATHS.ALLDEPARTMENTS; 
    if(credentials){    
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`;     
        if(credentials.institute)  path = path+`&institution=${String(credentials.institute)}`
        if(credentials.faculty) path = path+`&faculty=${credentials.faculty}`;
       if(credentials.name) path = path+`&name=${credentials.name}`;
      
    }
    if(!credentials){
        path= path + `?limit=${10}&offset=${0}`; 
    }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const updateDepartment = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.DEPARTMENT;
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
      const data = {
        // faculty:credentials.facultyid,
        // institution:credentials.institutionid,
        name:credentials.name,
        abbrv:credentials.abbrv,
        id:credentials.id,
        // code:credentials.code,
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}
export const addDepartment =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.DEPARTMENT;
    const meta = {};
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader
      }
   const data = {
    name:credentials.name,
   abbrv:credentials.abbrv,
   faculty:credentials.facultyId,
   institution:credentials.institutionId,
//    code:credentials.code
}
   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const getDepartmentDelete=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers = accessTokenHeader; 
    const path = `${API.PATHS.DEPARTMENT}${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

