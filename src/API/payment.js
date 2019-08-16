import { API } from "../Constants/costants";
import { getAccessTokenHeader, fetchAndHandleTokenRefresh } from './common';


const {MAIN,FEE,HISTORY,REFERENCE} =API.PATHS.PAYMENT

export const getPaymentFee =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
     let path/*payment fee endpoint*/=`${MAIN}/${FEE}`;
    
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getAddPayment=(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const headers = {
        'Content-Type':'application/json',
        ...accessTokenHeader,
    }
    let path =MAIN ;
    const meta ={};
    const data = {
        reference:credentials.refference,
        phone:credentials.phone,
    }
    const requestBody = JSON.stringify({meta, data})
    
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

export const getPaymentHistory =() =>{
    const accessTokenHeader = getAccessTokenHeader();
    
     const headers = accessTokenHeader;
     let path /*payment history endpoint*/=`${MAIN}/${HISTORY}`;
     console.log(API.URL+path);
     return fetch(API.URL+path,{
        method : 'GET',
        headers:headers
      }).then(response=>{
          return response.json()
      })
      .then(responseData=>{
      
      return responseData;
      })
    // return fetchAndHandleTokenRefresh(path,method,null,headers);
}

export const getPaymentReference =(payload) =>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
     let path /*payment reference endpoint*/=`${MAIN}/${REFERENCE}${payload}`;
    
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}