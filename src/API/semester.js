import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';



export const getOwnSemester =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.SEMESTER;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getAllSemester =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const method = 'GET';
     const headers = accessTokenHeader;
     let path = API.PATHS.ALLSEMESTER;
     if(credentials){
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}`;     
        if(credentials.institute) path = path+`&institution=${credentials.institute}`;
       if(credentials.name) path = path+`&name=${credentials.name}`;    
     }
     if(!credentials){
        path= path +`?limit=${10}&offset=${0}`;
     }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}


export const GetupdateSemester = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.SEMESTER;
    const headers={
       
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
    
      const data = {
     
        description:credentials.description,
        id:credentials.id,
        status:credentials.status ==="true",
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const AddSemester =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.SEMESTER;
    const meta = {};
    const headers = {
        'Content-Type':'application/json',
        ...accessTokenHeader,
    }
    
   const data = {
    institution:credentials.institutionid,
    description:credentials.description,
    status:credentials.status==="true"
}

   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const getSemesterDelete=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers = accessTokenHeader; 
    const path = `${API.PATHS.SEMESTER}/${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}