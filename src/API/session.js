import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';



export const getOwnSession =() =>{
    const accessTokenHeader = getAccessTokenHeader();
     
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.SESSION;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getAllSession =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();
     
    const method = 'GET';
     const headers = accessTokenHeader;
     let path = API.PATHS.ALLSESSION;
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

export const GetupdateSession = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.SESSION;
    const headers={
       
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
    
      const data = {
        description:credentials.description,
        startdate:credentials.startdate,
        enddate:credentials.enddate,
        status:credentials.status==="true",
        id:credentials.id,
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}


export const AddSession =(credentials)=>{
console.log(credentials)
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.SESSION;
    const meta = {};
    const headers = {
        'Content-Type':'application/json',
        ...accessTokenHeader,
    }
   const data = {
    institution:credentials.institutionid,
    description:credentials.description,
    startdate:credentials.startdate,
    enddate:credentials.enddate,
    status:credentials.status==="true"
}
   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const getSessionDelete=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers = accessTokenHeader; 
    const path = `${API.PATHS.SESSION}/${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}