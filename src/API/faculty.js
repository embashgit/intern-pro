import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';


export const getFacultyDropDown=(institution)=>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const method = 'GET';
     const headers = accessTokenHeader;
     const path = `${API.PATHS.DROPDOWNS.faculties}?institution=${institution}`;
     return fetchAndHandleTokenRefresh(path,method,null,headers);
}


export const getOwnFaculty =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.FACULTY;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getALlFaculty =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
    const headers = accessTokenHeader;
    let path = API.PATHS.ALLFACULTY;
    if(credentials){
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`         
        if(credentials.institute)  path = path+`&institution=${String(credentials.institute)}`
       if(credentials.name) path = path+`&name=${credentials.name}`;
     }
     if(!credentials){
        path= path +`?limit=${10}&offset=${0}`;
    }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}


export const GetupdateFaculty = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.FACULTY;
    const headers={
       
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
    
      const data = {
        name:credentials.name,
        abbrv:credentials.abbrv,
        // code:credentials.code,
        id:credentials.id
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const addFaculty =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.FACULTY;
    const meta = {};
    const headers = {
        'Content-Type':'application/json',
        ...accessTokenHeader,
    }
   const data = {
       name:credentials.name,
   abbrv:credentials.abbrv,
   institution:credentials.institutionId,
//    code:credentials.code
}
// console.log(body);
   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const getFacultyDelete=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers = accessTokenHeader; 
    const path = `${API.PATHS.FACULTY}/${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}