import { API } from "../Constants/costants";
import store from "../routes/store";
import { getAccessTokenHeader,fetchAndHandleTokenRefresh } from "./common";


const {MAIN,SUBSCRIBE,CONFIRM} =API.PATHS.SUBSCRIPTION

export const getSubscription =()=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'GET';
     const headers = accessTokenHeader;
     let path/*subscription endpoint*/=MAIN;
    //  const requestBody = JSON.stringify({meta, data});
     return fetch(API.URL+path,{
        method : 'GET',
        headers:headers
      }).then(response=>{
          return response.json()
      })
      .then(responseData=>{
        
      return responseData;
      })
}
  

export const getConfirmSubscription = (credentials)=>{
    const accessTokenHeader =getAccessTokenHeader();
     ;
    const meta = {};
    const headers = accessTokenHeader
    const method ='POST';
    const data ={
        ...credentials
    }
    const path =   `${MAIN}/${CONFIRM}`
    const requestBody = JSON.stringify({meta,data})
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers)

}

export const getProccessSubscription=(credentials)=>{
    const accessTokenHeader = getAccessTokenHeader();
    const method = 'POST';
  
    const headers = accessTokenHeader ;
    let path =`${MAIN}/${SUBSCRIBE}`;
    const meta ={};
    const data = {
        id:credentials.id
    }
    const requestBody = JSON.stringify({meta, data});
    return fetchAndHandleTokenRefresh(path,method,requestBody,headers);
}


