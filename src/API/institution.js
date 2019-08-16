import {API} from '../Constants/costants'
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';

export const getConfirmSub =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    
    const path = `${API.PATHS.SUBSCRIPTION.MAIN}/${API.PATHS.SUBSCRIPTION.CONFIRM}`;
    const meta = {};
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader
    }
    const data ={
        ...credentials,
       
    }
    console.log(data)
    const requestBody = JSON.stringify({meta, data});
    // return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
    return fetch(API.URL+path,{
        method:"POST",
        body:requestBody,
        headers:headers
      }).then(response=>{
          return response.json()
      })
      .then(responseData=>{
        
      return responseData;
      })
}

export const getOwnInstitute =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
    const path = API.PATHS.INSTITUTE;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const institutionTemplate =(country)=>{
    const AccessTokenHeader = getAccessTokenHeader(); 
    const method ="GET";
    const path =  `${API.PATHS.DROPDOWNS.institution}country=${country}`;
    const headers = AccessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
  } 

export const updateInstitute = (credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'PUT';
    const meta ={};
    const path = API.PATHS.INSTITUTE;
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader,
      }
      const data = {
        name:credentials.name,
        abbrv:credentials.abbrv,
        id:credentials.id,
        email:credentials.email,
        address:credentials.address,
        phone:credentials.phone.number,
 }
 const requestBody = JSON.stringify({meta, data})
 return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}

export const addInstitution =(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method ="POST";
    const path = API.PATHS.INSTITUTE;
    const meta = {};
    const headers={
        'Content-Type':'application/json',
        ...accessTokenHeader
      }
   const data = {name:credentials.name,
   abbrv:credentials.abbrv,
   email:credentials.email,
   phone:credentials.phone,
   address:credentials.address,
   country:credentials.country,
   countrylocation:credentials.countrylocation
}
// console.log(body);
   const requestBody = JSON.stringify({meta, data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)
}


export const getAllInstitutions =(credentials) =>{
    const accessTokenHeader = getAccessTokenHeader();

    const method = 'GET';
     const headers = accessTokenHeader;
    let path = API.PATHS.ALLINSTITUTIONS;
    if(credentials){
        path= path +`?limit=${credentials.limit}&offset=${credentials.offset}&`; 
        if(credentials.name) path = path+`name=${credentials.name}`
    }
    if(!credentials){
        path= path +`?limit=${10}&offset=${0}`;
    }
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getDeleteInstitute=(id)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'DELETE';
    const headers = accessTokenHeader; 
    const path = `${API.PATHS.INSTITUTE}/${id}`;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}